function somar() {
    let nota1 = document.getElementById("nt1");
    let nota2 = document.getElementById("nt2");
    let nota3 = document.getElementById("nt3");
    let nota4 = document.getElementById("nt4");
    let res = document.getElementById("res");
    let t1 = Number(nota1.value);
    let t2 = Number(nota2.value);
    let t3 = Number(nota3.value);
    let t4 = Number(nota4.value);
    let s = (t1 + t2 + t3 + t4) / 4;

    res.innerHTML = `A média final é: ${s}`;


}

