/*
* Exercice 1 : Ecrire une fonction qui prend en paramètre un tableau, et qui retourne un nouveau tableau qui contient le premier, le troisième, et le dernier éléments du tableau passé en paramètre.
* Exemple :
* reorder([1, 2, 3, 4, 5, 6, 7, 9]) -> doit retourner [1, 3, 9]
* reorder([7, 2, 10, 3, 97]) -> doit retourner [7, 10, 97]
*/
let myArray = [1, 2, 3, 4, 5, 6, 7, 9];

reorder(myArray);

function reorder(param) 
{ 
  if(!Array.isArray(param)) 
  {
    alert("Le paramètre doit être un tableau.");
    return false;
  } 
  else 
  {
    let newArray = [];

    for(let i=0; i < param.length; i++)
    {
      if(i==0 || i==2 || i==(param.length-1))
      {
        newArray.push(param[i]);
      }
    }

    return newArray;
  }
}


/*
* Exercice 2 : Ecrire une function qui prend en paramètre une phrase et qui retourne le premier mot de la phrase.
* Exemple :
* firstWord("Hello world")  -> doit retourner "Hello"
* firstWord("La Manu")  -> doit retourner  "La"
*/
firstWord("Hello world");

function firstWord(param) 
{
  if(typeof param !=="string")
  {
    alert("Le paramètre doit être une chaîne de caractères.");
    return false;
  }
  else
  {
    let first = param.split(' ')[0];
    return first;
  }
}


/*
* Exercice 3 : Ecrire une function qui prend en paramètre un nombre et qui retourne le nombre de chiffres qui le compose.
* Exemple:
* countNumber(13) -> doit retouner  2
* countNumber(123) -> doit retouner 3
* countNumber(4) -> doit retouner 1
*/
countNumber(536);

function countNumber(param) 
{
  if(typeof param !=="number")
  {
    alert("Le paramètre doit être un nombre.");
    return false;
  }
  else
  {
    var digits = 0;

    if (param >= 1)
    {
      digits++;
    } 

    while (param / 10 >= 1) 
    {
      param /= 10;
      digits++;
    }

    return digits;
  }  
}


/*
* Exercice 4 : Ecrire une fonction qui prend en paramètre une chaine de caractères et qui retourne cette même chaine inversée.
* Exemple :
* backwardString('bonjour')  doit retourner  'ruojnob'
* backwardString('123456789') doit retourner  '987654321'
*/
backwardString('hello');

function backwardString(param) {
  if(typeof param !=="string")
  {
    alert("Le paramètre doit être une chaîne de caractères.");
    return false;
  }
  else
  {
    let myArray = param.split('');
    let reverseArray = myArray.reverse();
    let reverseString = reverseArray.join(''); 
    return reverseString;
  }
}


/*
* Exercice 5 : Ecrire une fonction prenant en paramètre un nombre et qui retourne true si le nombre est pair, false si le nombre est impair.
* Exemple :
* isEven(2) -> doit retourner  true
* isEven(5) -> doit retourner false
* isEven(0) -> doit retourner true
*/
isEven(14);

function isEven(param) 
{
  if(typeof param !=="number")
  {
    alert("Le paramètre doit être un nombre.");
    return false;
  }
  else
  {
    if(param % 2 == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}


/*
* Exercice 6 : Ecrire une fonction qui permet d’afficher la valeur de chaque propriété de l’objet ci-dessous dans le format suivant "Hello, World, 26 ans" :'
* Exemple de tableau:
* var user = {
*  firstname: "Hello", 
*  lastname: "World",
*  age: 26
*  };
*/
var user = {
  firstname: "Hello", 
  lastname: "World",
  age: 26
};

boucle(user);

function boucle(param) 
{
  if(typeof param !=="object")
  {
    alert("Le paramètre doit être un objet.");
    return false;
  }
  else
  {
    let text = "";

    for (let x in param) 
    {
      if(x==='age')
      {
        text += param[x] + " ans";
      }
      else
      {
        text += param[x] + ", ";
      }
    }
    
    return text;
  }
}

