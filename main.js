//Données du joueur
class Player {
    constructor(pseudo){
        this.pseudo = pseudo;
        this.golden = 1000;
        this.lifePoints = 100;
        this.magicPoints = 100;   
    }
    infosPlayer(){
        let playerName = document.getElementById("playerName");
        let persoHp = document.getElementById("persoHp");
        let persoMp = document.getElementById("persoMp");
        let persoGolden = document.getElementById("persoGolden");

        playerName.innerHTML = this.pseudo;
        persoHp.innerHTML = "HP : " + this.lifePoints;
        persoMp.innerHTML = "MP : " + this.magicPoints;
        persoGolden.innerHTML = "OR Restant : " + this.golden;
    }
}

//Données pour chaque personnages
class Personage {
    constructor(type){
        this.type = type;
        switch(type){
            case "Gobelin" :
                this.lifePoints = 100;
                this.atk = 10;
                this.def = 5;
                this.magicDef = 15;
                this.dodge = 15;
                this.speed = 20;
                break;

            case "Golem" :
                this.lifePoints = 100;
                this.atk = 25;
                this.def = 10;
                this.magicDef = 20;
                this.dodge = 15;
                this.speed = 15;
                break;

            case "Magicien" :
                this.atk = 15;
                this.def = 10;
                this.magicDef = 25;
                this.dodge = 25;
                this.speed = 15;
                this.weapon = "Baton magique";
                this.weaponForce = 1;
                this.protection = "Bouclier électromagnétique";
                this.protectionForce = 2;
                this.magic = "Foudre";
                this.magicForce = 5;
                break;

            case "Guerrière" :
                this.atk = 25;
                this.def = 10;
                this.magicDef = 15;
                this.dodge = 15;
                this.speed = 20;
                this.weapon = "Epée";
                this.weaponForce = 2;
                this.protection = "Bouclier";
                this.protectionForce = 1;
                this.magic = "Poison";
                this.magicForce = 5;
                break;
            
            case "Stratégique" :
                this.atk = 15;
                this.def = 10;
                this.magicDef = 15;
                this.dodge = 25;
                this.speed = 20;
                this.weapon = "Champ magnétique armé";
                this.weaponForce = 1;
                this.protection = "Champ magnétique";
                this.protectionForce = 2;
                this.magic = "Sortilège";
                this.magicForce = 5;
                break;
            
            case "Archer" :
                this.atk = 20;
                this.def = 10;
                this.magicDef = 15;
                this.dodge = 20;
                this.speed = 20;
                this.weapon = "Arc";
                this.weaponForce = 2;
                this.protection = "Bouclier";
                this.protectionForce = 1;
                this.magic = "Flammes";
                this.magicForce = 5;
                break;
        }
    }
    infosPerso(){
        let persoName = document.getElementById("persoName");
        let nameWeapon = document.getElementById("nameWeapon");
        let nameProtection = document.getElementById("nameProtection");
        let nameMagic = document.getElementById("nameMagic");

        persoName.innerHTML = this.type;
        nameWeapon.innerHTML = this.weapon;
        nameProtection.innerHTML = this.protection;
        nameMagic.innerHTML = this.magic;

    }
}

//Données de l'arène
class Arena {
    constructor(name){
        this.name = name;
        switch(name){
            case "La Grande Horloge":
                this.background = "url(arena_clock.jpg)";
                break;
            case "Le Chateau des Dragons":
                this.background = "url(arena_dragons_castle.jpg)";
                break;
            case "La Vallée Magique":
                this.background = "url(arena_magic_valley.jpg)";
                break;
            case "La Terre des Sages":
                this.background = "url(arena_wisdom_landscape.jpg)";
                break;
        }
    }

    initArena(){
        let arenaName = document.getElementById("arenaName");
        arenaName.innerHTML = this.name;
        document.body.style.background = this.background;
    }
}

//LANCEMENT DU JEU
game();

//Gestion de la partie (Fonction Game)
function game(){
    //Initialisation du jeu
    let arena = new Arena(localStorage.getItem('arena'));
    let player = new Player(localStorage.getItem('pseudo'));
    let personnage = new Personage(localStorage.getItem('personnage'));

    let levelWeapon = 1;
    let levelProtection = 1;
    let levelMagic = 1;

    arena.initArena();
    player.infosPlayer();

    //Initialisation des controles
    let attackButton = document.getElementById("actionsAtk");
    let defenseButton = document.getElementById("actionsDef");
    let spellButton = document.getElementById("actionsSpell");
    let escapeButton = document.getElementById("actionsEscape");

    let weaponBoost = document.getElementById("boostWeapon");
    let protectionBoost = document.getElementById("boostProtection");
    let magicBoost = document.getElementById("boostMagic");

    let restoreHp = document.getElementById("actionRestoreHp");
    let restoreMp = document.getElementById("actionRestoreMp");

    //Initialisation de l'historique
    let histo1 = document.getElementById("histo1");
    let histo2 = document.getElementById("histo2");
    let histo3 = document.getElementById("histo3");
    let histo4 = document.getElementById("histo4");
    let histo5 = document.getElementById("histo5");

    //Initialisation des autres composants
    let levelWeaponId = document.getElementById("levelWeapon");
    let levelProtectionId = document.getElementById("levelProtection");
    let levelMagicId = document.getElementById("levelMagic");
    let divInfosPlayer = document.getElementById("persoInfos");

    let adversary1 = new Personage("Gobelin");
    histo1.innerHTML = adversary1.type;
    player.infosPlayer();
    personnage.infosPerso();
    
    //PREMIERE ACTION DU COMBAT
    if(personnage.speed < adversary1.speed){
        player.lifePoints -= adversary1.atk;
        histo3.innerHTML = adversary1.type + " a attaqué ! Trop rapide ! Force : " + adversary1.atk + " Reste : " + adversary1.lifePoints;
        histo3.style.color = "red";
    };
    player.infosPlayer();

    //AFFICHAGE des INFOS du PERSONNAGE
    divInfosPlayer.addEventListener('click', function(){
        localStorage.setItem('type', personnage.type);
        localStorage.setItem('hp', player.lifePoints);
        localStorage.setItem('mp', player.magicPoints);
        localStorage.setItem('atk', personnage.atk);
        localStorage.setItem('atkBonus', personnage.weaponForce);
        localStorage.setItem('def', personnage.def);
        localStorage.setItem('defBonus', personnage.protectionForce);
        localStorage.setItem('magicType', personnage.magic);
        localStorage.setItem('magicForce', personnage.magicForce);
        localStorage.setItem('magicDef', personnage.magicDef);
        localStorage.setItem('dodge', personnage.dodge);
        localStorage.setItem('speed', personnage.speed);
        window.open('details.html','Infos Personnage', 'menubar=no, scrollbars=0, top=100, left=100, widht=300, height=300');
    });

    //BOUTON D'ATTAQUE
    attackButton.addEventListener('click', function(){
        if(player.lifePoints > 0 && adversary1.lifePoints > 0){
            attack(player, personnage, adversary1, histo2, histo3);
            victory(player, adversary1, histo5);
        };
    });

    //BOUTON DE DEFENSE
    defenseButton.addEventListener('click', function(){
        if(player.lifePoints > 0 && adversary1.lifePoints > 0){
            defense(player, personnage, adversary1, histo2, histo3);
            victory(player, adversary1, histo5);
        };
    });
    
    //BOUTON D'UTILISATION D'UN SORT
    spellButton.addEventListener('click', function(){
        if(player.lifePoints > 0 && adversary1.lifePoints > 0 && player.magicPoints > 0){
            magic(player, personnage, adversary1, histo3, histo4);
            victory(player, adversary1, histo5);
        };
    });

    //BOUTON DE FUITE
    escapeButton.addEventListener('click', function(){
        histo5.innerHTML = "DEFAITE : Vous avez fuit le combat !";
        histo5.style.color = "orange";
        player.lifePoints = 0;
        player.infosPlayer();
    });

    //BOUTON BOOST ARME
    weaponBoost.addEventListener('click', function(){
        if(player.golden >= 100){
            personnage.weaponForce += 5;
            levelWeapon += 1;
            boost(player, personnage.weaponForce, 100, levelWeapon, levelWeaponId, histo5);
        }
        else{
            histo5.innerHTML = "Vous n'avez pas assez d'or !";
            histo5.style.color = "orange";
        }
    });

    //BOUTON BOOST PROTECTION
    protectionBoost.addEventListener('click', function(){
        if(player.golden >= 100){
            personnage.protectionForce += 5;
            levelProtection += 1;
            boost(player, personnage.protectionForce, 100, levelProtection, levelProtectionId, histo5);
        }
        else{
            histo5.innerHTML = "Vous n'avez pas assez d'or !";
            histo5.style.color = "orange";
        }
    });

    //BOUTON BOOST MAGIE
    magicBoost.addEventListener('click', function(){
        if(player.golden >= 200){
            personnage.magicForce += 5;
            levelMagic += 1;
            boost(player, personnage.magicForce, 200, levelMagic, levelMagicId, histo5);
        }
        else{
            histo5.innerHTML = "Vous n'avez pas assez d'or !";
            histo5.style.color = "orange";
        }
    });

    //BOUTON RESTAURATION DES POINTS DE VIE
    restoreHp.addEventListener('click', function(){
        if(player.golden >= 500){
            player.lifePoints = 100;
            histo5.innerHTML = "Points de vie restaurés avec succès !";
            histo5.style.color = "yellow";
            player.golden -= 500;
            player.infosPlayer();
        }
        else{
            histo5.innerHTML = "Vous n'avez pas assez d'or !";
            histo5.style.color = "orange";
        }
    });

    //BOUTON RESTAURATION DES POINTS DE MAGIE
    restoreMp.addEventListener('click', function(){
        if(player.golden >= 500){
            player.magicPoints = 100;
            histo5.innerHTML = "Points de magie restaurés avec succès ! ";
            histo5.style.color = "yellow";
            player.golden -= 500;
            player.infosPlayer();
        }
        else{
            histo5.innerHTML = "Vous n'avez pas assez d'or !";
            histo5.style.color = "orange";
        }
    })

};

//FONCTION affichage infos BOOST des outils (arme, protection, magie)
function boost(player, entityForce, cost, levelEntity, levelEntityId, histo5){
    levelEntityId.innerHTML = "Niveau " + levelEntity;
    histo5.innerHTML = "Boost - Nouvelle Force : " + entityForce;
    histo5.style.color = "yellow";
    player.golden -= cost;
    player.infosPlayer();
};

//FONCTION de VICTOIRE : affichage du gagnant
function victory(player, adversary, histo5){
    if(adversary.lifePoints <= 0 && player.lifePoints >= 0){
        histo5.innerHTML = "VICTOIRE : Vous avez vaincu : " + adversary.type;
        histo5.style.color = "yellow";
        player.golden += 500;
        player.infosPlayer();
    }

    if(player.lifePoints <= 0){
        histo5.innerHTML = "DEFAITE : " + adversary.type + " a été trop fort pour vous !";
        histo5.style.color = "orange";
    }
};

//FONCTION d'ATTAQUE
function attack(player, personnage, adversary, histo2, histo3){
    adversary.lifePoints -= (personnage.atk + personnage.weaponForce);
    histo2.innerHTML = "Vous avez attaqué ! Force : " + personnage.atk;
    histo2.style.color = "lime";
    //Riposte Adverse
    player.lifePoints -= adversary.atk;
    histo3.innerHTML = adversary.type + " a attaqué ! Force : " + adversary.atk + " Reste : " + adversary.lifePoints;
    histo3.style.color = "red";
    player.infosPlayer();
};

//FONCTION de DEFENSE
function defense(player, personnage, adversary, histo2, histo3){
    player.lifePoints += personnage.def;
    histo2.innerHTML = "Vous avez défendu ! Gain : " + personnage.def;
    histo2.style.color = "lime";
    player.infosPlayer();
    //Attaque Adverse
    player.lifePoints -= adversary.atk;
    histo3.innerHTML = adversary.type + " a attaqué ! Force : " + adversary.atk + " Reste : " + adversary.lifePoints;
    histo3.style.color = "red";
    player.infosPlayer();
};

//FONCTION d'utilisation d'un SORT (Magie)
function magic(player, personnage, adversary, histo3, histo4){
    adversary.lifePoints -= personnage.magicForce;
    histo4.innerHTML = "Utilisation de la Magie ! Degat : " + personnage.magicForce;
    histo3.innerHTML = "Sort fatal pour " + adversary.type + " Reste : " + adversary.lifePoints;
    histo4.style.color = "cyan";
    player.magicPoints -= 25;
    player.infosPlayer();
};