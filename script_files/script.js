//Output to console
    console.log("Greetings from console!");

//Variables
    var firstName = "Dominic";
        console.log(firstName);

    var lastName = "Toretto";
        console.log(lastName);

    var age = 20;
        console.log(age);

    var job = "Family";
        console.log(job);

    var adult = true;
        console.log(adult);

    var undef;
        console.log(undef);

    var null_ptr = null;
        console.log(null_ptr);
        //console.log(nonExistVar);

    var age2 = 25;
        console.log(age2);
        age2 = "Peter";
        console.log(age2);

//Multiple variables output
    var myName = "Dominic";
    var surname = "Toretto";
    var myAge = 20;
        console.log("My name is " + myName +" "+ surname +" "+ "and I am " + myAge + " " + "years old");

//Alert
    //alert("Chceš nainstalovat nejnovější virus?");
    //confirm("Máš modré vlasy?");

    // var age_prompt = prompt("Kolik je ti let?");
    // var confirmed = confirm("Jsi muž?");
    //     console.log(confirmed);

//Logic operators
    var age_1 = 26;
    var age_2 = 32;

    //Output is true or false

    //Ages are the same
    var result = age_1 == age_2;
        console.log(result);

    //First age is lower than the second one
    var result = age_1 < age_2;
        console.log(result);

    //Second age is lower than the first one
    var result = age_1 > age_2;
        console.log(result);

//Ternary operator
    var age = 15;
    age >= 18 ? console.log("Correct, age is over 18") : console.log("Incorrect, age is not over 18");

    var drink = age >= 18 ? "beer" : "lemonade"
    console.log(drink);

//What is the data type of certain var? ----> Keyword typeof(var);
    var age_1 = 26;
    var age_2 = 32; 

    var result = (age_1 == age_2);
    
        console.log(typeof(age_1));
        console.log(typeof(age_2));
        console.log(typeof(result));
        console.log(typeof("Mia"));
        //False = undefined, 0, "", NaN, null

//Incrementation / Decrementation of var
    var x = 5;
        console.log(x);

        x++;
        console.log(x);

        x += 1;
        console.log(x);

        ++x;
        console.log(x);

        x = x + 1;
        console.log(x);

        x--;
        console.log(x);

        x -= 1;
        console.log(x);

        --x;
        console.log(x);
        
        x = x - 1;
        console.log(x);

//Conditions if / else
    var n1 = 5;
    var n2 = 10;
    if(n1 > n2){
        console.log("n1 is higher than n2!");
    }
    else if(n1 == n2){
        console.log("n1 and n2 are the same!");
    }
    else{
        console.log("n1 is lower than n2!");
    }

    // var confirmed = confirm("Jsi muž?");
    // if(confirmed == true){
    //     console.log("You are man");
    // }
    // else{
    //     console.log("You are woman");
    // }

//Data type casting
    var first = "5"; // This is representation of string
        first = Number(first); // We casted var first into Number type
            console.log(first);
        first = String(first);
            console.log(first); 
            
    var str = "Paul";
            console.log(str);
        str = Number(str);  //This is not correct! "Paul" cannot be casted into Number
            console.log(str); 

//Switch
    var pet = "doggo";
    
    switch(pet){
        case "doggo":
            console.log("We've got a doggo!");
            break;
        
        case "kitty":
            console.log("We've got a kitty!"); 
            break;
            
        case "snake":
            console.log("We've got a snake!");
            break;

        default:
            console.log("We do not have that pet!");
    }

    //From if / else to switch 'conversion'
    var age = 9;

    if(age >= 18){
        console.log("Yeah he is over 18");
    }
    else{
        console.log("Well you are not over 18, young boy!");
    }

    switch(true){
        case age >= 18:
            console.log("Yeah he is over 18");
            break;
            
        case age <= 18:
            console.log("Well you are not over 18, young boy!");
            break;
    }

//Functions ---> Do not repeat yourself !!!  :)
    //Simple functions
        //Console output inside function, does not pass the result of (2021 - birth)
        function calcAge(birth){
            console.log(2021 - birth);
        }
        calcAge(2020);
        calcAge(1985);
        calcAge(1972);

        //With this approach we can pass the result of (2021 - birth) into any var outside of function calcAge2()
        function calcAge2(birth){
            return(2021 - birth);
        }
        var ageD = calcAge2(2020);
        var ageC = calcAge2(1985);
        var ageN = calcAge2(1972);

        console.log(ageD, ageC, ageN);

    //Intermediate functions with passing values from one function to another
        function calcAge2(birth){
            return(2021 - birth);
        }
        function yearsUntilRetirement(year, name){
            var age = calcAge2(year);
            var retirement = 65 - age;
            if(retirement < 0){
                retirement = -retirement;
                console.log(name + " " + "has been retired for " + retirement + " " + "years");
            }
            else{
                console.log(name + " " + "has " + retirement + " " + "Years until retirement");
            }
        }
        yearsUntilRetirement(2020, "David");
        yearsUntilRetirement(1985, "Casper");
        yearsUntilRetirement(1920, "Freddy");

    //Function expressions
        var calcAge3 = function(birth){
            return 2021 - birth;
        }
        console.log(calcAge3(2000));

        var myJob = function(job, name){
            switch(job){
                case "Student":
                    return name + " is " + job;

                case "Manager":
                    return name + " is " + job;

                default:
                    return "I do not know this job!";
            }
        }
        console.log(myJob("Student", "Marry"));

//Array
    var employees = ["David", "John", "Craig"];
        console.log(employees);
        console.log(employees[0]);
        console.log(employees[1]);
        console.log(employees[2]);

    var age = [12, 8, 42, 38];
        console.log(age);
        console.log(age[0]);
        console.log(age[1]);
        console.log(age[2]);
        console.log(age[3]);

    var john = ["John", "Moore", 42, 1976, false];
        console.log(john);

    var arr2 = new Array("Lindsay", "Rebecca", "Molly");
        console.log(arr2);

        arr2[0] = "Rick";
        console.log(arr2);

        arr2[5] = "Jane";
        console.log(arr2);

    //Array ----> push(add to last pos), unshift(add to first pos)
        var arr3 = ["Sam", "Judy", "Milo"];  
            console.log(arr3);

            arr3.push("Jackson");
            console.log(arr3);

            arr3.unshift("Peter");
            console.log(arr3);

    //Array ----> pop(remove last pos), shift(remove first pos)
        var arr4 = ["Franklin", "Samantha", "Cindy", "Hank"];
            console.log(arr4);

            arr4.pop();
            console.log(arr4);

            arr4.shift();
            console.log(arr4);
        
    //Array ----> Find the index of specified item
        var arr5 = ["Martin", "Derek", "Denzel", "Cole"];
            console.log(arr5);

            console.log(arr5.indexOf("Denzel"));

        //If item is not found in array, it returns -1
            console.log(arr5.indexOf("Hugh"));

    //Array ----> Length of array
        var arrX = ["Lucas", "Simon", "Rick"];
            console.log(arrX);
            console.log(arrX.length);

    //Array ----> Last item in array ouput
        var arrX = ["Lucas", "Simon", "Rick"];
            console.log(arrX);
            console.log(arrX[arrX.length - 1]);

//Objects
    var john = {
        firstName: "John",
        lastName: "Farwell",
        birthYear: 1975,
        adult: true,
        family: ["Rick", "Marty", "Diana"]
    }
    console.log(john);
    
    console.log(john.firstName);
    console.log(john["firstName"]);
    
    john.firstName = "Ricky";
    console.log(john);
    console.log(john.firstName);
    console.log(john["firstName"]);


    var lenny = new Object();
        lenny.firstName = "Lenny";
        lenny.lastName = "Moore";

        console.log(lenny);
        
        lenny.lastName = "Harlow";
        console.log(lenny);

    //Objects - methods = functions
        var milo = {
            firstName: "Milo",
            lastName: "Dornswell",
            birthYear: 1986,
            adult: true,
            family: ["Jane", "Marty", "Fred"],
            calculateAge: function(){
                return 2021 - milo.birthYear;
            }
        }
        console.log(milo);
        console.log(milo.calculateAge());

        var rupert = {
            firstName: "Rupert",
            lastName: "Minsky",
            birthYear: 1952,
            adult: true,
            family: ["Rick", "Harold", "Fred"],
            calculateAge: function(){
                return 2021 - this.birthYear; // <----- Takes the birthYear from current object - this.birthYear <==> rupert.birthYear
            }
        }
        console.log(rupert);
        console.log(rupert.calculateAge());

        var tony = {
            firstName: "Tony",
            lastName: "Stark",
            birthYear: 1969,
            adult: true,
            family: ["Hugh", "Amanda", "Jasmin"],
            calculateAge: function(){
                this.age = 2021 - this.birthYear; // <----- Creates key "age" and adds it to object
            }
        }
        //Not correct, because tony.calculateAge() has not been called before !!!
            console.log(tony);
            console.log(tony.age);

        //This is valid - You must call tony.calculateAge() before output
            tony.calculateAge();
            console.log(tony);
            console.log(tony.age);

//Cycles
    //for cycle - if we know the exact amount of repetitions
        for(var i = 0; i < 10;i++){
            console.log(i);
        }

        var arrY = ["John", "Kendra", "Riley"];
            console.log(arrY);
            for(var i = 0;i < arrY.length;i++){
                console.log(arrY[i]);
            }

            for(var num = 5; num <= 50;num+=5){
                console.log(num);
            }

    //while cycle - if we do not know the exact amount of repetitions
        var num2 = 80;
            while(num2 < 90){
                console.log(num2);
                num2++;
            }

            while(num2 < 100){
                
                if(num2 == 96){
                    break;
                }
                if(num2 == 93){
                    num2++;
                    continue;
                }
                console.log(num2);
                num2++;
            }

    //do while - if we do not know the exact amount of repetitions, min number of executions is 1
        var i = 0;
            do{
                console.log(i);
                i++;
            }while(i < 5);






//---------------------------------------------//


//DOM - Document Object Model

//QuerySelector
    //Get text
        var text = document.querySelector("p").textContent;
            console.log(text);

        var text = document.querySelector(".t1").textContent;
            console.log(text);

        var text = document.querySelector("#t2").textContent;
            console.log(text);

        var text = document.querySelector("h1").textContent;
            console.log(text);

    //Get whole element
        var text = document.querySelector("h1");
            console.log(text);

        var text = document.querySelector(".t1");
            console.log(text);

        var text = document.querySelector("#t2");
            console.log(text);
        
    //Change text in element
        document.querySelector("h2").textContent = "This is new h2";

    //Select multiple elements
        var text = document.querySelectorAll("p");
            console.log(text);

        var text = document.querySelectorAll("p");
            console.log(text[0]);
            console.log(text[1]);
            console.log(text[2]);
            console.log(text[3]);
            console.log(text[4]);
            console.log(text[5]);

        var text = document.querySelectorAll("p");
            for(var i = 0;i < text.length;i++){
                console.log(text[i].textContent);
            }

    //Change css
        document.querySelector("h1").style.color = "red";
        document.querySelector("h1").style.fontFamily = "Arial"
        
        var paragraph = document.querySelectorAll("p");
        for(var i = 0; i < paragraph.length;i++){
            paragraph[i].style.fontSize = "19px";
        }

        document.querySelector(".t1").style.fontSize = "13px";

        document.querySelector("#t2").style.fontWeight = 700;

//GetElementsByClassName
    var st = document.getElementsByClassName("first");
        console.log(st);

        console.log(st[0].textContent);
        console.log(st[1].textContent);

        for(var i = 0;i < st.length;i++){
            console.log(st[i].textContent);
        }

    var nd = document.getElementsByClassName("second");
        console.log(nd);

        console.log(nd[0].textContent);
        console.log(nd[1].textContent);

        for(var i = 0;i < nd.length;i++){
            console.log(nd[i].textContent);
        }
        