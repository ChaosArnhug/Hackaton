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

let profile = {};
function formInscription(form) {
    /**Specification of the function:
     * 
     * @param {form} form le formulaire html d'où viennent les infos d'utilisateur
     * @returns {dictionnary} newProfile le dictionnaire contenant toutes les informations
     */
    
    let newProfile = {
        "matricule": form.matricule.value,
        "nom": form.nom.value,
        "prénom": form.prenom.value,
        "email": form.matricule.value + "@students.ephec.be",
        "adresse": `${form.numero.value}, ${form.rue.value} ${form.codeP.value}`,

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
