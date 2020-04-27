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

let allumette = 13;
let main = process.stdin;
main.setEncoding("utf-8");
console.log("Bienvenue dans le jeu");
main.on("data", function (data){
    if (data === "exit\n" || data === "exit \r\n"){
        console.log("Récupération des informations complète, fermeture du programme. ")
    }
});

