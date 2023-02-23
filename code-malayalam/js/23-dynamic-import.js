import { createButton } from "./weidget.js";

createButton("One", () => {
	alert("Click One");
});
createButton("Two", async () => {
	// import("./features.js").then((featImp) => {
	// 	createButton("Start", featImp.changeBg);
	// 	createButton("Stop", featImp.stopBg);
	// });
	const featImp = await import("./features.js");
	createButton("Start", featImp.changeBg);
	createButton("Stop", featImp.stopBg);
});
