//create array of possible player objects

var characters = [

    {name:"Mina",
    healthPoints: 120,
    attack: 8,
    counterAttack: 10,
    imageUrl: "assets/images/girl.jpeg"},

    {name:"Aden",
    healthPoints: 110,
    attack: 6,
    counterAttack: 8,
    imageUrl:"assets/images/music_panda.jpg"},

    {name:"Neda",
    healthPoints: 130,
    attack: 10,
    counterAttack: 12,
    imageUrl: "assets/images/bamboo_panda.jpg"},

    {name:"Steven",
    healthPoints: 140,
    attack: 12,
    counterAttack: 14,
    imageUrl: "assets/images/panda_rice.png"},

    {name:"Chalmey",
    healthPoints: 140,
    attack: 10,
    counterAttack: 14,
    imageUrl: "assets/images/baby_panda.jpg"}

];

/* <div class="character" id="mina">
<div class="character-name">""</div>
<img  class="character-image mina" src="assets/images/girl.jpeg">
<div class="character-health">120</div>
</div> */

//when document loads....

$(document).ready(function() {
    
    for (var i = 0; i< characters.length; i++){
        
        var player_wrapper = $("<div>");
        player_wrapper.addClass("character");
        player_wrapper.attr("id", characters[i].name);
        $(".container").append(player_wrapper);

            
            var name_div = $("<div>");
            name_div.addClass("character-name");
            name_div.text(characters[i].name);
            //console.log("Count: " + $("#" + characters[i].name).length);
            player_wrapper.append(name_div);
    
            var playerImg = $("<img>");
            playerImg.addClass("character-image", characters[i].name);
            playerImg.attr("src", characters[i].imageUrl);
            player_wrapper.append(playerImg);
    
            var playerHealth = $("<div>");
            playerHealth.addClass("character-health");
            playerHealth.text(characters[i].healthPoints);
            player_wrapper.append(playerHealth);
    
            
            
       
        
        
    }
    
   
    
//when any panda character is clicked:

    $(".character").on("click", function(){
            //set clicked character to your character
            var selected = $(this);
            //console.log(this);
            selected.addClass("selected");
            console.log(".selected");
        $(".selected").appendTo(".yourCharacter");
        
        $(".user-prompt").text("Select your Opponent:");
        
        
        //select character to be your enemy
        
        $(".character:not(.selected)").on("click", function(){
            var selectedEnemy = $(this);
            selectedEnemy.addClass("enemy");
            $(".enemy").appendTo(".yourEnemies");
        });
    });



});

// $(document).ready(function() {
//     $("button[data-move]").click(function() {
//         $('img.to-move').animate({left: '200px'}, 500);
//     });
// });

// <img src="http://placehold.it/200x200" class="to-move" />
// <button data-move>click me</button>

// .to-move {
//     position:absolute;
//     left:0;
//     top:30px;
// }