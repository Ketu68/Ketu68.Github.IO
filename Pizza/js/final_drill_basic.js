
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "\xa0\xa0\xa0\xa0\xa0 You Ordered ---> \xa0\xa0\xa0\xa0";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"\xa0\xa0\xa0";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1); 
};	

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"\xa0\xa0\xa0";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggie(runningTotal,text1); 
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
			text1 = text1+veggieArray[j].value+"\xa0\xa0\xa0";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	getCheese(runningTotal,text1);
};
	
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheeses");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"\xa0\xa0\xa0";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	runningTotal = (cheeseTotal+runningTotal);
	getCrust(runningTotal,text1); 
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crusts");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"\xa0\xa0\xa0";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	}
	runningTotal = (crustTotal+runningTotal);
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {

	var sauceArray = document.getElementsByClassName("sauces");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"\xa0\xa0\xa0";
		}
	}
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "\xa0\xa0\xa0\xa0\xa0\xa0<strong>$"+"\xa0"+runningTotal+".00"+"</strong></font></h5>";

};