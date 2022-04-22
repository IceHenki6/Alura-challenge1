# Challenge 1: Encriptador de Texto

    Programa que encripta/codifica un texto ingresado por el usuario.

    Gracias por visitar mi repo :D

    Antes que nada me gustaría agradecer a Oracle y a Alura Latam por darme la oportunidad de participar en este curso, Oracle Next Education, para poder formarme en el desarrollo de software.

    Cómo funciona el encriptador?
        Las "llaves" de encriptación que utilizaremos son las siguientes:

        `La letra "e" es convertida para "enter"`
        `La letra "i" es convertida para "imes"`
        `La letra "a" es convertida para "ai"`
        `La letra "o" es convertida para "ober"`
        `La letra "u" es convertida para "ufat"`

        **Requisitos:**
        - Debe funcionar solo con letras minúsculas
        - No deben ser utilizados letras con acentos ni caracteres especiales
        - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

        Por ejemplo:
        `"gato" => "gaitober"`
        `gaitober" => "gato"`

    En este proyecto mi objetivo fue realizar la parte lógica y el algoritmo para encriptar y desencriptar de la manera más simple posible con los conocimientos que tenía a mi alcance; los conocimientos que poseía previamente y lo aprendido en los cursos de Alura Latam en el programa Oracle Next Education.

# Proceso de encriptación con JS:
    La función "encriptador" posee una varliable local "str" a la cual se le asigna el valor de "input" el cual es un string. Luego con el method split se le asigna a la variable local "arr1" el valor de str convertido a un array, cuyo motivo lo explicaré más adelante.
    Luego "arrCopia" copia el valor de arr1.
    "Reemplazos" es un array de strings; contiene las "llaves de encriptación" para reemplazar a sus respectivas letras, como se ha explicado en las consignas del challenge estas son: ['imes','ai','enter','ober','ufat']
    Y "vocales" es también un array de strings, este contiene las letras vocales.

    Es fundamental que el orden de "vocales" coincida con el orden de sus respectivos reemplazos en el array "reemplazos".

    En el array arrCopia, es donde se harán los reemplazos de las vocales por sus "llaves de encriptación" correspondientes.
    Para ello utilicé un bucle for anidado, el for exterior recorre el array "vocales", mientras que el for interior recorre "arr1", este nos servirá como guía para ir reemplazando los valores en arrCopia. Si el valor de vocales en el índice actual "i" (vocales[i]) coincide con un valor en el índice "j" de arr1(arr1[j]), mediante el method de JS "splice"(el motivo por el cual decidí trabajar con arrays) se reemplazará el valor en el índice actual "j" de arrCopia(arrCopia[j], es decir, "splice" modificará a arrCopia). ArrCopia se convertirá en nuestro texto encriptado.

    Luego se le asigna a "mensajeEncriptado" mediante arrCopia.join("") el cual retorna un string de arrCopia. Finalmente, se muestra en el lugar correspondiente el mensajeEncriptado.

# Proceso para desencriptar.
    El proceso para desencriptar es incluso mucho más sencillo que el de encriptar, gracias a las expresiones regulares!!
    Similar a la función encriptador(), desencriptar() posee a los arrays reemplazos y vocales, cuyo contenido ya expliqué. Pero además, la función desencriptar() posee a "keyletters", un array compuesto por las "llaves de encriptación" en expresiones regulares: [/imes/g,/ai/g,/enter/g,/ober/g,/ufat/g]. La letra g es para que se realice una búsqueda global de cada patrón.
    Decidí utilizar expresiones regulares debido al método string.replace() de Javascript, el cual devuelve un nuevo string con una o más coincidencias de un patrón, este method admite un patrón y un reemplazo, y el patrón puede estar formado por expresiones regulares. Si utilizamos replace() y utilizamos de patrón expresiones regulares con el indicador de búsqueda global "g", este reemplazará a todo lo que coincida con ese patrón con su correspondiente reemplazo.

    Para realizar esto utilicé un for con los arrays keyLetters y vocales, para los cuales es fundamental que el orden de "vocales" coincida con el orden de sus respectivos reemplazos en "keyLetters". Luego un for que recorre a reemplazos y comprueba que la llave de encriptación en el índice actual(reemplazos[i]) se encuentre en el string "str" mediante el method "includes()". Si se encuentra una coincidencia, se procede mediante replace() a reemplazar todas las coincidencias mediante expresiones regulares de la actual llave de encriptación en el índice de keyLetters[i], con la vocal en el índice actual vocales[i].
    El bucle for modifica constantemente a la variable "str".
    Finalmente se muestra al usuario el valor de "str" en el lugar correspondiente.

...to be continued :)






