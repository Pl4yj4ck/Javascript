/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var anno_corrente = 2022;
var anno_nascita = 1977;
var anni = anno_corrente - anno_nascita
var anni_mancanti_100 = 100 - anni
var anno_dei_100 = 2022 + anni_mancanti_100
console.log("Se quest'anno siamo nel " + anno_corrente + " e sono nato nel " + anno_nascita + " ho " + anni + ", mi mancano " + anni_mancanti_100 + " anni a quando avrò 100 anni e sarà il " + anno_dei_100);
