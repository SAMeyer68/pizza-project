// //The values represent the cost of the pizza
//  var cake_prices = new Array();
//  cake_prices["Personal"]=6;
//  cake_prices["Medium"]=10;
//  cake_prices["Large"]=14;
//  cake_prices["Extralarge"]=16;
 

//  var filling_prices= new Array();
//  veggie_prices["Mushrooms"]=1;
//  veggie_prices["Jalapeno"]=1;
//  veggie_prices["Tomatoes"]=1;
//  veggie_prices["Onions"]=1;
//  veggie_prices["Olives"]=1;
//  veggie_prices["Green Peppers"]=1;

	 
// function getPizzaSizePrice()
// {  
//     var pizzaSizePrice=0;
//     var theForm = document.forms["pizzaform"];
//     var selectedPizza = theForm.elements["pizzasize"];
    
//     for(var i = 0; i < selectedPizza.length; i++)
//     {
//         if(selectedPizza[i].checked)
//         {

//             pizzaSizePrice = pizza_prices[selectedPizza[i].value];

//             break;
//         }
//     }
   
//     return pizzaSizePrice;
// }





function calculateTotal()
{
    var sizeSelection = getSizeSelection();
    var veggieSelection = getVeggieSelection();
    var basePrice = getBasePrice();
    console.log(basePrice)
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

function getBasePrice(){
    var selection = getSizeSelection();
    if(selection == "Personal"){return 6};
    if(selection == "Medium"){return 10};
    if(selection == "Large"){return 14};
    if(selection == "Extralarge"){return 16};
    return null;

}