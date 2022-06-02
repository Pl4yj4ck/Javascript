/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/



var Numero_gatti = 44;
var Gatti_file = 6;
var N_file = Math.ceil(Numero_gatti / Gatti_file);
var R = Numero_gatti % Gatti_file;
console.log("se ho " + Numero_gatti + " gatti e " + Gatti_file + " gatti per ogni fila, ci sono " + N_file + " file e l'ultima fila è composta da " + R + " gatti.");






/*
 PUOI SCRIVER LA RICA `26` IN TUTTI E DUE I MODI

'Numero_gatti % Gatti_file' oppure  'Numero_gatti - (Gatti_file * (N_file - 1)'

*/
