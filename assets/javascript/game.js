//onload
/*    $(document).ready(function() {
        $("#myModal").modal('show');
    });

    $('.start').on('click', function() {
        $('.modal').modal('hide');
    });

//globals
/*
 
*/
var monsterName = $("#voodoo, #toxic, #easter, #screamer, #invman, #hair, #fish");
var avatar; 
var setChar = false;
var userSelection;
var enemy;
var computerEnemy = false;

//=======================================================

var voodooMonster = new monster("Voodoo", 125,50,10,true)
var easterMonster = new monster("Voodoo", 100,75,10,true)
var toxicMonster = new monster("Voodoo", 150,25,10,true)
var screamerMonster = new monster("Voodoo", 1,50,10,true)
var invmanMonster = new monster("Voodoo", 75,50,20,true)
var hairMonster = new monster("Voodoo", 175,10,10,true)
var fishMonster = new monster("Voodoo", 100,25,25,true)


function monster(name, health, attack, counter, alive) {
    this.name = name;
    this.health = health;
    this.attack = attack += 10;
    this.counter = counter;
    this.alive = alive;
}


// Setting User Selection and Enemy Selection =======================================================


         if (setChar == false) {
          $('#voodoo').on("click", function() {
              var avatar = $("#voodoo");
              setChar = true;
              console.log(avatar);
              console.log(setChar);
          });
      } 

      else if (setChar == true) {
          $('#voodoo').on("click", function() {
              if (computerEnemy == false) {
                  chooseOpponent(voodoo);
                  console.log(setChar+"1");
              }
          });

          function chooseOpponent(voodoo) {
              if (computerEnemy == false) {
                  var enemy = voodoo;
                  computerEnemy = true;
                  console.log(enemy);
              }
          }
      } else {

      }

// Toxic  =======================================================

      if (setChar == false) {
          $('#toxic').on("click", function() {
              var avatar = $("#toxic");
              setChar = true;
              console.log(avatar);
               console.log(setChar+"2");
          });
       }
      else if (setChar == true) {
          $('#toxic').on("click", function() {
              if (computerEnemy == false) {
                  chooseOpponent(toxic);
                   console.log(setChar+"3");
              }
          });

          function chooseOpponent(toxic) {
              if (computerEnemy == false) {
                  var enemy = toxic;
                  computerEnemy = true;
                  console.log(enemy);
              }
          }
      } else {

      }

//function enemyMonster (enemy) {
//  var life = (var i = this.health; i >= 0 , counter)
//



// make if statement later for positioning. If voodoo and toxic (x,y)

function animations () {

      $("#voodoo").on("click", function() { 
        $("#voodoo").animate({ top: 10});
        $("#voodoo").animate({ height: "325px"},1200);
        $(".voodoo2").animate({ width: "55px"},1200);
        $("#voodoo").animate({ left: 0});
      });

      $("#toxic").on("click", function() { 
        $("#toxic").animate({ top: 10});
        $("#toxic").animate({ height: "325px"},1200);
        $(".toxic2").animate({ width: "55px"},1200);
        $("#toxic").animate({ left: 0});
      });

        $("#easter").on("click", function() { 
        $("#easter").animate({ top: 10});
        $("#easter").animate({ height: "325px"},1200);
        $(".easter2").animate({ width: "55px"},1200);
        $("#easter").animate({ left: 0});
      });

        $("#screamer").on("click", function() { 
        $("#screamer").animate({ top: 10});
        $("#screamer").animate({ height: "325px"},1200);
        $(".screamer2").animate({ width: "55px"},1200);
        $("#screamer").animate({ left: 0});
      });

        $("#screamer").on("click", function() { 
        $("#screamer").animate({ top: 10});
        $("#screamer").animate({ height: "325px"},1200);
        $(".screamer2").animate({ width: "55px"},1200);
        $("#screamer").animate({ left: 0});
      });

        $("#invman").on("click", function() { 
        $("#invman").animate({ top: 10});
        $("#invman").animate({ height: "325px"},1200);
        $(".invman2").animate({ width: "55px"},1200);
        $("#invman").animate({ left: 0});
      });

        $("#fish").on("click", function() { 
        $("#fish").animate({ top: 10});
        $("#fish").animate({ height: "325px"},1200);
        $(".fish2").animate({ width: "55px"},1200);
        $("#fish").animate({ right: 0});
      });

        $("#hair").on("click", function() { 
        $("#hair").animate({ top: 10});
        $("#hair").animate({ height: "325px"},1200);
        $(".hair2").animate({ width: 55px"},1200);
        $("#hair").animate({ right: 0});
      });

}

animations ();

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