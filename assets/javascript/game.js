var OWK = {
    name: "Obi Wan Kenobi",
    AttackStrength: 25,
    HP: 150
};

var Yoda ={
    name: "Yoda",
    AttackStrength:35,
    HP: 150
};

var DV = {
    name: "Darth Vader",
    AttackStrength:60,
    HP:500
};

var DM = {
    name: "Darth Maul",
    AttackStength:50,
    HP:350
};

var Grevious = {
    name: "Grevious",
    AttackStrength:40,
    HP: 250
};

var Characters = [OWK, Yoda, DV, DM, Grevious];


//user clicks on one of the images of the characters//
//the clicked image is moved to the "Your Character" div//
//if your character is a good guy only the bad guys should be shown in enemies available to attack//
//if your character is a bad guy then every other character should be available to attack//


$(document).ready(function(){
    $("#enemies").hide();
        var YourCharacter; 
        $(".character").on('click',function(){
            YourCharacter = $(this).attr("id").toString();
            console.log(YourCharacter);
        $(".character").hide();
    });
});

 



