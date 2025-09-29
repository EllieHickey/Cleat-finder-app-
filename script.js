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
    document.getElementById("image").src = showImage("nikeMecurials");
}
else if (priceRange== "-$150" && brand == "nike" ){
      document.getElementById("feedback").innerHTML = "Nike Tiempos are the best option";
 console.log ("Nike Tiempos are the best option")
 document.getElementById("image").src = showImage("nikeTiempos");
}
else if (priceRange== "-$150" && brand == "adidas" ){
        document.getElementById("feedback").innerHTML = "Adidas Adizeros are the best option"
 console.log ("Adidas Adizeros are the best option")
 document.getElementById("image").src = showImage("adidasAdizeros");
}
else if (priceRange== "$150+" && brand == "adidas" ){
     document.getElementById("feedback").innerHTML = "Adidas Predators are the best option"
 console.log ("Adidas Predators are the best option")
  document.getElementById("image").src = showImage("Adidas");

}
}



function showImage(result){
    if(result == "Adidas"){
         return "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/47c9a4273d5e4cbc918d165dc2414a8f_9366/Predator_Elite_Firm_Ground_Cleats_Orange_JI1083_HM1.jpg"
    }
    else if (result == "adidasAdizeros"){
        return "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiIfewFJyohKXEu7cgvmnGqC-UjGZS2BnWKwERwktRe_iFHARBEW754cp08mw9-1EFZzHmsFp4hkwn34IAAqeJiXWEvvKZr7Rty5SZY8cbzGZtlpWycoq2c08v"
    }
    else if (result == "nikeTiempos"){
        return "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvt4mjDs4n6tm7vnMJMS-l1jcjmeMZGh8vnTiewDmmnUBrmR5Tp2nhbIrufiC_Muh18N3DKDrC0fANhUkDndlxaHVJrXGPunFF4SNnfeN4OTVyTWDAK0i2QT8"
    }
    else if (result == "nikeMecurials"){
        return "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/112/210/362/original/HV8859_100.png.png?action=crop&width=900"
}
}
