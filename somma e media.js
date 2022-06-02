/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/

var a = 4;
var b = 6;
var c = 2;
var d = 9;
var e = 0;
var a2 = a * 10000;
var b2 = b * 1000;
var c2 = c * 100;
var d2 = d * 10;
var somma2 = a2 + b2 + c2 + d2 + e
var somma3 = somma2.toString()
var lunghezza = somma3.length;
var somma = a + b + c + d + e;
var media = somma /lunghezza;
console.log("con i numeri: " + a + ' ' + b + ' ' + c + ' ' + d + ' ' + e);
console.log('la somma è ' + somma);
console.log('e la media è ' + media);
