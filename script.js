function getCleats(brand, priceRange){

    //first, get the user inputs from the text boxes and save them to variables.
    var priceRange = document.getElementById("priceRange").value;
    console.log (priceRange);
    
    var brand = document.getElementById ("brand").value;
    console.log (brand);
    
if (brand== "neither"){
    document.getElementById("feedback").innerHTML = "sorry we cannot help you"
    console.log ("sorry we cannot help you")
}

else if (priceRange == "$150+" && brand=="nike"){
     document.getElementById("feedback").innerHTML = "Nike Mecurials are the best option"
    console.log ("Nike Mecurials are the best option")
}
else if (priceRange== "-$150" && brand == "nike" ){
      document.getElementById("feedback").innerHTML = "Nike Tiempos are the best option";
 console.log ("Nike Tiempos are the best option")
}
else if (priceRange== "-$150" && brand == "adidas" ){
        document.getElementById("feedback").innerHTML = "Adidas Adizeros are the best option"
 console.log ("Adidas Adizeros are the best option")
}
else if (priceRange== "$150+" && brand == "adidas" ){
     document.getElementById("feedback").innerHTML = "Adidas Predators are the best option"
 console.log ("Adidas Predators are the best option")
  document.getElementById("image").src = showImage("Adidas");

}
}



function showImage(result){
    if(result == "Adidas"){
         return "https://i5.walmartimages.com/asr/56eef6ce-bf3c-433c-a5fe-b7507b640f31.a7e73dd40b5bc2ef76a987cca713f24e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"

    }
}

