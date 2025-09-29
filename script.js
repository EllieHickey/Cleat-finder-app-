
function getTicket(){

  //first, get the user inputs from the text boxes and save them to variables. I've done the first one for you.
var day = document.getElementById("day").value;
 console.log (day);
 
var discountCode = document.getElementById ("discount").value
console.log (discountCode);
 
var age = document.getElementById ("age").value
console.log (age);

var price = 0;
  //then, use those variables and some contitionals to determine what the price of the ticket should be


  //overrides all of the other else statements 
if (discountCode == "FREEFRIDAY" && day == "Friday"){

  price=0;

}


//there are multiple variables in this whole function so you cant have else here it needs to be else if
//setting the else if statement to weekend and the price is set so age isnt a problem here
else if (day == "Saturday" || day == "Sunday"){
  price= 10;

}
//if not weekend and you are under 18 you get a discount  (Price=5) else price =10
//its like pemdas 
else if (day!= "Saturday" && day != "Sunday" ){
  if (age <18) {
    price=5;
  }else{
  
    price = 10;
  } 
}

//just console . log for the final price
console.log (price);


  

  //Lastly, set the results to display on the screen. Here is an example, although this will just set the results to be an empty string (you'll need to edit what it equals).
  document.getElementById("output").innerHTML = "Age: "+age +"<br>Day: " + day +"<br>Price: $" + price;


}