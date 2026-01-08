
/***
 * Révision du code JavaScript
 * Date : 08/01/2026
 * Auteur : Ndovoo
 */

// La déclaration de variable 
let nomVillage;


// Je déclare une variable pour enregistrer le nom du village
nomVillage = "Kaweni";
 

// Je déclare une variable pour enregistrer le nom de chanteur préféré
let chanteurPrefere = "Dadju";


// J'affiche dans la console le nom de mon chanteur
console.log(chanteurPrefere);


// Je crée une variable pour enregistrer l'âge de mon chanteur
let ageChanteur = 34;


// Je crée un tableau qui liste les 5 albums de mon chanteur
let albumsDadju = [
  "Gentleman 2.0",
  "Poison ou Antidote",
  "Cullinan",
  "Poison Antidote (Édition Miel Book)",
  "Iconique"
];

// J'affiche dans la console les albums N°1, N°4 et N°5
console.log(albumsDadju[0]);
console.log(albumsDadju[3]);
console.log(albumsDadju[4]);

/**
 * Je crée un disque CD sous forme d'objet 
 * Le disque contient 1 morceau
 * Les informatopns du morceau sont 
 * titre
 * nom du chanteur 
 * date de sortie
 * durée 
 * style de musique
 * compositeur
 * auteur 
 * prix
 * lien vers Youtube 
 */

// Création du disque CD sous forme d'objet
const cd = {
  morceau: {
    titre: "Reine",
    chanteur: "Dadju",
    dateSortie: "2018-02-23",
    duree: "3:42",
    style: "R&B / Pop urbaine",
    compositeur: "Dadju Djuna Nsungula",
    auteur: "Dadju Djuna Nsungula",
    prix: 1.29,
    lienYoutube: "https://www.youtube.com/watch?v=OeLQOfb6IBU"
  }
};


// J'affiche dans la console tout l'objet
console.log(cd);

// J'affiche dans la console le lien vers Youtube de l'objet
console.log(cd.morceau.lienYoutube);

// J'affiche dans la console le titre du morceau en MAJUSCULE
console.log(cd.morceau.titre.toUpperCase());


// Je déclare une liste des notes : 34, 26, 33, 17, 68
let notes = [ 34, 26, 86, 33, 17, 68];

// Je déclare le plus  grand nombre  et je l'affiche dans la console 
let maxNote = Math.max(...notes);

 console.log("Le plus grand note : ", maxNote)

// J'affiche dans la console le plus petit nombre 
let minNote = Math.min(...notes)

console.log("Le plus petit nombre : ", minNote)

let tableauFruits = ["Manga", "Papaye", "Fenesi", "Toundra", "sindza"];
let tableauLegumes = ["Demba", "Tamati", "Dodoki", "Bengani", "Mafana"];

console.log("Fusion des fruits et légumes : ", ...tableauFruits, ...tableauLegumes);



let mapVetements = new Map([
    ["t-shirt", 100],
    ["chemise", 200],
    ["robes", 300],
    ["salouva", 250]
]);