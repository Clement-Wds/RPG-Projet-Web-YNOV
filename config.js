//Récupération du Pseudo du joueur
let pseudoButton = document.getElementById("submitPseudo");
let pseudoPlayer = "";

pseudoButton.addEventListener('click', function(){
    pseudoPlayer = document.getElementById("inputPseudo").value;
});

//Gestion de la sélection (style)
function clickColor(select, unsel1, unsel2, unsel3){
    select.style.color = "yellow";
    unsel1.style.color = "white";
    unsel2.style.color = "white";
    unsel3.style.color = "white";
};

//Récupérations des choix possibles du personnage
let persoName = "";
let perso1 = document.getElementById("magician");
let perso2 = document.getElementById("warrior");
let perso3 = document.getElementById("strategic");
let perso4 = document.getElementById("archer");

//SELECTION DU PERSONNAGE
perso1.addEventListener('click', function(){
    persoName = "Magicien";
    clickColor(perso1, perso2, perso3, perso4);
});

perso2.addEventListener('click', function(){
    persoName = "Guerrière";
    clickColor(perso2, perso1, perso3, perso4);
});

perso3.addEventListener('click', function(){
    persoName = "Stratégique";
    clickColor(perso3, perso1, perso2, perso4);
});

perso4.addEventListener('click', function(){
    persoName = "Archer";
    clickColor(perso4, perso1, perso2, perso3);
});

//Récupération des choix possibles de l'arène
let arenaName = "";
let arena1 = document.getElementById("arena1");
let arena2 = document.getElementById("arena2");
let arena3 = document.getElementById("arena3");
let arena4 = document.getElementById("arena4");

//SELECTION DE L'ARENE
arena1.addEventListener('click', function(){
    arenaName = "La Grand Horloge";
    document.body.style.background = "url(arena_clock.jpg)";
    clickColor(arena1, arena2, arena3, arena4);
});

arena2.addEventListener('click', function(){
    arenaName = "Le Chateau des Dragons";
    document.body.style.background = "url(arena_dragons_castle.jpg)";
    clickColor(arena2, arena1, arena3, arena4);
});

arena3.addEventListener('click', function(){
    arenaName = "La Vallée Magique";
    document.body.style.background = "url(arena_magic_valley.jpg)";
    clickColor(arena3, arena1, arena2, arena4);
});

arena4.addEventListener('click', function(){
    arenaName = "La Terre des Sages";
    document.body.style.background = "url(arena_wisdom_landscape.jpg)";
    clickColor(arena4, arena1, arena2, arena3);
});

//Lancement de la partie avec test de validité de configuration

let lauchButton = document.getElementById("launchGame");
let lauchOk = 0;

lauchButton.addEventListener('click', function(){
    if (pseudoPlayer == ""){
        alert("Entrez un pseudo pour jouer !");
    };
    if (persoName == ""){
        alert('Vous n\'avez pas sélectionné de personnage !');
    };
    if (arenaName == ""){
        alert('Vous n\'avez pas sélectionné d\'arène !');
    };
    if (pseudoPlayer != "" && persoName != 0 && arenaName != 0){
        lauchOk = 1;
    };
    if (lauchOk == 1){
        window.open("game.html");
        //Enregistrement des données de configuration dans le local storage
        localStorage.clear();
        localStorage.setItem('arena', arenaName);
        localStorage.setItem('pseudo', pseudoPlayer);
        localStorage.setItem('personnage', persoName);
    }
});