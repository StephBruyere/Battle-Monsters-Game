//onload 
$(document).ready(function() {
    $("#myModal").modal('show');
});

$('.start').on('click', function() {
    $('.modal').modal('hide');
});

$(document).ready(function() {

    //globals

    var avatar;
    var enemy;
    var setChar = false;
    var computerEnemy = false;


    var avName
    var avHealth
    var avAttack
    var avCounter
    var avAlive
    var avHP

    var coName
    var coHealth
    var coAttack
    var coCounter
    var coAlive
    var coHP


    // Voodoo  =======================================================


    var VoodooMonster = {
        ID: '.voodoo2',
        name: "Vodoo Doll",
        health: 500,
        attack: 25,
        counter: 10,
        alive: true,
        HP: '.hpVoodoo',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                $('.winLose').removeClass("potterCloak");
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.easter2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Easter  =======================================================
    var EasterMonster = {
        ID: '.easter2',
        name: "Easter Island",
        health: 400,
        attack: 30,
        counter: 15,
        alive: true,
        HP: '.hpEaster',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Toxic  =======================================================

    var ToxicMonster = {
        ID: '.toxic2',
        name: "Toxic Waster",
        health: 450,
        attack: 30,
        counter: 10,
        alive: true,
        HP: '.hpToxic',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.easter2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Screamer =======================================================
    var ScreamerMonster = {
        ID: '.screamer2',
        name: "The Screamer",
        health: 250,
        attack: 50,
        counter: 10,
        alive: true,
        HP: '.hpScreamer',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.easter2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Invman  =======================================================    
    var InvManMonster = {
        ID: '.invman2',
        name: "Invisable Man",
        health: 350,
        attack: 20,
        counter: 10,
        alive: true,
        HP: '.hpInvman',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.easter2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Hair =======================================================

    var HairMonster = {
        ID: '.hair2',
        name: "Bad Hair Day",
        health: 310,
        attack: 25,
        counter: 10,
        alive: true,
        HP: '.hpHair',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.easter2').addClass("potterCloak")
            $('.fish2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }

    // Fish =======================================================
    var FishMonster = {
        ID: '.fish2',
        name: "Fish Bob",
        health: 405,
        attack: 50,
        counter: 10,
        alive: true,
        HP: '.hpFish',

        Attack: function() {
            avAttack += Math.floor(Math.random() * 50) +25;
            coHealth -= avAttack;
            avHealth -= coAttack;
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            console.log(coHealth);
            //avHealth -= coCounter;
            if (coHealth <= 0) {
                $('.winLose').removeClass("potterCloak");
                console.log("You Win!")
                $(coID).hide();
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            } else if (avHealth <= 0) {
                $('.LoseWin').removeClass("potterCloak");
                console.log("You Lose!")
                computerEnemy = false;
                console.log("choose new enemy")
                $('.voodoo2').removeClass("potterCloak");
                $('.toxic2').removeClass("potterCloak")
                $('.screamer2').removeClass("potterCloak")
                $('.invman2').removeClass("potterCloak")
                $('.easter2').removeClass("potterCloak")
                $('.fish2').removeClass("potterCloak")
                $('.hair2').removeClass("potterCloak")
            }
        },

        setAvatar: function() {
            avName = this.name;
            avHealth = this.health;
            avAttack = this.attack;
            avCounter = this.counter;
            avAlive = this.alive;
            avID = this.ID;
            avHP = this.HP;
            $(avID).toggle();
            setChar = true;
            console.log(avName);
            $(avHP).html("health " + avHealth + "<br> Attack: " + avAttack);
        },

        setComputer: function() {
            coName = this.name;
            coHealth = this.health;
            coAttack = this.attack;
            coCounter = this.counter;
            coAlive = this.alive;
            coID = this.ID;
            coHP = this.HP;
            $('.voodoo2').addClass("potterCloak");
            $('.toxic2').addClass("potterCloak")
            $('.screamer2').addClass("potterCloak")
            $('.invman2').addClass("potterCloak")
            $('.hair2').addClass("potterCloak")
            $('.easter2').addClass("potterCloak")
            //   $(coID).toggle();
            $(avID).removeClass("potterCloak");
            $(avID).show();
            $(coHP).html("health " + coHealth + " <br> Attack: " + coAttack);
            computerEnemy = true;
            console.log(coName);
            $('.winLose').addClass("potterCloak");
        }
    }


    //======================================================= ON CLICK FUNCTIONS ====================================================================


    // Voodoo  =======================================================

    $('#voodoo').on("click", function() {
        if (setChar == false) {
            avatar = VoodooMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = VoodooMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            VoodooMonster.Attack();
            console.log("Attack!");
        }
    });


    // Easter  =======================================================

    $('#easter').on("click", function() {
        if (setChar == false) {
            avatar = EasterMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = EasterMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            EasterMonster.Attack();
            console.log("Attack!")
        }
    });

    // Toxic  =======================================================

    $('#toxic').on("click", function() {
        if (setChar == false) {
            avatar = ToxicMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = ToxicMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            ToxicMonster.Attack();
            console.log("Attack!")
        }
    });
    // Screamer  =======================================================

    $('#screamer').on("click", function() {
        if (setChar == false) {
            avatar = ScreamerMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = ScreamerMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            ScreamerMonster.Attack();
            console.log("Attack!")
        }
    });

    // Easter  =======================================================

    $('#invman').on("click", function() {
        if (setChar == false) {
            avatar = InvManMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = InvManMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            InvManMonster.Attack();
            console.log("Attack!")
        }
    });
    // Easter  =======================================================

    $('#hair').on("click", function() {
        if (setChar == false) {
            avatar = HairMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = HairMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            HairMonster.Attack();
            console.log("Attack!")
        }
    });

    // Fish   =======================================================

    $('#fish').on("click", function() {
        if (setChar == false) {
            avatar = FishMonster.setAvatar();
            console.log("Avatar Set!")
        } else if (setChar == true && computerEnemy == false) {
            enemy = FishMonster.setComputer();
            console.log("Enemy Ready!")
        } else {
            FishMonster.Attack();
            console.log("Attack!")
        }
    });


}); /* closing the on ready function */
           


