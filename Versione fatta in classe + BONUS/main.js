//
// programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
//

//BONUS: BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.
//
//
var listaMine = [];
var leMiePosizioni = [];
var numBombe = 16;
var maxBombe;

// Chiedere all'utente il livello di difficoltà sfruttando lo switch
do {var chooseLevel = parseInt(prompt('Scegli il livello di difficoltà tra 0 (facile), 1 (normale) e 2 (diffile)'));

} while ( chooseLevel != 0 && chooseLevel != 1 && chooseLevel != 2);


// Creiamo 3 diverse diramazioni che il gioco prende in base alla scelta precedente

switch (chooseLevel) {

    case 0:
        maxBombe = 100;
        break;
    case 1:
        maxBombe = 80;
        break;
    case 2:
        maxBombe = 50;
        break;
}

var maxPoint = maxBombe - numBombe;

// Riempiamo l'array con le bombe

while (listaMine.length < numBombe) {

    var minaRandom = getRndInteger(1,maxBombe);
    // verifico se la bomba è già presente nell'array
    // la inserisco solo se non è presente
    if (listaMine.includes(minaRandom) == false) {
        listaMine.push(minaRandom);
    }
}

console.log('lista mine :' , listaMine);

console.log(maxPoint);

// devo chiedere un numero all'utente
//verifico che il numero non sia presente nell'array listaMine
// se è presente, il gioco finisce e viene comunicato il risultato
// se non è presente continuo a inserire numeri fino ad un massimo di 84 / 64 / 34 (maxBombe - numBombe)

var isBombaTrovata = false;

do {

    var laMiaScelta = parseInt(prompt('inserisci un numero'));

    // verifico che laMiaScelta non sia presente nell'array delle mine
    // listaMine.includes(laMiaScelta) == false

    // verifico che la mia scelta non sia già presente tra quelli inseriti
    // leMiePosizioni.includes(laMiaScelta) == false

    var isGameOver = isUnaMina(laMiaScelta,listaMine );

    if (isGameOver == true) {

        isBombaTrovata = true;
        alert('hai perso , hai totalizzato ' + leMiePosizioni.length + ' punti');

    } else if (leMiePosizioni.includes(laMiaScelta) == false && !isNaN(laMiaScelta) ) {

        leMiePosizioni.push(laMiaScelta);

    } else {
        // avviso l'utente che è duplicato
        alert('duplicato');
    }

} while (isBombaTrovata == false && leMiePosizioni.length < maxPoint );

console.log(leMiePosizioni);

if (leMiePosizioni.length == maxPoint ) {
    alert('hai vinto totalizzando '+ leMiePosizioni.length + ' punti!');
}




function isUnaMina( sceltaUtente , arrayMine  ) {

    var controllo = false;

    if (arrayMine.includes(sceltaUtente) == true) {
        controllo = true;

    }
    return controllo;


}





function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
