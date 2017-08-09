//onload
    $(document).ready(function() {
        $("#myModal").modal('show');
    });

    $('.start').on('click', function() {
        $('.modal').modal('hide');
    });

//globals

var monsterArray = [voodoo, toxic, easter, screamer, invman, hair, fish];
var avatar; 
var enemy;
var setChar = false;
var computerEnemy = false;

//=======================================================

var voodooMonster = new monster("Voodoo", 125,50,10,true)
var easterMonster = new monster("Easter Island", 100,75,10,true)
var toxicMonster = new monster("Toxic Waster", 150,25,10,true)
var screamerMonster = new monster("Screamer", 1,50,10,true)
var invmanMonster = new monster("Invisible Man", 75,50,20,true)
var hairMonster = new monster("Bad Hair Day", 175,10,10,true)
var fishMonster = new monster("Fish Bob", 100,25,25,true)


function monster(name, health, attack, counter, alive) {
    this.name = name;
    this.health = health;
    this.attack = attack += 10;
    this.counter = counter;
    this.alive = alive;
}

//Sets to next monster or YOU WIN =======================================================

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
         
          $('#voodoo').on("click", function(voodoo) {
            if (setChar == false) {
             var avatar = voodoo;
              setChar = true;
              console.log(setChar);}

            else if (setChar == false && computerEnemy == false) {
                  var enemy = voodoo;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });  


// Easter  =======================================================

          $('#easter').on("click", function(easter) {
            if (setChar == false) {
              setChar = true;
              var avatar = easter;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = easter;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });                            

// Toxic  =======================================================

          $('#toxic').on("click", function(toxic) {
            if (setChar == false) {
              setChar = true;
              var avatar = toxic;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = toxic;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            }); 


// Screamer  =======================================================

          $('#screamer').on("click", function(easter) {
            if (setChar == false) {
              setChar = true;
              var avatar = screamer;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = screamer;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });           

// Invman  =======================================================

          $('#easter').on("click", function(easter) {
            if (setChar == false) {
              setChar = true;
              var avatar = easter;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = easter;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            }); 

// Hair  =======================================================

          $('#hair').on("click", function(hair) {
            if (setChar == false) {
              setChar = true;
              var avatar = hair;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = hair;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
            });           
// Fish  =======================================================

          $('#fish').on("click", function(fish) {
            if (setChar == false) {
              setChar = true;
              var avatar = fish;
              console.log(setChar);}

            else if (setChar == true && computerEnemy == false) {
                  var enemy = fish;
                  computerEnemy = true;
                  console.log(computerEnemy);
              }
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