window.onload = function() {
	//upDown();//call for Show/Hide Names
	
	deskTopFun();//Call to move Elements

	showHideg2Top(); //Disable got to top button
};


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
//top button
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
  var container = document.querySelector('.container');
  
  //close
  if(y.style.height == '80vh') {
  	//closed
  	y.style.height = '0';
  	y.style.bottom = '0';
  	container.style.opacity = '1';
  	container.style.pointerEvents = 'auto';
  	document.body.style.overflow = 'auto';
  	
  }
  else {//open
  	//opened
  	y.style.height = '80vh';
  	y.style.bottom = '40px';
  	container.style.opacity = '0.8';
  	container.style.pointerEvents = 'none';
  	document.body.style.overflow = 'hidden';
  }

}
//Menu buttons funtion
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

/*

function outSideClick(event) {

    var box = document.getElementById('menuDiv');
    if (event.target != box && event.target.parentNode != box){
    	toggleMenu();
    }
}
*/