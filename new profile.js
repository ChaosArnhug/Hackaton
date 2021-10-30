let listMatricule = [
    {
        "HE122558": "HE122558@students.ephec.be",
        "date": "12-10-21",
        "heure": "10h30",
        "arriveeEphec": true, //true = aller, false = 
        "conducteur": false, //true = conducteur, false = passager
        "nbrPlace": 0, //-1 = passager, autre = conducteur avec nombre de place, 0 = plus de place libre
        "codePostal": 1345,
    },

    {
        "HE123456": "HE123456@students.ephec.be",
        "date": "15-09-21",
        "heure": "09h30",
        "arriveeEphec": false,
        "conducteur": true,
        "nbrPlace": 2,
        "codePostal": 1340,
    },

    {
        "HE654321": "HE654321@students.ephec.be",
        "date": "05-5-21",
        "heure": "15h30",
        "arriveeEphec": true, 
        "conducteur": false,
        "nbrPlace": 0,
        "codePostal": 1341,
    },

    {
        "HE202122": "HE202122@students.ephec.be",
        "date": "14-3-21",
        "heure": "14h00",
        "arriveeEphec": false,
        "conducteur": false,
        "nbrPlace": 0,
        "codePostal": 1342,
    }


]





function associer(matricule) {
    /**Specification of function :
     * 
     * @param {string} matricule matricule du passager
     * @return {array} listConducteur la liste des conducteurs répondants aux critères
     *La fonction va rechercher pour le passager tous les profils de conducteur
     pouvant correspondre à son besoin (si jour, heure, code postal et aller ou retour correspondent)
     La fonction, va retourner une liste de conducteur (via des matricules) correspondants aux critères du passager.
     */

    let listConducteur = [];

     for (let a = 0; a < listMatricule.lenght; a++) {
         if (!(listMatricule[a]['date'] == listMatricule[matricule]['date'])) {
             continue;
         }
         
         if (!(listMatricule[a]['heure'] == listMatricule[matricule]['heure'])) {
             continue;
         }

         if (!(listMatricule[a]['arriveeEphec'] == listMatricule[matricule]['arriveeEphec'])) {
             continue;
         }

         if (!(listMatricule[a]['conducteur'] == true)) {
             continue;
         }
        
         if (!(listMatricule[a]['codePostal'] == listMatricule[matricule]['codePostal'])) {
             continue;
         }

         if (!(listMatricule[a]['nbrPlace'] > 0)) {
             continue;
         }

     }
}

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
function formInscription(form) {
    /**Specification of the function:
     * 
     * @param {form} form le formulaire html d'où viennent les infos d'utilisateur
     * @returns {dictionnary} newProfile le dictionnaire contenant toutes les informations
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
