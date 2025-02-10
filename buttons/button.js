// variable stuff
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
let wood = 0;
let sturdyWood = 0;
let denseWood = 0;
let WoodGenIntervalON;

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
document.getElementById("tgwg").addEventListener("click", function() {
  woodGen();
});

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

let woodGenCB = document.getElementById("tgwg");

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

function woodGen(){
	if (woodGenCB.checked == true){
		WoodGenIntervalON = setInterval(t1, 1000);
	} else {
		clearInterval(WoodGenIntervalON);
	}
}
