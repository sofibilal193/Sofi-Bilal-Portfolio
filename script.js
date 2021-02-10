var i =0;
var names = document.getElementsByClassName("other_names");

window.onload = function() {
	upDown();//call for Show/Hide Names
	
	deskTopFun();//Call to move Elements

	showHideg2Top(); //Disable got to top button
};
//
function upDown() {

	if(i == names.length) {
		i = 0;
	}
	for(var j=0;j<names.length;j++) {
		names[j].style.display = "none";
	}
	names[i].style.display = "block";

	i++;
					
	setTimeout(upDown, 2000);
}


function deskTopFun() {
	var deskMin = window.matchMedia('all and (min-width: 768px)').matches;//true or false
	var iconBox = document.getElementById("iconDiv").cloneNode(true);//make clone and move

	if(deskMin) {
		var topParent = document.getElementById("topBarDiv");//parent in which the element is moved
		var refChildTop = document.getElementById("see_myCV_Div");//reference child of element to be inserted

		topParent.insertBefore(iconBox, refChildTop);
		document.getElementsByClassName("icons")[1].remove();
		}
		else {
		var botmParent = document.getElementById("bottomMaiAndIconDiv");//parent in which the element is moved
		var refChildBotm = document.getElementById("hireMeDiv");//reference child of element to be inserted

		botmParent.insertBefore(iconBox, refChildBotm);
		document.getElementsByClassName("icons")[0].remove();
		}
}
document.onscroll = function(){
	showHideg2Top();
}
function showHideg2Top() {
	var g2TopBtn = document.getElementById("g2Top");
	if(window.scrollY == 0 ) {
		g2TopBtn.style.pointerEvents = 'none';
		g2TopBtn.style.opacity = '0';
	}
	else {
		g2TopBtn.style.pointerEvents = 'auto';
		g2TopBtn.style.opacity = '1';
	}
}


//Menu Div
function toggleMenu() {
  document.getElementById('menuBtn').classList.toggle("change");  

  var y = document.getElementById("menuDiv");
  var body = document.getElementById("bodyTag");
  //close
  if(y.style.width == '100vw') {
  	y.style.width = '0vw';
  	body.style.overflow = 'auto';
  }
  else {//open
  	y.style.width = '100vw';
  	body.style.overflow = 'hidden';
  }

}

function moveScroll(clickedBtn) {
	toggleMenu();
	if(clickedBtn.name == 'home') {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	}
	else if(clickedBtn.name == 'work') {
	document.querySelector(".work").scrollIntoView(true);
	}
	else if(clickedBtn.name == 'skills') {
		document.querySelector(".skills").scrollIntoView(true);
	}
	else if(clickedBtn.name == 'awAndCert') {
		document.querySelector(".AandC").scrollIntoView(true);
	}
	else if(clickedBtn.name == 'AboutMe') {
		document.querySelector(".abtMe").scrollIntoView(true);
	}
	else if(clickedBtn.name == 'contact') {
		document.querySelector(".contact").scrollIntoView(true);
	}	
}

function moveToTop() {
	window.scrollTo(0,0);
	//alert("hi");
}
function showMsgAftrSend() {


	setTimeout(function(){ alert("Thank You!"); }, 2000);
	
}

/*
onscroll = function(){
	if(document.querySelector("#bodyTag").pageYOffset() == '0' {
		document.getElementById('g2Top').pageYOffset() == 
	}
	else {
		document.getElementById('g2Top').style.display = 'block';
	}
}
*/