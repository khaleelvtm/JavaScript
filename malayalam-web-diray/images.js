// Questions
const files = ['  photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80', '    photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', '     photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80', '', ' photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', ' ', '        photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'];

// Answer
const filterItem = (imgCollection) => {
    let selectedImages = imgCollection
        .map((imgSRC) => imgSRC.trim())
        .filter((imgSRC) => imgSRC.length !== 0 && imgSRC.match(/w=200(?=&q)/))
        .map((imgSRC) => `https://images.unsplash.com/${imgSRC}`);
    return selectedImages;
}

const addImages = () => {
    let selectedItems = filterItem(files);
    if (!selectedItems) return;
    let selectList = document.querySelector('.images-list');

    selectedItems.forEach(imgSRC => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', imgSRC);
        selectList.appendChild(li)
        li.appendChild(img)
    });
}

console.log(addImages());
