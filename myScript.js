function tableFunction(plan){
	let id = plan;
	var x = document.getElementById("plantable");
	if(id == 'basic'){
		unSelected(x,'group2','group3')
		setSelect(x,'group1');
	}
	else if(id == 'standard'){
		unSelected(x,'group1','group3')
		setSelect(x,'group2');
	}
	else if(id == 'premium'){
		unSelected(x,'group2','group1')
		setSelect(x,'group3');
	}
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
