window.addEventListener("load", function () {
    const artyom = new Artyom();

    let a;
    let b;
    let c;
    let production;
    let sick;
    let wearing;
    let one_date;
    let two_dates;


    let suggestions1 = [
        "'Was habe ich noch vor'",
        "'Wie lautet mein dritter Termin'",
        "'Wie lautet mein nächster Termin'"
    ];


    

      // production  two factories AB and two dates
    artyom.addCommands({
        description: "wild",
        indexes: [/reset/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("reset");
            reset();
        }
    });
      
    artyom.addCommands({
        description: "wild",
        indexes: ["*"],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("WILDCARD", _wildcard)
            wildhandler(_wildcard);
        }
    });



    document.getElementById("start").addEventListener("click", start);
    function start() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "en-US",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
                artyom.sayRandom([
                    "Good Morning",
                    "Hey, good to see you again",
                    "Hello, I don't have anything to say today",
                    "Hey, Did you remember that I didn't say nothing yesterday? Well, today I dont want neither."
                ]);
             });
        }, 250);
    }

    function reset(_wildcard) {
            a = null;
            b = null;
            c = null;
            sick = null;
            production = null;
            wearing = null;
            two_dates = null;
            one_date = null;
            artyom.sayRandom(["Allright, can I help you with something else", "I hope this was helpful, what else can i do you four?", "feel free to ask another question"]);
    }

    function wildhandler(_wildcard) {
        if (a == null){
            a = _wildcard.match(/((factory|plant|company) [aA]|&[aA]|and [aA]|[aA]&|np [aA])/);
        }
        console.log("one");
        if (b == null){
            b = _wildcard.match(/((factory|plant|company) [bB]|&[bB]|and [bB]|[bB]&|np [bB]| [bB] )/);
        }
        console.log("two");
        if (c == null){
            c = _wildcard.match(/((factory|plant|company) [cC]|&[cC]|and [cC]|[cC]&|np [cC]| [cC] )/);
        }
        console.log("three");

        if (production == null){
            production = _wildcard.match(/(production|produced|built|products)/);
        }
        console.log("four");

        if (sick == null){
            sick = _wildcard.match(/(sick|ill|at home|not at work)/);
        }
        console.log("five");

        if (wearing == null){
            wearing = _wildcard.match(/(wearing)/);
        }
        console.log("six");

        if (two_dates == null){
            two_dates = _wildcard.match(/((january)|(february)|(march)|(april)|(May)|(june)|(july)|(august)|(september)|(october)|(november)|(december)|(this month)) ?(.* ?)* ?((january)|(february)|(march)|(april)|(May)|(june)|(july)|(august)|(september)|(october)|(november)|(december)|(this month))/);
        }
        console.log("seven");

        if (one_date == null){
            one_date = _wildcard.match(/(january|february|march|april|may|june|july|august|september|october|november|december|this month)/);
        }
        console.log("eight");


        console.log(a && true);
        console.log(b && true);
        console.log(c && true);
        console.log(production && true);
        console.log(sick && true);
        console.log(wearing && true);
        console.log(two_dates && true);
        console.log(one_date && true);

        let counter = 0;
        stack = [];
        if (a){
            counter = counter + 1;
            stack.push("A");
        }
        if (b){
            counter = counter + 1;
            stack.push("B");
        }

        if (c){
            counter = counter + 1;
            stack.push("C");
        }

        inner_stack = [];
        inner_counter = 0;
        if (production){
            inner_counter = inner_counter + 1;
            inner_stack.push("produced units");
        }
        if (sick){
            inner_counter = inner_counter + 1;
            inner_stack.push("sick people");
        }

        if (wearing){
            inner_counter = inner_counter + 1;
            inner_stack.push("wearing parts");
        }


        if ( !a && !b && !c && !production && !sick && !wearing && !two_dates && !one_date  ){
            artyom.say("Please ask for factory a,b or and for production units, sick people or waring parts and for one or two dates");
            return 0;
        }

        if ( a && b && c ){
            artyom.say("Unfortunately, It is not allowed to compare three factories");
            reset();
            return 0;
        }


        // PASS
        if (!two_dates){
            if (one_date){
                artyom.say("For the specific date ");
            }else{
                artyom.say("Today ");

            }

            // nothiing wanted? so all said
            if (counter == 0){

                stack.push("C");
                stack.push("B");
                stack.push("A");
            }
            if (inner_counter == 0){
                inner_stack.push("produced units");
                inner_stack.push("sick people");
                inner_stack.push("broken wearing parts");
            }


            let s_l =stack.length;
            for (i = 0; i < s_l; i++) {
                artyom.say("Factory " + stack.pop());

                let inner_s_l =inner_stack.length;
                let temp_stack = deepcopy(inner_stack);
                for (j = 0; j < inner_s_l; j++) {
                    if (j != inner_s_l-1){
                        artyom.say("the amount of " + temp_stack.pop() + " is " + getRandomInt(5,5000));
                        artyom.say(" and ");

                    } else{
                        artyom.say("the amount of " + temp_stack.pop() + " is " + getRandomInt(5,5000));
                    }
                    }
              } 

              if (i < s_l-1){
                artyom.say(" and ");
              }
        } else {


            artyom.say("Between these two dates ");
            // nothiing wanted? so all said
            if (counter == 0){
                stack.push("C");
                stack.push("B");
                stack.push("A");
            }
            if (inner_counter == 0){
                inner_stack.push("produced units");
                inner_stack.push("sick people");
                inner_stack.push("broken wearing parts");
            }


            let inner_s_l =inner_stack.length;

            for (j = 0; j < inner_s_l; j++) {
                artyom.say("The difference for " + inner_stack.pop());
                
                let temp_stack = deepcopy(stack);

                let s_l =temp_stack.length;

                for (i = 0; i < s_l; i++) {
                    artyom.say(" for Factory " + temp_stack.pop() + " is " + get_half_times_a_minus_string() + " " + getRandomInt(-50,50) + " " + get_half_times_a_percent_string() + ".");
                } 
            }
        }
        reset();
    }


    function get_half_times_a_minus_string(){

        if (getRandomInt(0,100) < 50){
            return "minus"
        }
        else{
            return ""
        }
    }

    function get_half_times_a_percent_string(){

        if (getRandomInt(0,100) <50){
            return "percent"
        }
        else{
            return ""
        }
    }
    function deepcopy(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
});