//Récupération des éléments du DOM
let namePerso = document.getElementById('namePerso');
let hp = document.getElementById('hp');
let mp = document.getElementById('mp');
let atk = document.getElementById('atk');
let atkBonus = document.getElementById('atkBonus');
let def = document.getElementById('def');
let defBonus = document.getElementById('defBonus');
let magicType = document.getElementById('magicType');
let magicDef = document.getElementById('magicDef');
let dodge = document.getElementById('dodge');
let speed = document.getElementById('speed');

//Bouton Fermer
let close = document.getElementById('close');

//Affichages des données du personnage
namePerso.innerHTML = localStorage.getItem('type');
hp.innerHTML = "Points de Vie (HP) : " + localStorage.getItem('hp');
mp.innerHTML = "Points de Magie (MP) : " + localStorage.getItem('mp');
atk.innerHTML = "Force d'attaque : " + localStorage.getItem('atk');
atkBonus.innerHTML = "Bonus d'attaque (arme) : " + localStorage.getItem('atkBonus');
def.innerHTML = "Force de défense : " + localStorage.getItem('def');
defBonus.innerHTML = "Bonus de défense (protection) : " + localStorage.getItem('defBonus');
magicType.innerHTML = "Nom du sort : " + localStorage.getItem('magicType');
magicForce.innerHTML = "Force du sort : " + localStorage.getItem('magicForce');
magicDef.innerHTML = "Défense magique : " + localStorage.getItem('magicDef');
dodge.innerHTML = "Esquive : " + localStorage.getItem('dodge');
speed.innerHTML = "Vitesse : " + localStorage.getItem('speed');

//Fermeture de la fenêtre
close.addEventListener('click', function(){
    window.close();
});
