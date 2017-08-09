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

var monsterArray = [voodooMonster, toxicMonster, easterMonster, screamerMonster, invmanMonster, hairMonster, fishMonster];

//Attack and Defense functions =======================================================


var attacker = monster.avatar;
var defender = monster.enemy;

function test () {
console.log(enemy);
}
test ();

/*function attackCommand (attacker, defender) {
  (this.attack - this.health == defender.health);
  console.log(enemy.health);
}
attackCommand ();
*/
} 


//Sets to next monster / Win / Lose =======================================================

function enemyMonster (enemy) {
for (var i = 0; i < monsterArray.length; i++) {
  if ([i] === 0) $("#winLose").append("You Win");}
  if ([i] >= monsterArray.length) {
  i++};
}

function playerMonster (avatar) {
 if ( monster.health == 0) $("#winLose").append ("You Lose");}


// Setting User Selection and Enemy Selection =======================================================

// Voodoo  =======================================================
         


          $('#voodoo').on("click", function(voodooMonster) {
            if (setChar == false) {
              setChar = true;
              console.log(setChar);}

            else if (setChar == false && computerEnemy == false) {
                  var enemy = voodooMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
          
          function setAvatar () {
            if (setChar === true); {
              var avatar = voodooMonster;
              monster (voodooMonster);
            }
          }
          setAvatar ();
  });  
// Easter  =======================================================

          $('#easter').on("click", function(easterMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = easterMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = easterMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });                            

// Toxic  =======================================================

          $('#toxic').on("click", function(toxicMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = toxicMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = toxicMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            }); 


// Screamer  =======================================================

          $('#screamer').on("click", function(screamerMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = screamerMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = screamerMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });           

// Invman  =======================================================

          $('#easter').on("click", function(easterMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = easterMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = easterMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            }); 

// Hair  =======================================================

          $('#hair').on("click", function(hairMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = hairMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = hairMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });           
// Fish  =======================================================

          $('#fish').on("click", function(fishMonster) {
            if (setChar == false) {
              setChar = true;
              var avatar = fishMonster;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = fishMonster;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            }); 


 });




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