
function calculateTotal()
{
    var sizeSelection = getSizeSelection();
    var veggieSelection = getVeggieSelection();
    var basePrice = getBasePrice();
    console.log(veggieSelection)
}

function getSizeSelection(){
    var sizes = document.getElementsByClassName("pizzasize");
    for (let i = 0; i<sizes.length; i++){
        if (sizes[i].checked==true){
            var baseSelection = sizes[i].value;
        }
    };
    return baseSelection;
}

function getCrustSelection(){
    var crust = document.getElementsByClassName("crust");
    for (let i = 0; i<sizes.length; i++){
        if (crust[i].checked==true){
            var baseSelection = crust[i].value;
        }
    };
    return baseSelection;
}

function getCheeseSelection(){
    var cheese = document.getElementsByClassName("cheese");
    for (let i = 0; i<sizes.length; i++){
        if (cheese[i].checked==true){
            var baseSelection = cheese[i].value;
        }
    };
    return baseSelection;
}

function getSauceSelection(){
    var sauce = document.getElementsByClassName("sauce");
    for (let i = 0; i<sizes.length; i++){
        if (sauce[i].checked==true){
            var baseSelection = sauce[i].value;
        }
    };
    return baseSelection;
}

function getVeggieSelection(){
    var veggies = document.getElementsByClassName("veggies");
    var veggieSelection = [];
    for (let i=0; i<veggies.length; i++) {
        if(veggies[i].checked == true){
            veggieSelection.push(veggies[i].value);
        }
    };
    return veggieSelection;
}

function getMeatsSelection(){
    var meats = document.getElementsByClassName("meats");
    var meatsSelection = [];
    for (let i=0; i<meats.length; i++) {
        if(meats[i].checked == true){
            meatsSelection.push(meats[i].value);
        }
    };
    return veggieSelection;
}
function getBasePrice(){
    var selection = getSizeSelection();
    if(selection == "Personal"){return 6};
    if(selection == "Medium"){return 10};
    if(selection == "Large"){return 14};
    if(selection == "Extralarge"){return 16};
    return null;}

function getBasePrice(){
    var selection = getCrustSelection();
    if(selection == "Plain Crust"){return 0};
    if(selection == "Garlic Butter Crust"){return 0};
    if(selection == "Spicy Crust"){return 0};
    if(selection == "House Special Crust"){return 0};
    if(selection == "Stuffed Crust"){return 3};
    return null;}

function getBasePrice(){
    var selection = getVeggieSelection();
    if(selection == "Mushrooms"){return 1};
    if(selection == "Jalapeno"){return 1};
    if(selection == "Tomatoes"){return 1};
    if(selection == "Onions"){return 1};
    if(selection == "Olives"){return 1};
    if(selection == "Green Peppers"){return 1};
    return null;}

function getBasePrice(){
    var selection = getMeatSelection();
    if(selection == "Pepperoni"){return 1};
    if(selection == "Sausage"){return 1};
    if(selection == "Canadian Bacon"){return 1};
    if(selection == "Ground Beef"){return 1};
    if(selection == "Anchovy"){return 1};
    if(selection == "Chicken"){return 1};
    return null;}

function getBasePrice(){
    var selection = getCheeseSelection();
    if(selection == "Regular Cheese"){return 0};
    if(selection == "Extra Cheese"){return 3};
    if(selection == "No Cheese"){return 0};
    return null;}

function getBasePrice(){
    var selection = getSauceSelection();
    if(selection == "Marinara Sauce"){return 0};
    if(selection == "White Sauce"){return 0};
    if(selection == "BBQ Sauce"){return 0};
    if(selection == "No Sauce"){return 0};
    return null;}

