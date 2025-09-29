function getCleats(){

    //first, get the user inputs from the text boxes and save them to variables.
    var priceRange = document.getElementById("price").value;
    console.log (priceRange);
    
    var brand = document.getElementById ("brand").value;
    console.log (brand);
    


if (priceRange == "$150+" && brand=="nike"){
    console.log ("Nike Mecurials are the best option")
}
else if (priceRange== "-$150" && brand == "nike" ){
 console.log ("Nike Tiempos are the best option")
}
else if (priceRange== "-$150" && brand == "adidas" ){
 console.log ("Adidas Adizeros are the best option")
}
else if (priceRange== "$150+" && brand == "adidas" ){
 console.log ("Adidas Predators are the best option")
}





  



}