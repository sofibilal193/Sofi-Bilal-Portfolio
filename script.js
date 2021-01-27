var i =0;
var x = document.getElementsByClassName("other_names");
window.onload = function() {upDown()};

function upDown() {

if(i == x.length) {
i = 0;
}
for(var j=0;j<x.length;j++) {
x[j].style.display = "none";
}
x[i].style.display = "block";

i++;
					
setTimeout(upDown, 2000);
}

function copyEmail(e) {
e.style.userSelect = "all"; 
}

function getInTouch(element) {
	var nameField = document.getElementById("nId");
	var emailField = document.getElementById("eId");
	var msgField = document.getElementById("mId");

	var nameLabel = document.getElementById("nLabel");
	var emailLabel = document.getElementById("eLabel");
	var msglabel = document.getElementById("mLabel");

	//alert("hi");
	if(element.name == 'name') {

		nameLabel.innerHTML = element.placeholder;
	}
	else if(element.name == 'email') {
		emailLabel.innerHTML = element.placeholder;
	}
	else if(element.name == 'msg') {
		msglabel.innerHTML = element.placeholder;
	}
}
//Swap placeholder and label Names on Focus otu
function focusOutEffects(element) {
	var nameLabel = document.getElementById("nLabel");
	var emailLabel = document.getElementById("eLabel");
	var msglabel = document.getElementById("mLabel");
	if(element.name == 'name') {

		nameLabel.innerHTML = '';
	}
	else if(element.name == 'email') {
		emailLabel.innerHTML = '';
	}
	else if(element.name == 'msg') {
		msglabel.innerHTML = '';
	}
	else if(element.name == 'sendBtn') {
		alert("Thank You!!");
	}

}
//Validate data and show Error
function ValidateData() {
	var x = document.getElementById('nId');
	var y = document.getElementById('eId');
	var z = document.getElementById('mId');
	var e1 = document.getElementById('error1');
	var e2 = document.getElementById('error2');
	var e3 = document.getElementById('error3');
	var cond = false;

		if(!x.value.match(/^[a-zA-Z ]{2,30}$/)) {
			e1.innerHTML ="Name must contains Alphabets between 2-30!! <br>";
		}
		else {
			e1.innerHTML = "";
		}
		 if(!y.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
				e2.innerHTML ="Must be Valid Email!<br>";
			}
		else {
			e2.innerHTML ="";

		}
		if(z.value.match(/^$|\s+/)) {
				e3.innerHTML ="Message Can not be Empty!";
			}
		else {
			e3.innerHTML = "";
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
  }
  else {//open
  	y.style.width = '100vw';
  }
}
/* //function to get scroll-Bar Coordinates
  window.onscroll = function () { 
    var doc = document.body;
    height = doc.clientHeight;
    scrlTop = doc.scrollLeft ;
    let scrl = document.pageYOffset || document.documentElement.scrollTop;

 document.getElementById("y").value = height/100 + '  ' + scrl/100;
   }; 
   */

function moveScroll(clickedBtn) {
	toggleMenu();
	if(clickedBtn.name == 'home') {
	document.querySelector(".container").scrollIntoView(true);
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

