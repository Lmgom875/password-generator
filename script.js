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
        special: '! @ # $ % ^ & * ( ) - _ + = { } [ ] | \ , . / < > ?',
        upperCase: 'A B C D F G H I J K L M N O P Q R S T U V W X Y Z',
        lowerCase: 'a b c d e f g h i j k l m n o p q r s t v w x y z',
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

    //Event for change uppercase, special and numbers from true to false
    //Future update change to a for cicle
    app.elements.namedItem('upperCase').addEventListener('click', function(){
        //alert("boton Uppercase");
        configuration.upperCase = !configuration.upperCase;
        //console.log(configuration.upperCase);
    })
    app.elements.namedItem('numbers').addEventListener('click', function(){
        //alert("boton Uppercase");
        configuration.numbers = !configuration.numbers;
        //console.log(configuration.numbers);
    })
    app.elements.namedItem('special').addEventListener('click', function(){
        //alert("boton Uppercase");
        configuration.special = !configuration.special;
        //console.log(configuration.special);
    })

    //Event for generate the final password
    app.elements.namedItem('generateBtn').addEventListener('click', function(){
        passwordGenerator();
    })

    //Event for copy the password
    app.elements.namedItem('copyBtn').addEventListener('click', function(){
        copyPassword();
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
            //console.log(configuration.numCharacters);
         } 
         else if (mediano == true) {
            configuration.numCharacters = 12; 
            //alert ("El password va a ser mediano");
            //console.log(configuration.numCharacters);   
         }
        else {
            configuration.numCharacters = 16;
            //alert ("El password va a ser largo");
            //console.log(configuration.numCharacters);
         }
     }

     //Function for copie the password
     function copyPassword(){
        app.elements.namedItem('input-password').select();
        document.execCommand("copy");
        alert("Copied!!"); 
     }

    //Function for generate the final password
     function passwordGenerator(){
         var finalCharacters = '';
         var password = '';

        //For cicle to put together all the characters selected
         for (item in configuration){
            if(configuration[item] == true){
                finalCharacters += Characters[item] + ' ';
                //console.log(finalCharacters);
            };
         };
        
        //take out the last spaces
        finalCharacters = finalCharacters.trim();
        //convert to array
        finalCharacters = finalCharacters.split(' ');
        //console.log(finalCharacters);

        //for cicle to take 1 ramdom charater for the array
        for(var i = 0; i < configuration.numCharacters; i++){
            //password equal to finalCharacters rounded and random (array number) multiplied for the lenght of the array
            password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
            //console.log(password);
        }

        //show in the text box
        app.elements.namedItem('input-password').value = password;
     }

     
    

     //console.log(app.elements.namedItem('8char').checked, app.elements.namedItem('12char').checked,app.elements.namedItem('16char').checked);



}())
        
    
