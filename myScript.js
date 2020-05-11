// var USERNAME;
// var PASSWORD;

function goToPlan() {
	localStorage.setItem("PLAN", "NONE");
	document.location.href='plans.html'
}
function tableFunction(plan){
	let id = plan;
	var x = document.getElementById("plantable");
	if(id == 'basic'){
		unSelected(x,'group2','group3')
		setSelect(x,'group1');
		localStorage.setItem("PLAN", 'basic');
	}
	else if(id == 'standard'){
		unSelected(x,'group1','group3')
		setSelect(x,'group2');
		localStorage.setItem("PLAN", 'standard');
	}
	else if(id == 'premium'){
		unSelected(x,'group2','group1')
		setSelect(x,'group3');
		localStorage.setItem("PLAN", 'premium');
	}
}

function checkIfSelectPlan(){
	if(localStorage.getItem("PLAN") == "NONE")
		window.alert("Please select a plan first!");
	else
		document.location.href="signUp.html"
}

function setSelect(x,group){
	var y = x.getElementsByClassName(group);
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].style.backgroundColor = "#f2f2f2";
		y[i].style.color ="rgb(78, 72, 72)";
	}
}

function unSelected(x,group1,group2){
	var y1 = x.getElementsByClassName(group1);
	var y2 = x.getElementsByClassName(group2);
	var i;
	for (i = 0; i < y1.length; i++) {
		y1[i].style.backgroundColor = "white";
		y1[i].style.color ="black";

		y2[i].style.backgroundColor = "white";
		y2[i].style.color ="black";
	}
}

function displayDate(){
	var n =  new Date();
	var y = n.getFullYear();
	var m = n.getMonth() + 2;
	var d = n.getDate();
	document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}

function checkPassword(){
	var userName = document.getElementById('userName').value;
	var pass1 = document.getElementById('pass1').value;
	var pass2 = document.getElementById('pass2').value;
	var number = 0;
	var letter = 0;

	var copyPass1 = pass1.toLowerCase();
	for(let i = 0; i < copyPass1.length; i ++){
		if(copyPass1.charAt(i) >= '0' && copyPass1.charAt(i) <= '9')
			number ++;
		else if(copyPass1.charAt(i) >= 'a' && copyPass1.charAt(i) <= 'z')
			letter ++;
	}
	if(userName.length < 6)
		window.alert("Please insert at least length 6 of the UserName")
	else if(pass1.length < 8 || pass2.length < 8 || number < 6 || letter < 2)
		window.alert("Password requires at least 2 letters and 6 numbers")
	else if(pass1 != pass2)
		window.alert("Password confirm failed!!")
	else {
		localStorage.setItem("USERNAME", userName);
		localStorage.setItem("PASSWORD", pass1);
		window.location.href='cardForm/creditCardForm.html';
	}
}

function signIn(){
	var userName = document.getElementById('userNameFromSignIn').value;
	var password = document.getElementById('passFromSignIn').value;

	if(userName != localStorage.getItem("USERNAME"))
		window.alert("User Not Found!")
	else if(password != localStorage.getItem("PASSWORD"))
		window.alert("Wrong Password!")
	else
		document.location.href="notes.html"
}