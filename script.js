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
function myFunction(element) {
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


function toggleMenu(x) {
  x.classList.toggle("change");
}


