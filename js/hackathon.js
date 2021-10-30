"use strict"
let profile = {
    "HE123456": {
        "matricule": "HE123456",
        "nom": "Duchamp",
        "prenom": "Steven",
        "email": "HE123456@students.ephec.be",
        "adresse": "25, rue Fontaine 1489",

        "horaire": {
            "lundiD": "08:30",
            "lundiA": "14:00",

            "mardiD": "12:00",
            "mardiA": "18:30",

            "mercrediD": "09:30",
            "mercrediA": "17:00",

            "jeudiD": "10:00",
            "jeudiA": "12:00",

            "vendrediD": "12:00",
            "vendrediA": "18:30"
        }
    },

    "HE6543210": {
        "matricule": "HE654321",
        "nom": "Durand",
        "prenom": "Bob",
        "email": "HE654321@students.ephec.be",
        "adresse": "12, rue du Lion 1356",

        "horaire": {
            "lundiD": "12:00",
            "lundiA": "13:45",

            "mardiD": "09:00",
            "mardiA": "15:30",

            "mercrediD": "10:30",
            "mercrediA": "15:45",

            "jeudiD": "13:45",
            "jeudiA": "18:00",

            "vendrediD": "08:30",
            "vendrediA": "12:45"
        }
    },

    "HE000000": {
        "matricule": "HE000000",
        "nom": "Dubois",
        "prenom": "Sabine",
        "email": "HE000000@students.ephec.be",
        "adresse": "45, rue Duberger 1389",

        "horaire": {
            "lundiD": "13:45",
            "lundiA": "18:00",

            "mardiD": "08:30",
            "mardiA": "12:45",

            "mercrediD": "08:30",
            "mercrediA": "14:45",

            "jeudiD": "09:30",
            "jeudiA": "12:45",

            "vendrediD": "10:30",
            "vendrediA": "18:00"
        }
    }
};
let id = 4;
let list_annonce={
    0: {
        matricule: "HE202075",
        date: "09/12/21",
        aller: "aller",
        adresse: "Grand'Place 1\n" +
            "1435 Mont-Saint-Guibert",
        numPassenger: "3",
    },
    1: {
        matricule: "HE202079",
        date: "16/12/21",
        aller: "retour",
        adresse: "Av. Minerve 6\n"+
            "1450 Chastre",
        numPassenger: "2",
    },
    2: {
        matricule: "HE202162",
        date: "03/11/21",
        aller: "retour",
        adresse: "Rue des Combattants 28\n"+
            "1450 Chastre",
        numPassenger: 4,
    },
    3: {
        matricule: "HE202162",
        date: "03/11/21",
        aller: "retour",
        adresse: "Rue des Combattants 28\n"+
            "1450 Chastre",
        numPassenger: 4,
    }
};


/***
 *Fonction pour gestion des propositions
 */

function data(form){
    list_annonce[id] = {
        matricule: form.matricule.value,
        date: form.date.value,
        aller: form.allerRetour.value,
        adresse: form.address.value,
        numPassenger: form.numPassenger.value
    };
    id++;
    update(list_annonce);
    document.getElementById("form").reset();
    return false;
}

function update(dico){
let section = document.getElementById("profiles");
let html = "";
for(let ids in Object.keys(dico)){        
  if(dico[ids].numPassenger>0){
        html += "<article><table class=\"profileTable\"><thead><tr><td colspan=\"2\"><p>Annonce #"+ids+"</p></td></tr></thead>"
        html += "<tr><th><p>Matricule :</p></th><td><p>"+dico[ids].matricule;
        html += "</p></td></tr><tr><th><p>Date :</p></th><td><p>"+dico[ids].date;
        html += "</p></td></tr><tr><th><p>Aller/Retour :</p></th><td><p>"+dico[ids].aller;
        html += "</p></td></tr><tr><th><p>Adresse :</p></th><td><p>"+dico[ids].adresse;
        html += "</p></td></tr><tr><th><p>Nombre de passager :</p></th><td><p>"+dico[ids].numPassenger;
        html += "</p></td></tr><tr><th colspan = \"2\"><button onclick='confirmation("+ids+")'> Choisir</button></th></tr></table></article>";
    }
}
section.innerHTML=html;
}
    
function confirmation(ids){
    if (list_annonce[ids].numPassenger <= 0){
        console.log("Désolé, il n'y a plus de places disponnible !");
        return 0;
    }
    let user = prompt("Qui êtes-vous ?");
    if (! (user in profile)){
        console.log("Matricule introuvable !");
        return -1
    }
    let client = profile[user];
    //Conducteur
    console.log("==Conducteur=============================================================================");
    console.log(`Le client ${client["nom"]} ${client["prenom"]}, habitant ${client["adresse"]} est intéressé par votre annonce ${ids}`);
    if (prompt("Accpetez vous ? (oui / non)") === "oui"){
        console.log("Vous avez accepté le client.");
        console.log("==Client=============================================================================");
        console.log(`Votre demande à l'annonce ${ids} a été accepté`);
        list_annonce[ids].numPassenger -= 1;
        update(list_annonce);
    } else {
        console.log("Vous avez refusé le client.");
        console.log("==Client=============================================================================");
        console.log(`Votre demande à l'annonce ${ids} a été refusé`);
    }
}

/***
 *Fonctions gestions affichage
 */

function switcher(page){
    if(page === "profiles"){
        document.getElementById("profiles").style.display="block";
        document.getElementById("formInput").style.display="none";
       document.getElementById("otherThing").style.display="none";
    }
    if(page === "formInput"){
        document.getElementById("formInput").style.display="flex";
        document.getElementById("profiles").style.display="none";
        document.getElementById("otherThing").style.display="none";
    }
    if(page === "otherThing"){
        document.getElementById("formInput").style.display="none";
        document.getElementById("profiles").style.display="none";
        document.getElementById("otherThing").style.display="flex";
    }
}

/***
 *Gestion des profils
 */

function formInscription(form) {
    /**Specification of the function:
     *
     * @param {form} form le formulaire html d'où viennent les infos d'utilisateur
     * @returns {"dictionnary"} newProfile le dictionnaire contenant toutes les informations
     */

    let newProfile = {
        "matricule": form.matricule.value,
        "nom": form.nom.value,
        "prenom": form.prenom.value,
        "email": form.matricule.value + "@students.ephec.be",
        "adresse": `${form.numero.value}, rue ${form.rue.value} ${form.codeP.value}`,

        "horaire": {
            "lundiD": form.lundiD.value,
            "lundiA": form.lundiA.value,

            "mardiD": form.mardiD.value,
            "mardiA": form.mardiA.value,

            "mercrediD": form.mercrediD.value,
            "mercrediA": form.mercrediA.value,

            "jeudiD": form.jeudiD.value,
            "jeudiA": form.jeudiA.value,

            "vendrediD": form.vendrediD.value,
            "vendrediA": form.vendrediA.value
        }
    }
    profile[newProfile.matricule] = newProfile;
    console.log(profile);
    return false;
}


