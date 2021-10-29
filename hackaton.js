let dico_mat_mail ={
    /*matricule : email*/
    "HE122558" : "HE122558@students.ephec.be",
    "HE123456" : "HE123456@students.ephec.be",
    "HE654321" : "HE654321@students.ephec.be",

}

function date(form){
    if(verifierInfo()) {
        let a = form.matricule.value;
        let b = form.date.value;
        let c = form.heure.value;
        let d = form.carOrNot.value;
        let e = form.allerRetour.value;
    }
    return false
}

function verifierInfo{
    verifMatr(form.matricule.value)
    
}
function verifMatr(matr){
    let ver=0
    if(matr.length===8) {
        if ((matr[0] === "H") && (matr[2] === "E")) {
            for (let i = 2; i < 8; ++i) {
                if (+matr[i].type === number) {
                    ++ver
                }
            }
        }
    }
    if(ver===6) {
        return true
    }
}


