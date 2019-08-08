// Zadanie 2. Odpowiednia kolejność
// Napisz program, który wypisze poniższe tekst zgodnie z zadaną kolejnością. Najpierw jest informacja po jakim czasie od uruchomienia programu tekst powinien się pojawić, a następnie jaki to tekst. Jaki tekst się ułożył :) ?
// Po 4 sekundach od uruchomienia: Node.js
// Po 1 sekundzie od uruchomienia: się
// Od razu po uruchomieniu wyświetl: Witam
// Po 6 sekundach od uruchomienia: i korzystam
// Po 5 sekundach od uruchomienia: w konsoli
// Po 7 sekundach od uruchomienia: z funkcji czasu!
// Po 2 sekundach od uruchomienia: z
// Po 3 sekundach od uruchomienia: programem

function delayedText(x,y) {
  setTimeout(() => {
    console.log(x);
  },  y);
}

console.log("Witam");

delayedText("się", 1000);
delayedText("z", 2000);
delayedText("programem", 3000);
delayedText("Node.js", 4000);
delayedText("w konsoli", 5000);
delayedText("i korzystam", 6000);
delayedText("z funkcji czasu!", 7000);