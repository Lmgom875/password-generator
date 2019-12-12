(function(){
    /* -------------------------- */
    /* Variables and Objects */
    /* -------------------------- */

    //variable to get access to the form tag
    var app = document.getElementById('app');
    


    //variable with the configuration of the password by default
    var configuration = {
        numCharacters: 8,
        numbers: false,
        upperCase: false,
        special: false,
        lowerCase: true,
    }
    //varible with all the characters used in the password
    var Characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ # $ % ^ & * ( ) - _ + = { } [ ] | \ , . / < > ?',
        UpperCase: 'A B C D F G H I J K L M N O P Q R S T U V W X Y Z',
        LowerCase: 'a b c d e f g h i j k l m n o p q r s t v w x y z',
    };

    /* -------------------------- */
    /* Events */
    /* -------------------------- */

    // Event for stop the app to make a default submit when clicked
    app.addEventListener('submit', function(e){
        e.preventDefault();
    });
    // Event for change password lenght
    app.elements.namedItem('8char').addEventListener('click', function(){
        // alert("el password es corto");
        //console.log(app.elements.namedItem('8char').checked)
        //console.log(app.elements.namedItem('8char').checked, app.elements.namedItem('12char').checked,app.elements.namedItem('16char').checked);
        cantCharacter();
    })
    // Event for change password lenght
    app.elements.namedItem('12char').addEventListener('click', function(){
        // alert("el password es mediano");
        //console.log(app.elements.namedItem('12char').checked)
        //console.log(app.elements.namedItem('8char').checked, app.elements.namedItem('12char').checked,app.elements.namedItem('16char').checked);
        cantCharacter();
    })
    // Event for change password lenght
    app.elements.namedItem('16char').addEventListener('click', function(){
        // alert("el password es largo");
        //console.log(app.elements.namedItem('16char').checked)
        //console.log(app.elements.namedItem('8char').checked, app.elements.namedItem('12char').checked,app.elements.namedItem('16char').checked);
        cantCharacter();
    })


    /* -------------------------- */
    /* Functions */
    /* -------------------------- */
    //Function to change password lenght
     function cantCharacter(){
         var corto = app.elements.namedItem('8char').checked;
         var mediano = app.elements.namedItem('12char').checked;
         var largo = app.elements.namedItem('16char').checked;
        if (corto == true) {
            configuration.numCharacters = 8;
            //alert ("El password va a ser corto");
            console.log(configuration.numCharacters);
         } 
         else if (mediano == true) {
            configuration.numCharacters = 12; 
            //alert ("El password va a ser mediano");
            console.log(configuration.numCharacters);   
         }
        else {
            configuration.numCharacters = 16;
            //alert ("El password va a ser largo");
            console.log(configuration.numCharacters);
         }
     }

    

     console.log(app.elements.namedItem('8char').checked, app.elements.namedItem('12char').checked,app.elements.namedItem('16char').checked);



}())
        
    
