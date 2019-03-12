function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extralarge") {
		sizeTotal = 16;
	}
	runningTotal = (runningTotal + sizeTotal);

	getMeat(runningTotal,text1); 
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			selectedMeat.push(meatArray[i].value);
			text1 = text1+meatArray[i].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);

	getCheese(runningTotal,text1);
	};		
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;

}
runningTotal += cheeseTotal;

getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}

	
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Stuffed Crust") {
		crustTotal = 3;
	}
	else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	}
	 else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal += crustTotal;
	
	getSauce(runningTotal,text1);
};

	

	function getSauce(runningTotal,text1) {
		var sauceArray = document.getElementsByClassName("sauce");

		for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
		getVeg(runningTotal,text1);
	};

	
function getVeg(runningTotal,text1) {
		var vegTotal = 0;
		var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veggie");

	for (var i = 0; i < vegArray.length; i++) {
		if (vegArray[i].checked) {
			selectedVeg.push(vegArray[i].value);
			text1 = text1+vegArray[i].value+"<br>";
		}
	}

	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}

	runningTotal = (runningTotal + vegTotal);


	document.getElementById("showText").innerHTML=text1;
	document.getElementById("Cost").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";


}