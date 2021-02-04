var i =0;
var names = document.getElementsByClassName("other_names");
window.onload = function() {
	upDown();//call for Show/Hide Names
	
	deskTopFun();//Call to move Elements
};

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
//Validate data and show Error
function ValidateData() {
	var x = document.getElementById('nId'),
	    y = document.getElementById('eId'),
	    z = document.getElementById('mId'),
	   e1 = document.getElementById('error1'),
	   e2 = document.getElementById('error2'),
	   e3 = document.getElementById('error3'),
	   cond1 = false,
	   cond2 = false,
	   cond3 = false;

	  
			if(!x.value.match(/^[a-zA-Z ]{2,30}$/)) {
			e1.innerHTML ="Must be Alphabets only (Min. 2 and Max 30)";
		}
		else {
			e1.innerHTML = "";
			cond1 = true;
		}

		 if(!y.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
				e2.innerHTML ="Must be Valid Email!";
			}
		else {
			e2.innerHTML ="";
			cond2 = true;
		}

		if(z.value == "" || z.value == " ") {
				e3.innerHTML ="Message Can not be Empty!";
			}
		else {
			e3.innerHTML = "";
			cond3 = true;
		}
			
		 if(cond1  && cond2  && cond3 ) {
	   		alert("Thank You " + nId.value + "\nI will be back to you soon!!");
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
	document.querySelector("#bodyTag").scrollIntoView(true);
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
onscroll = function(){
	if(document.querySelector("#bodyTag").pageYOffset() == '0' {
		document.getElementById('g2Top').pageYOffset() == 
	}
	else {
		document.getElementById('g2Top').style.display = 'block';
	}
}
*/