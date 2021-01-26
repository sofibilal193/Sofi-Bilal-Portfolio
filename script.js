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
		element.placeholder = "";
		nameLabel.style.display = "block";
		emailLabel.style.display = "none";
		msglabel.style.display = "none";
	}
	else if(element.name == 'email') {
		element.placeholder = "";
		nameLabel.style.display = "none";
		emailLabel.style.display = "block";
		msglabel.style.display = "none";
	}
	else if(element.name == 'msg') {
		element.placeholder = "";
		nameLabel.style.display = "none";
		emailLabel.style.display = "none";
		msglabel.style.display = "block";
	}
	else if(element.name == 'sendBtn') {
		alert("Thank You!!");
	}
}
//focus out
function focusOutEffects(element) {
	var nameLabel = document.getElementById("nLabel");
	var emailLabel = document.getElementById("eLabel");
	var msglabel = document.getElementById("mLabel");

	if(element.name == 'name') {
		element.placeholder = "Name";
		nameLabel.style.display = "none";
	}
	else if(element.name == 'email') {
		element.placeholder = "Email";
		emailLabel.style.display = "none";
	}
	else if(element.name == 'msg') {
		element.placeholder = "Message";
		msglabel.style.display = "none";
	}
}
function ValidateData() {
	var x = document.getElementById('nId');
	var y = document.getElementById('eId');
	var z = document.getElementById('mId');
	var cond = false;

		if(!x.value.match(/^[a-zA-Z ]{2,30}$/)) {
			x.style.border  = "2px solid red";
		}
		else {
			x.style.border  = "1px solid grey";
		}
		 if(!y.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
				y.style.border  = "2px solid red";
			}
		else {
			y.style.border  = "1px solid grey";

		}
		if(z.value.match(/^$|\s+/)) {
				z.style.border  = "2px solid red";
			}
		else {
			z.style.border  = "1px solid grey";
		}
	}


function toggleMenu(x) {
  x.classList.toggle("change");  
  var y = document.getElementById("menuDiv");
  //close
  if(y.style.width == '100vw') {
  	y.style.width = '0vw';
  }
  else {//open
  	y.style.width = '100vw';
  }

}
