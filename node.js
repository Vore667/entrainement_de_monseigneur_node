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

let tablalColor = ["bleu","rouge","jaune","vert"];
for (let index){
   switch (tablalColor) {
       case "bleu":
            console.log(`La couleur à l'index ${index} est : bleu`);       
           break;
        case "rouge":
            console.log(`La couleur à l'index ${index} est : rouge`);
            break;
        case "jaune":
            console.log(`La couleur à l'index ${index} est : jaune`);
            break;
        case "jaune":
            console.log(`La couleur à l'index ${index} est : vert`);
            break;
   
       default:
           console.log(`La couleur [tablalColor] n'était pas attendue`);
           break;
   }
}
