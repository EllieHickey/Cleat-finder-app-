function getCleats(brand, priceRange){

    //first, get the user inputs from the text boxes and save them to variables.
    var priceRange = document.getElementById("priceRange").value;
    console.log (priceRange);
    
    var brand = document.getElementById ("brand").value;
    console.log (brand);
    
if (brand== "neither"){
    console.log ("sorry we cannot help you")
}

else if (priceRange == "$150+" && brand=="nike"){
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
