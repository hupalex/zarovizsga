function osszesOszto(szam:number):number[]{
    let szamok:number[] = [];
    let osztok:number[] = [];

    for (let i:number = 0; i < szam + 1; i++) {
        szamok.push(i);
    }
    
    for (let i:number = 0; i < szamok.length; i++) {
        if (szam % szamok[i] === 0) {
            osztok.push(szamok[i]);
        }   
    }
    return osztok;    
}

function parosDarab(szamok:number[]):number {
    let counter:number = 0;
    for (let i:number = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            counter ++
        }
    }
    return counter;
}

function fuggvenyhivasPalindrom(fuggveny:Function):boolean {
    let szoveg:string = fuggveny;
})

function fuggveny() {
    return "görög"
}