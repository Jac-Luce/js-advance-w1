/* 1. Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50. */

function controlNum (num1 , num2) {
 if ((num1 === 50) || (num2 === 50) || (num1 + num2)=== 50) {
    console.log(true);
 } else {
    console.log (false);
 }
}
controlNum(20,30);

/* 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la 
posizione come parametri e ritorna la stringa. */

function remove (string, n) {
    let newString = string.split("");
    let arrayString = newString.slice(n);
    
}

/* 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se 
rispecchiano queste condizioni, altrimenti ritorna 'false'. */

function includedNum (first , second) {
    if (((first > 39 && first < 61) || (first > 69 && first < 101)) && ((second > 39 && second < 61) || (second > 69 && second < 101))) {
        console.log(true);
    } else {
        console.log (false);
    }
}
includedNum(40, 101);


/* 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con 'Los' o 'New',
altrimenti ritorni 'false'. */

/* 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato
come parametro. */

let myArray = [10, 5, 4, 8, 35, 44, 90];

function somma () {
    let tot = 0;
    myArray.forEach(element => {
        tot += element;
    });
    return tot;
}
console.log(somma());
/* 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se non li contiene ritorna 'true',
altrimenti ritorna 'false'.  */

let myNewArrey = [10, 22, 5, 18, 70, 3, 32, 41];

function controlNumber () {
    myArray.forEach(element => {
        if (element === 1 || element === 3) {
            console.log(false);
        } else {
            console.log(true);
        }
    });
}

/* 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° --> ritorna 'acuto'
Angolo ottuso: tra i 90° e i 180° --> ritorna 'ottuso'
Angolo retto: 90° --> ritorna 'retto'
Angolo piatto: 180° --> ritorna 'piatto' */

/* 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve
ritornare 'FIAT' */