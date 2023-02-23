let isGreen = true;
let handleControll = null;

export const changeBg = () => {
	if (!handleControll) {
		handleControll = setInterval(() => {
			document.body.style.background = isGreen ? "#190" : "#987";
			isGreen = !isGreen;
		}, 500);
	}
};

export const stopBg = () => {
	if (handleControll) {
		clearInterval(handleControll);
		handleControll = null;
		document.body.style.background = "none";
	}
};
