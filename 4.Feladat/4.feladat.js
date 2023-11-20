function osszesOszto(szam) {
    var szamok = [];
    var osztok = [];
    for (var i = 0; i < szam + 1; i++) {
        szamok.push(i);
    }
    for (var i = 0; i < szamok.length; i++) {
        if (szam % szamok[i] === 0) {
            osztok.push(szamok[i]);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var counter = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            counter++;
        }
    }
    return counter;
}
console.log(parosDarab([1, 2, 3, 45, 6, 7, 8]));
