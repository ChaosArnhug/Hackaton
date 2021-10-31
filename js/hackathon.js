"use strict"
let profile = {
    HE000000: {
        matricule: "HE000000",
        nom: "Meunier",
        prenom: "Arnaud",
        adresse: "Avenue Bel Air n°15,\n 1410 Waterloo",
        ville: "Waterloo",
        email: "HE000000@students.ephec.be",
        horaire: {
            lundiAE: "08:30",
            lundiDE: "15:35",
            mardiAE: "08:30",
            mardiDE: "15:35",
            mercrediAE: "08:30",
            mercrediDE: "15:35",
            jeudiAE: "08:30",
            jeudiDE: "15:35",
            vendrediAE: "08:30",
            vendrediDE: "15:35"
        }
    },
    HE123456: {
        matricule: "HE123456",
        nom: "Pierre",
        prenom: "Jean",
        adresse: "Rue de la couronne n°20,\n 1300 Wavre",
        ville: "Wavre",
        email: "HE123456@students.ephec.be",
        horaire: {
            lundiAE: "09:00",
            lundiDE: "12:00",
            mardiAE: "10:00",
            mardiDE: "15:00",
            mercrediAE: "09:00",
            mercrediDE: "15:00",
            jeudiAE: "09:00",
            jeudiDE: "15:00",
            vendrediAE: "10:00",
            vendrediDE: "13:00"
        }
    },
    HE654321: {
        matricule: "HE654321",
        nom: "Liégeois",
        prenom: "Romain",
        adresse: "Clos des épinoches n°5,\n 1420 Braine l'Alleud",
        ville: "Braine l'Alleud",
        email: "HE654321@students.ephec.be",
        horaire: {
            lundiAE: "07:00",
            lundiDE: "12:00",
            mardiAE: "07:00",
            mardiDE: "15:00",
            mercrediAE: "08:00",
            mercrediDE: "16:45",
            jeudiAE: "08:00",
            jeudiDE: "15:35",
            vendrediAE: "07:00",
            vendrediDE: "16:45"
        }
    }
};
let id = 3;
let list_annonce={
    0: {
        date: "2021-10-11",
        direction: "destination à l'Ephec",
        matricule: "HE000000",
        numPassenger: "3"
    },
    1: {
        date: "2021-10-12",
        direction: "destination à l'Ephec",
        matricule: "HE000000",
        numPassenger: "3"
    },
    2: {
        date: "2021-02-10",
        direction: "destination à l'Ephec",
        matricule: "HE123456",
        numPassenger: "2"
    }
};


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
        matricule: form.matricule.value,
        nom: form.nom.value,
        prenom: form.prenom.value,
        email: form.matricule.value + "@students.ephec.be",
        adresse: `${form.rue.value} n°${form.numero.value},\n ${form.codeP.value} ${form.ville.value}`,
        ville: form.ville.value,

        horaire: {
            lundiAE: form.lundiD.value,
            lundiDE: form.lundiA.value,

            mardiAE: form.mardiD.value,
            mardiDE: form.mardiA.value,

            mercrediAE: form.mercrediD.value,
            mercrediDE: form.mercrediA.value,

            jeudiAE: form.jeudiD.value,
            jeudiDE: form.jeudiA.value,

            vendrediAE: form.vendrediD.value,
            vendrediDE: form.vendrediA.value
        }
    }
    profile[newProfile.matricule] = newProfile;
    document.getElementById("inscription").reset();
    return false;
}


/***
 *Fonction pour gestion des propositions /posts
 */

//insère data dans stockage list_annonce
function data(form){
    list_annonce[id] = {
        matricule: form.matricule.value,
        date: form.date.value,
        direction: form.allerRetour.value,
        numPassenger: form.numPassenger.value
    };
    id++;
    update(list_annonce);
    document.getElementById("form").reset();
    return false;
}

//affiche toutes les annonces sur la page
function update(dico){
    let section = document.getElementById("profiles");
    let html = "";
    for(let ids in Object.keys(dico)){
        if(dico[ids].numPassenger > 0){
            html += "<article><table class=\"profileTable\"><thead><tr><td colspan=\"2\"><p>Annonce #"+ids+"</p></td></tr></thead>"
            html += "<tr><th><p>Matricule :</p></th><td><p>"+dico[ids].matricule;
            html += "</p></td></tr><tr><th><p>Date :</p></th><td><p>"+dico[ids].date;
            html += "</p></td></tr><tr><th><p>Direction :</p></th><td><p>"+dico[ids].direction;
            html += "</p></td></tr><tr><th><p>Adresse :</p></th><td><p>"+ profile[dico[ids].matricule].adresse;
            html += "</p></td></tr><tr><th><p>Passager(s) :</p></th><td><p>"+dico[ids].numPassenger;
            html += "</p></td></tr><tr><th colspan = \"2\"><button onclick='confirmation("+ids+")'> Choisir</button></th></tr></table></article>";
        }
    }
    section.innerHTML=html;
}

//Simulation d'échange mail client-conducteur
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
        document.getElementById("profiles").style.display="flex";
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
