// variable stuff
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
let wood = 0;
let sturdyWood = 0;
let denseWood = 0;
let WoodGenIntervalON;
let SturdyGenIntervalON;
let DenseGenIntervalON;
let woodgenbought = false;
let sturdygenbought = false;
let densegenbought = false;

//the buttons
document.getElementById("button1").addEventListener("click", function() {
  t1();
});
document.getElementById("button2").addEventListener("click", function() {
  t2();
});
document.getElementById("button3").addEventListener("click", function() {
  t3();
});
document.getElementById("woodgen").addEventListener("click", function() {
  woodGen();
});
document.getElementById("sturdygen").addEventListener("click", function() {
  sturdyGen();
});
document.getElementById("densegen").addEventListener("click", function() {
  denseGen();
});
document.getElementById("buywoodgen").addEventListener("click", function() {
  buyWoodGen();
});
document.getElementById("buysturdygen").addEventListener("click", function() {
  buySturdyGen();
});
document.getElementById("buydensegen").addEventListener("click", function() {
  buyDenseGen();
});

//key listeners
document.addEventListener("keydown", function(event){
  if (event.shiftKey == true){
	shift = "true";
  }
});
document.addEventListener("keyup", function(event){
  if (event.shiftKey == false){
	shift = "false";
  }
});

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let val3 = document.getElementById("val3");

let woodGenCB = document.getElementById("woodgen");
let sturdyGenCB = document.getElementById("sturdygen");
let denseGenCB = document.getElementById("densegen");

val1.innerHTML = wood;
val2.innerHTML = sturdyWood;
val3.innerHTML = denseWood;

let shift = "false";
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//functions
function t1() {
  wood++;
  val1.innerHTML = wood;
}

function t2() {
  if(wood >= 9 || shift == "true"){
  	if (shift == "true"){
    	val1.innerHTML = wood;
    	sturdyWood++;
    	val2.innerHTML = sturdyWood;
  	} else {
			wood -= 9;
    	val1.innerHTML = wood;
    	sturdyWood++;
    	val2.innerHTML = sturdyWood;
		}
  }
}

function t3(){
  if (sturdyWood>=9 || shift == "true"){
  	if (shift == "true"){
    	val2.innerHTML = sturdyWood;
    	denseWood++;
    	val3.innerHTML = denseWood;
  	} else {
			sturdyWood -= 9;
    	val2.innerHTML = sturdyWood;
    	denseWood++;
    	val3.innerHTML = denseWood;
		}
  }
}
//idea for making file smaller, use string concatenation on variable names becauae I use the same scheme on all of them.
function woodGen(){
	if (woodGenCB.checked == true && woodgenbought == true){
		WoodGenIntervalON = setInterval(t1_1, 1000);
	} else {
		clearInterval(WoodGenIntervalON);
	}
}
function t1_1(){
  wood++;
  val1.innerHTML = wood;
}
function sturdyGen(){
	if (sturdyGenCB.checked == true && sturdygenbought == true){
		SturdyGenIntervalON = setInterval(t2_1, 1000);
	} else {
		clearInterval(SturdyGenIntervalON);
	}
}
function t2_1(){
	sturdyWood++;
	val2.innerHTML = sturdyWood;
}
function denseGen(){
	if (denseGenCB.checked == true && densegenbought == true){
		DenseGenIntervalON = setInterval(t3_1, 1000);
	} else {
		clearInterval(DenseGenIntervalON);
	}
}
function t3_1(){
	denseWood++;
  val3.innerHTML = denseWood;
}
function buyWoodGen(){
 if (wood >= 10){
		wood -= 10;
		woodgenbought = true;
		woodGenCB.checked = true;
		woodGen()
	  buywoodgen.remove();
	}
}

function buySturdyGen(){
	if (sturdyWood >= 10){
		sturdyWood -= 10;
		sturdygenbought = true;
		sturdyGenCB.checked = true;
		sturdyGen();
		buysturdygen.remove();
	}
}

function buyDenseGen(){
	if (denseWood >= 10){
		denseWood -= 10;
		densegenbought = true;
		denseGenCB.checked = true;
		denseGen();
		buydensegen.remove();
	}
}
