/* -------------------------------- 
71. Project
---------------------------------*/

// BUDJET CONDROLLER
let budgetController = (function () {
    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let calculateTotal = function (type) {
        let sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {
            let newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new items based on 'inc or exp'
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push data structure
            data.allItems[type].push(newItem);

            // Return New Item
            return newItem;
        },

        deleteItem: function (type, id) {
            let ids, index;

            ids = data.allItems[type].map(function (current) {
                return current.id;
            });
            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            };

        },

        calculateBudget: function () {
            // calculate toatal income and expence
            calculateTotal('inc');
            calculateTotal('exp');

            // calculate the budget : income - expence
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income
            if (data.totals.inc > 0)  {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1; 
            }
             
        },

        calculatePercentage: function () {
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            })
        },

        getPercentage: function () {
            let allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },
 
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function () {
            console.log(data);
        }
    };

}) ();

// UI CONDROLLER
let UIController = (function () {
    let DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expencesPerLabel: '.item__percentage'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };
        },

        addListItem: function (obj, type) {
            let html, newHtml, element;

            // Create HTML String
            if (type === 'inc') {
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // Replace placeholder HTML
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
    
            // Insert the HTML
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        },

        deleteListItem: function (selectorID) {
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            });
            fieldsArr[0].focus();
        },

        displayBudget: function (obj) {
            document.querySelector(DOMstring.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstring.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstring.expenseLabel).textContent = obj.totalExp;
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstring.percentageLabel).textContent = '---';
            }
        },

        displayPercentages: function (percentages) {
            let fields = document.querySelectorAll(DOMstring.expencesPerLabel);
            let nodeListForEach = function (list, callback) {
                for (let i = 0; i < list.length; i++) {
                    callback(list[i], i);
                };
            };
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        formatNumber: function (num, type) {

        },

        getDOMstring: function () {
            return DOMstring;
        }
    };
}) ();

// GLOBAL CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
    let setupEventListener = function () {
        let DOM = UICtrl.getDOMstring();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                ctrlAddItem();
            };
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    let updateBudget = function () {
        // 1 Calculate Budget 
        budgetCtrl.calculateBudget();

        // 2 Return the budget
        let budget = budgetCtrl.getBudget();
         
        // 3 Display the budget UI
        UICtrl.displayBudget(budget);
    };
    
    let updatePercentage = function () {
        // 1 Calculate percentage
        budgetCtrl.calculatePercentage();

        // 2 Read percentage
        let percentages = budgetCtrl.getPercentage();

        // 3 Update UI
        UICtrl.displayPercentages(percentages);
    };

    let ctrlAddItem = function () {
        let input, newItem;

        // 1 Get input field
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0 ) {
            // 2 Add the item
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3 Add the item UI
            UICtrl.addListItem(newItem, input.type);

            // 4 CLear Fields
            UICtrl.clearFields()

            // 5 Calculate and update Budget
            updateBudget();

            // 6 Update percentage
            updatePercentage();
        }
    };

    let ctrlDeleteItem = function (event) {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id;

        if (itemID) {
            splitID = itemID.split('-'); 
            type = splitID[0];
            ID =  parseInt(splitID[1]);

            // 1 Delete Item data
            budgetCtrl.deleteItem(type, ID);

            // 2 Delete item UI
            UICtrl.deleteListItem(itemID); 

            // 3 Update budget
            updateBudget();

            // 4 Update percentage
            updatePercentage();
        }
    };

    return {
        init: function () {
            console.log('Application start now!');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListener();
        }
    }

}) (budgetController, UIController);

controller.init();