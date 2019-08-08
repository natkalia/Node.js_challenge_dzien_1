//Napisz taki program Node.js, w którym wyświetlisz swoje imię i nazwisko. Następnie po 5 sekundach program powinien jeszcze wypisać wita się z Node.js! i zakończyć swoje działanie.

function hello() {
  console.log("Jan Kowalski");
  setTimeout(() => {
    console.log("wita się z Node.js!");
}, 5000);
}

hello();
