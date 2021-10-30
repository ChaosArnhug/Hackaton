let dico_mat_mail ={
    /*matricule : email*/
    "HE122558" : "HE122558@students.ephec.be",
    "HE123456" : "HE123456@students.ephec.be",
    "HE654321" : "HE654321@students.ephec.be",
}
let object =[
    {
        matricule: "HE202075"
        date: "09/12/21",
        aller: "aller",
        adresse: "Grand'Place 1\n" +
            "1435 Mont-Saint-Guibert",
        nbrPass: "3",
    }
    {
        matricule: "HE202079"
        date: "16/12/21",
        aller: "retour",
        adresse: "Av. Minerve 6\n"+
            "1450 Chastre",
        nbrPass: "2",
    }
    {
        matricule: "HE202162"
        date: "03/11/21",
        aller: "retour",
        adresse: "Rue des Combattants 28\n"+
            "1450 Chastre",
        nbrPass: "4",
    }
    {
        matricule: "HE202162"
        date: "03/11/21",
        aller: "retour",
        adresse: "Rue des Combattants 28\n"+
            "1450 Chastre",
        nbrPass: "4",
    }
]

let liste=[];
function data(form){
    let object ={
        matricule : form.matricule.value,
        date : form.date.value,
        aller : form.allerRetour.value,
        adresse : form.address.value,
        nbrPassenger : form.numPassenger
    }
    liste.push(object);
    add(liste);
    document.getElementById("form").reset();
    return false;
}

let extraTime = 15;
function add(dico){
    let section = document.getElementById("profiles");
    let html = "";
    for(let i = 0; i < dico.length;i++){
        html += "<article id=\"profile1\"><table class=\"profileTable\"><tr><th><p>Matricule :</p></th><td><p>"+dico[i].matricule;
        html += "</p></td></tr><tr><th><p>Date :</p></th><td><p>"+dico[i].date;
        html += "</p></td></tr><tr><th><p>Aller/Retour :</p></th><td><p>"+dico[i].aller;
        html += "</p></td></tr><tr><th><p>Adresse :</p></th><td><p>"+dico[i].adresse;
        html += "</p></td></tr><tr><th><p>Nombre de passager :</p></th><td><p>"+dico[i].numPassenger;
        html += "</p></td></tr><tr><th colspan = \"2\"><button onclick=\"sendConfirmation("+dico[i].matricule+")\">Choisir</button></th></tr></table></article>";
    }
    section.innerHTML=html;
}
let profiles = true;

function switcher(){
    if(profiles){
        document.getElementById("profiles").style.display="block";
        document.getElementById("formInput").style.display="none";
        console.log("changed");
        profiles = false;
    }else{
        document.getElementById("formInput").style.display="flex";
        document.getElementById("profiles").style.display="none";
        profiles = true;
        console.log("changed");
    }
}
