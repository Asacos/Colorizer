const root = document.documentElement;
var redVal = getComputedStyle(root).getPropertyValue('--bgcleftR');
var greenVal = getComputedStyle(root).getPropertyValue('--bgcleftG');
var blueVal = getComputedStyle(root).getPropertyValue('--bgcleftB');
var textWidth = +getComputedStyle(root).getPropertyValue('--tbwidth').slice(0, -1);
var textDown = +getComputedStyle(root).getPropertyValue('--tbdown').slice(0, -1);
var textRight = +getComputedStyle(root).getPropertyValue('--tbright').slice(0, -1);
var curr = "bg";
var isPlayRed, isGrowRed, isPlayGreen, isGrowGreen, isPlayBlue, isGrowBlue, isPlayWidth, isGrowWidth, isPlayDown, isGrowDown, isPlayRight, isGrowRight;
var speedForm=10;
var speedColor=50;
setDefault();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var rad=document.getElementsByName('change');

//Переключение области взаимодействия
function changeWorkspace(val){
	switch (val) {
		case "bg":
			redVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcleftR');
			greenVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcleftG');
			blueVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcleftB');
			break;
		case "inp":
			redVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcinpR');
			greenVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcinpG');
			blueVal = getComputedStyle(document.documentElement).getPropertyValue('--bgcinpB');
			break;
		case "text":
			redVal = getComputedStyle(document.documentElement).getPropertyValue('--txtcinpR');
			greenVal = getComputedStyle(document.documentElement).getPropertyValue('--txtcinpG');
			blueVal = getComputedStyle(document.documentElement).getPropertyValue('--txtcinpB');
			break;
	}
	const redRange = document.querySelector("#redRange");
	const greenRange = document.querySelector("#greenRange");
	const blueRange = document.querySelector("#blueRange");
	const redValue = document.querySelector("#redVal");
	const greenValue = document.querySelector("#greenVal");
	const blueValue = document.querySelector("#blueVal");
	redRange.value = redVal;
	greenRange.value = greenVal;
	blueRange.value = blueVal;
	redValue.value = redVal;
	greenValue.value = greenVal;
	blueValue.value = blueVal;
	curr = val;
}

//Изменение цвета
function setColor(val, color){
	var setter
	switch (curr) {
		case "bg":
			setter='--bgcleft';
			break;
		case "inp":
			setter='--bgcinp';
			break;
		case "text":
			setter='--txtcinp';
		break;
	}
	switch (color) {
		case 'red':
			redVal = val;
			root.style.setProperty(setter+'R', redVal);
			const redValue = document.querySelector("#redVal");
			redValue.value=redVal;
			break;
		case 'green':
			greenVal = val;
			root.style.setProperty(setter+'G', greenVal);
			const greenValue = document.querySelector("#greenVal");
			greenValue.value = greenVal;
			break;
		case 'blue':
			blueVal = val;
			root.style.setProperty(setter+'B', blueVal);
			const blueValue = document.querySelector("#blueVal");
			blueValue.value = blueVal;
			break;
	}
}

//Изменение формы 
function setForm(val, par) {
	switch (par) {
		case 'width':
			textWidth = val;
			root.style.setProperty('--tbwidth', textWidth+'%');
			break;
		case 'down':
			textDown = val;
			root.style.setProperty('--tbdown', textDown+'%');
			break;
		case 'right':
			textRight = val;
			root.style.setProperty('--tbright', textRight+'%');
			break;
	}
}

//Кнопка формы 
async function playForm(src, par) {
	var p, tb;
	switch (par) {
		case 'down':
			p=document.querySelector("#playDown");
			tb=document.querySelector("#downRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					p.src="src/paus.png";
					isPlayDown=true;
					var val=+tb.value;
					while (isPlayDown) {
						await sleep(1000/speedForm);
						if(val === 90) {
							isGrowDown=false;
						}
						if(val === 5) {
							isGrowDown=true;
						}
						if (isGrowDown) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setForm(val, par);
					}
					break;
				case "paus.png":
					p.src="src/play.png";
					isPlayDown=false;
					break;
			}
			break;
		case 'right':
			p=document.querySelector("#playRight");
			tb=document.querySelector("#rightRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					p.src="src/paus.png";
					isPlayRight=true;
					var val=+tb.value;
					while (isPlayRight) {
						await sleep(1000/speedForm);
						if(val === 90) {
							isGrowRight=false;
						}
						if(val === 5) {
							isGrowRight=true;
						}
						if (isGrowRight) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setForm(val, par);
					}
					break;
				case "paus.png":
					p.src="src/play.png";
					isPlayRight=false;
					break;
			}
			break;
		case 'width':
			p=document.querySelector("#playWidth");
			tb=document.querySelector("#widthRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					p.src="src/paus.png";
					isPlayWidth=true;
					var val=+tb.value;
					while (isPlayWidth) {
						await sleep(1000/speedForm);
						if(val === 90) {
							isGrowWidth=false;
						}
						if(val === 5) {
							isGrowWidth=true;
						}
						if (isGrowWidth) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setForm(val, par);
					}
					break;
				case "paus.png":
					p.src="src/play.png";
					isPlayWidth=false;
					break;
			}
			break;
	}
}

//Кнопка цвета 
async function playColor(src, color) {
	var c, tb;
	switch (color) {
		case 'red':
			c=document.querySelector("#playRed");
			tb=document.querySelector("#redRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					c.src="src/paus.png";
					isPlayRed=true;
					var val=+tb.value;
					while (isPlayRed) {
						await sleep(1000/speedColor);
						if(val === 255) {
							isGrowRed=false;
						}
						if(val === 0) {
							isGrowRed=true;
						}
						if (isGrowRed) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setColor(val, color);
					}
					break;
				case "paus.png":
					c.src="src/play.png";
					isPlayRed=false;
					break;
			}
			break;
		case 'green':
			c=document.querySelector("#playGreen");
			tb=document.querySelector("#greenRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					c.src="src/paus.png";
					isPlayGreen=true;
					var val=+tb.value;
					while (isPlayGreen) {
						await sleep(1000/speedColor);
						if(val === 255) {
							isGrowGreen=false;
						}
						if(val === 0) {
							isGrowGreen=true;
						}
						if (isGrowGreen) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setColor(val, color);
					}
					break;
				case "paus.png":
					c.src="src/play.png";
					isPlayGreen=false;
					break;
			}
			break;
		case 'blue':
			c=document.querySelector("#playBlue");
			tb=document.querySelector("#blueRange");
			switch (src.substr(src.length-8)) {
				case "play.png":
					c.src="src/paus.png";
					isPlayBlue=true;
					var val=+tb.value;
					while (isPlayBlue) {
						await sleep(1000/speedColor);
						if(val === 255) {
							isGrowBlue=false;
						}
						if(val === 0) {
							isGrowBlue=true;
						}
						if (isGrowBlue) {
							val+=1;
							tb.value=val.toString();
						} else {
							val-=1;
							tb.value=val.toString();
						}
						setColor(val, color);
					}
					break;
				case "paus.png":
					c.src="src/play.png";
					isPlayBlue=false;
					break;
			}
			break;
	}
}

function stopAll() {
	setDefault();
	document.querySelector("#playDown").src="src/play.png";
	document.querySelector("#playRight").src="src/play.png";
	document.querySelector("#playWidth").src="src/play.png";
	document.querySelector("#playRed").src="src/play.png";
	document.querySelector("#playGreen").src="src/play.png";
	document.querySelector("#playBlue").src="src/play.png";
}

function setDefault() {
	isPlayRed=false;
	isGrowRed=true;
	isPlayGreen=false;
	isGrowGreen=true;
	isPlayBlue=false;
	isGrowBlue=true;
	isPlayWidth=false;
	isGrowWidth=true;
	isPlayDown=false;
	isGrowDown=true;
	isPlayRight=false;
	isGrowRight=true;
}