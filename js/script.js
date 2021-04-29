//  Scrivi un programma che stampi i numeri da 1 a 100
//  var prova = 0;

 for (i = 1; i <= 100; i++) {
    
    //   Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.    
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            console.log(i + " FizzBuzz")
        }

    //   per i multipli di 3 stampi "Fizz" al posto del numero.

        else if ((i % 3) == 0) {
            console.log(i + " fizz");
         }

    //   per i multipli di 5 stampi Buzz.
        else if ((i % 5) == 0) {
            console.log(i + " buzz")
        }
        else {
            console.log(i)
        }
     
 }






    

   
    






