//*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 //per i multipli di 3 stampi “Fizz” al posto del numero
 //per i multipli di 5 stampi “Buzz” al posto del numero
 //per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


 //* Adesso realizziamo una stampa per la console, i numeri da 1 a 100:

const fizzElement = document.createElement('div');
const 

 for ( let i = 1; i <= 100 ; i++){

//per i multipli di 3 stampi “Fizz” al posto del numero
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i)

    document.getElementById('output').innerHTML="output";
    
 }

    //*const wrapperElement = document.querySelector('my_wrapper')