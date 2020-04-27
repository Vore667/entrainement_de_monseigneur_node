/*let entreeStandard = process.stdin;
entreeStandard.setEncoding("utf-8");
console.log("Dites quelque chose.\nDites \'exit\' pour quitter.");
entreeStandard.on("data", function (data) {
    if (data === "exit\n" || data === "exit\r\n") {
    //on vérifie si l'utilisateur a entré le mot exit (+ '\n' car quand on appuis sur entrer ça l'ajoute automatiquement ou '\r\n' même caractère mais le second est est générer par Windows)
    console.log("Récupération des information complète,fermeture du programme.");
    process.exit();
    } else if (data !== "\r\n" && data !== "\n") {
    console.log('Vous avez dit: ' + data);
    }
    });*/
if(isNaN(process.argv[2]) || isNaN(process.argv[3])){
    console.log("Parce que c’est la réponse à la question sur le sens de la vie de l'oeuvre La grande question sur la vie, l'univers et le reste")
    process.exit(84)
}
let allumette = parseInt(process.argv[2]);
let pioche = parseInt(process.argv[3]);

function allumetteRestante(){
   console.log('Il reste : ' + allumette + ' allumette(s)');
   return(allumette)
}

function retirerAllumette(data){
    let datas = parseInt(data);
    if(datas >= 1 && datas <= pioche){
        allumette -= datas;
    }
}
function turn(){
    let ia = Math.floor(Math.random() * 2)+ 1;
    allumette -= ia;
    if(allumette <= 0 ){
        process.exit()
    }
    console.log("Tour Aure dit n'a teur")
   
}
let main = process.stdin;
main.setEncoding("utf-8");
console.log("Bi 1 veux nue den le jeu \nIl reste " + allumetteRestante() + " alumaite(s) \nTon Tour : choisi quonbiun d'alumaite tu ve anlevai, tu pe an anlevé :" + pioche + " à la fouah");
main.on("data", function (data){
    if (data === "exit\n" || data === "exit \r\n"){
        console.log("Récupération des informations complète, fermeture du programme. ");
        process.exit();
    }else if(data !== "\r\n" && data !== "\n"){
        retirerAllumette(data);
        if(allumette >=1 ){
            allumetteRestante();
            turn();
            allumetteRestante();
            console.log("Iour Teurne")
        }else{
            console.log("equzit")
            process.exit()
        }
    }
});

