// variable stuff
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
let res1 = 0;
let res2 = 0;
let res3 = 0;

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
  tgwg();
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
//ToGgle Wood Gen Check Box
let tgwgcb = document.getElementById("tgwg");

val1.innerHTML = res1;
val2.innerHTML = res2;
val3.innerHTML = res3;

let shift = "false";
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//functions
function t1() {
  res1++;
  val1.innerHTML = res1;
}

function t2() {
  if(res1 >= 9 || shift == "true"){
  	if (shift == "true"){
    	val1.innerHTML = res1;
    	res2++;
    	val2.innerHTML = res2;
    } else {
    	res1 -= 9;
    	val1.innerHTML = res1;
    	res2++;
    	val2.innerHTML = res2;
  	}
  }
}

function t3(){
  if (res2>=9 || shift == "true"){
  	if (shift == "true"){
    	val2.innerHTML = res2;
    	res3++;
    	val3.innerHTML = res3;
  	} else {
    	res2 -= 9;
    	val2.innerHTML = res2;
    	res3++;
    	val3.innerHTML = res3;
  	}
  }
}

function tgwg(){
	if (tgwgcb.checked == true){
		//Wood 1 Gen
		let w1g = setInterval(t1, 1000);
	} else {
		clearInterval(w1g);
	}
}
