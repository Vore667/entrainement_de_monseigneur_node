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

let tablalColor = ["bleu","rouge","jaune","vert","blue"];
for (let index = 0; index >= tablalColor.length;index++){
   switch (tablalColor[index]) {
       case "bleu":
            console.log(`La couleur à l'index ${index} est : [0]`);       
           break;
        case "rouge":
            console.log(`La couleur à l'index ${index} est : [1]`);
            break;
        case "jaune":
            console.log(`La couleur à l'index ${index} est : [2]`);
            break;
        case "jaune":
            console.log(`La couleur à l'index ${index} est : [3]`);
            break;
   
       default:
           console.log(`La couleur [tablalColor] n'était pas attendue`);
            console.log("test")
           break;
           
   }
}
