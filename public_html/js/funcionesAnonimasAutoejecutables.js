//Función declarada
/*function saludo()
{
    alert('hola');
}

window.onload = saludo;*/

//Función anónima
//La desventaja es que si se quiere utilizar esta función más adelante en otro 
//punto del script, no se podría
/*window.onload = function()
{
    alert('Hola desde una función anónima.');
};*/

//Dos maneras de invocar al objeto jQuery
//1- Aplicando directamente el objeto 'Jquery'
//jQuery('h1').css({backgroundColor: 'yellow'});

//2-Aplicando el símbolo del dolar($)
//$('h1').css({backgroundColor: 'yellow'});

//Funciones anónimas autoejecutables
//A la vez que se declaran, también se ejecutan
//Manera clásica:
(function(d, w, n, _){
    //alert('Hola');
    console.log(d, w, n);
    console.log(n.userAgent);
    
    //Esto invoca a la librería jQuery por completo, 
    //ya que en la función hemos sustituído el símbolo '$' por el símbolo '_'
    console.log(_);
    
    //$('h1').css({backgroundColor: 'yellow'});
    _('h1').css({backgroundColor: 'magenta'});
})(document, window, navigator, jQuery);

/*Formas de escribir las funciones anónimas autoejecutables
 *  //Clásica -> La más encapsuladora
 *  (function (){
 *      console.log('versión clásica');
 *  })()
 *  
 *  //La Crockford (JavaScript The Good Parts) -> Un autor
 *  ((function (){
 *      console.log('versión Crockford');
 *  })())
 *  
 *  //Unario
 *  +function(){
 *      console.log('versión unaria');
 *  }()
 *  
 *  //Facebook
 *  !function(){
 *      console.log('versión Facebook');
 *  }()
 * 
 * */

//Clásica -> La más encapsuladora
(function (){
    console.log('versión clásica');
})();

//La Crockford (JavaScript The Good Parts) -> Un autor
((function (){
    console.log('versión Crockford');
})());

//Unario
+function(){
    console.log('versión unaria');
}();

//Facebook
!function(){
    console.log('versión Facebook');
}();