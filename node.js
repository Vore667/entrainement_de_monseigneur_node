/*let age = 18;
if (age >= 18){
    console.log("Vous êtes majeurs");
}
else{
    console.log("Vous êtes mineur");
}

let​ couleur = ​bleu ​;
if​ (couleur === ​ "bleu"​ ) {
console​ .log(​ "La couleur est bleu"​ );
} ​ else​ ​ if​ (couleur === ​ "rouge"​ ) {
console​ .log(​ "La couleur est rouge"​ );
} ​ else​ ​ if​ (couleur === ​ "vert"​ ) {
console​ .log(​ "La couleur est vert"​ );
} ​ else​ ​ if​ (couleur === ​ "jaune"​ ) {
console​ .log(​ "La couleur est jaune"​ );
} ​ else​ {
console​ .log(​ `La couleur était: ​ ${couleur}​ ` ​ );
}*/




/*let tablalColor = ["bleu","rouge","jaune","vert","blue","roux"];
for (let index = 0; index < tablalColor.length;index++){
   switch (tablalColor[index]) {
       case "bleu":
            console.log(`La couleur à l'index ${index} est : bleu`);       
           break;
        case "rouge":
            console.log(`La couleur à l'index ${index} est : rouge`);
            break;
        case "jaune":
            console.log(`La couleur à l'index ${index} est : jaune`);
            break;
        case "vert":
            console.log(`La couleur à l'index ${index} est : vert`);
            break;
   
       default:
           console.log(`La couleur ${[tablalColor[index]]} n'était pas attendue`);
           break;
           
   }
}*/



//Fonction
/*function add(a,b){
    let resultat = (a + b);
    return(resultat);
}
console.log(add(1,1));*/

/*const​ couleur = array => {
    let​ res1 = ​ ""​ ;
    for​ (​ let​ i = ​ 0 ​ ; i < array.length; i++) {
        res1 += ​ `Il y a la couleur ​ ${array[i]}​ à l'index ​ ${i}​ !`​ ;
        if​ (i !== array.length - ​ 1 ​ ) {​ 
            res1 += ​ '\n'​ ;
        }
    }
    return​ (res1);
    }
console​ .log(couleur([​ "bleu"​ , ​ "rouge"​ , ​ "jaune"​ , ​ "vert"​ , "violet"​ , ​ "blanc"​ ]));
*/

const player = {
    nom: "Jean",
    prénom: "Jass",
    sexe: "Homme",
    tenue: "En Claquette Chaussette",
    listSac:["un stylo", "une choucroute"],

    description() {
        return (`Je suis un ${this.sexe}, je m'appelle ${this.nom} ${this.prénom}, aujourd'hui je suis habillé ${this.tenue}, je porte un sac à dos qui contient ${this.listSac}`)
    }
};
console.log(player.description());






