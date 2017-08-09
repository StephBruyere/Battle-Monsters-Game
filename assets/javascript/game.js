//onload 
 /*   $(document).ready(function() {
        $("#myModal").modal('show');
    });

    $('.start').on('click', function() {
        $('.modal').modal('hide');
    });
*/
$(document).ready(function() {

//globals

var avatar; 
var enemy;
var setChar = false;
var computerEnemy = false;

//=======================================================
/*
function monster(name, health, attack, counter, alive) {
    this.name = name;
    this.health = health;
    this.attack = attack += 10;
    this.counter = counter;
    this.alive = alive;


var voodooMonster = new monster("Voodoo", 125,50,10,true)
var easterMonster = new monster("Easter Island", 100,75,10,true)
var toxicMonster = new monster("Toxic Waster", 150,25,10,true)
var screamerMonster = new monster("Screamer", 1,50,10,true)
var invmanMonster = new monster("Invisible Man", 75,50,20,true)
var hairMonster = new monster("Bad Hair Day", 175,10,10,true)
var fishMonster = new monster("Fish Bob", 100,25,25,true)

}
*/

var monsterArray = [
    voodooMonster = {
        name: "Voodoo Doll",
        health: 125,
        attack: 10,
        counter: 15,
        alive: true,
    },

    easterMonster = {
        name: "Easter Island",
        health: 100,
        attack: 75,
        counter: 10,
        alive: true,
    },

    toxicMonster = {
        name: "Toxic Waster",
        health: 150,
        attack: 25,
        counter: 10,
        alive: true,
    },

    screamerMonster = {
        name: "The Screamer",
        health: 100,
        attack: 75,
        counter: 10,
        alive: true,
    },
    invManMonster = {
        name: "Invisable Man",
        health: 75,
        attack: 50,
        counter: 20,
        alive: true,
    },

    hairMonster = {
        name: "Bad Hair Day",
        health: 175,
        attack: 10,
        counter: 10,
        alive: true,
    },

    fishMonster = {
        name: "Fish Bob",
        health: 100,
        attack: 75,
        counter: 10,
        alive: true,
    }

];

/*var monsterArray = [voodooMonster, toxicMonster, easterMonster, screamerMonster, invmanMonster, hairMonster, fishMonster]; */



//Attack and Defense functions =======================================================


/*var attacker = avatar;
var defender = enemy;*/

/*function attackCommand (attacker, defender) {
  (this.attack - this.health == defender.health);
  console.log(enemy.health);
}
attackCommand ();
*/



//Sets to next monster / Win / Lose =======================================================
/*
function enemyMonster (enemy) {
for (var i = 0; i < monsterArray.length; i++) {
  if ([i] === 0) $("#winLose").append("You Win");}
  if ([i] >= monsterArray.length) {
  i++};
}

function playerMonster (avatar) {
 if ( monster.health == 0) $("#winLose").append ("You Lose");}
*/


// Setting User Selection and Enemy Selection =======================================================

// Voodoo  =======================================================
         
          $('#voodoo').on("click", function() {
            if (setChar == false) {
              avatar = setAvatar ();
            }

            else if (setChar == true && computerEnemy == false) {
              enemy =  setEnemy();
            }
          
          function setAvatar () {
            setChar =  true;
            return this.voodooMonster;
            console.log(int);
          }
            
            function setEnemy () { 
            computerEnemy = true;
            return this.voodooMonster;
          }
          console.log(setChar);
          console.log(computerEnemy);
          console.log(enemy);
          console.log (avatar);
        });         
   
                               
// Easter  =======================================================

          $('#easter').on("click", function() {
            if (setChar == false) {
              setChar = true;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = this.easterMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
                  console.log(enemy);
              }
          
          function setEasterAvatar (easterMonster) {
            if (setChar === true); {
            var avatar = this.easterMonster;
            console.log (avatar);
            }
          }
          setEasterAvatar ();
        });






       }); /* closing the on ready function */
           




// make if statement later for positioning. If voodoo and toxic (x,y)


/*

//onload set music to on/ create button to set music to off

$()
// onclick set object as avatar
//on click move object to position x and y, 
//change the height to 100%
// set user selection to active


//Seperate onclick function
//if userSelection = 0, than set to computer Enemy
//onclick user will set computerEnemy select object to heros 1-6 
	//if computerEnemy ==  UserSelection than computerEnemy +=1.
//set same inner html changes to computerEnemy as UserSelection
//create variable Active = UserSelection and computerEnemy 
// change inner html of alert element to opacity 100%, "Fight"



      takeDamage: function(attacks)
        {
          var x = attacks;
          var result = attacks;
          for(var i = 0; i < x; i++)
          {
            if(Math.random() > 0.6667)
            {
              alert(this.name + " blocked one of the hits!");
              result--;
            }

//set function for avatar

// loop user selection if health is >  0, attack - health



// function for attacks -Needs an onclick seperate from the above,
//	going to need to set the start function to a variable that can be turned off. 	

// on hit enemy - health = inner html : health

//function for counter attack
if health = health -= than //if health is current health -1 than run counter attack 
// on hit avatar - health = inner html : health

//function to set new computer target if computer enemy health = 0

// You win / you lose functions

// function to set if computer enemies available = 0 alert you win! 

//function to set restart (Play again?)

// if health > 0 , set alive to true
//	else if health =< 0 set alive to false
		
// if alive = false  YOU LOSE
//	else- do nothing

//function for alive?



// 



// 
*/

//Takes the character that was clicked and attacks it. 
 /* function attack(attacker, defender){
   
    //Changes the objects values and updates the DOM to show the player. 
        attacker.health = attacker.health - defender.attack; 
        attacker.attack = attacker.attack + attacker.baseAttack;
    //Updates the DOM to show the values of the players health, attack power etc. 
      $("#attackerZone").html("<div id = 'player'>"+attacker.image+"<br><h4>"+attacker.name+"<br>Attack Power: "+attacker.attack+"<br>Health: "+attacker.health+"</h4></div>");
      $('#defenderZone').html("<div id = 'opponent'>"+defender.image+"<br><h4>"+defender.name+"<br>Attack Power: "+defender.attack+"<br>Health: "+defender.health+"</h4></div>");
      if(defender.health <= 0){
        attack(attacker, defender);
      }
    }
  
      }
    }

*/