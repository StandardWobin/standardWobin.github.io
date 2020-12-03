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
    let today;
    let highest;
    let all_fact;
    let percent;
    let repeat;

    let lasta;
    let lastb;
    let lastc;
    let lastsick;
    let lastproduction;
    let lastwearing;
    let lasttwo_dates;
    let lastone_date;
    let lasttoday;
    let lasthighest;
    let lastall_fact;
    let lastpercent;
    let lastrepeat;
              
    artyom.addCommands({
        description: "stop",
        indexes: [/(stop|halt|shut up|quiet|quit|bitch)/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("STOP", _wildcard);
            artyom.shutUp();
            artyom.sayRandom(["ok, I shut up, how can I help?", "ok boomer, what else do you want to know?"]);
        }
    });


      // production  two factories AB and two dates
    artyom.addCommands({
        description: "resest",
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
                    "Hey, good to see you",
                    "Hey, good to have you here",
                    "Hello, how can i help?"
                ]);
             });
        }, 250);
    }

    function reset(_wildcard) {


            lasta = deepcopy(a);
            lastb = deepcopy(b);
            lastc = deepcopy(c);
            lastsick = deepcopy(sick);
            lastproduction = deepcopy(production);
            lastwearing = deepcopy(wearing);
            lasttwo_dates = deepcopy(two_dates);
            lastone_date = deepcopy(one_date);
            lasttoday = deepcopy(today);
            lasthighest = deepcopy(highest);
            lastall_fact = deepcopy(all_fact);
            lastpercent = deepcopy(percent);
            lastrepeat = deepcopy(repeat);


            a = null;
            b = null;
            c = null;
            sick = null;
            production = null;
            wearing = null;
            two_dates = null;
            one_date = null;
            today = null;
            highest = null;
            all_fact = null;
            percent = null;
            repeat = null;






            artyom.sayRandom(["Allright, can I help you with something else", "I hope this was helpful, what else can i do you four?", "feel free to ask another question", "thank you for traveling with deusche bahn"]);
    }

    function wildhandler(_wildcard) {
        if (a == null){
            a = _wildcard.match(/((factory|plant|company|victory) [aA]|&[aA]|and [aA]|[aA]&|np [aA])/);
        }
        if (b == null){
            b = _wildcard.match(/((factory|plant|company|victory) [bB]|&[bB]|and [bB]|[bB]&|np [bB]| [bB] )/);
        }
        if (c == null){
            c = _wildcard.match(/((factory|plant|company|victory) [cC]|&[cC]|and [cC]|[cC]&|np [cC]| [cC] )/);
        }

        if (production == null){
            production = _wildcard.match(/(production|produced|built|products)/);
        }

        if (sick == null){
            sick = _wildcard.match(/(sick|ill|at home|not at work|6)/);
        }

        if (wearing == null){
            wearing = _wildcard.match(/(wearing|raring|rowing|parts|fairing|bearing)/);
        }

        if (two_dates == null){
            two_dates = _wildcard.match(/((january)|(february)|(march)|(april)|(may)|(june)|(july)|(august)|(september)|(october)|(november)|(december)|(this month)) ?(.* ?) ?((january)|(february)|(march)|(april)|(may)|(june)|(july)|(august)|(september)|(october)|(november)|(december)|(this month))/);
        }

        if (one_date == null){
            one_date = _wildcard.match(/(january|february|march|april|may|june|july|august|september|october|november|december|this month)/);
        }

        if (today == null){
            today = _wildcard.match(/(today|this day|this morning|this noon|since morning)/);
        }


        if (highest == null){
            highest = _wildcard.match(/(highest|max|is more (than|then)|most)/);
        }

        if (all_fact == null){
            all_fact = _wildcard.match(/(all( the)? plants|all( the)? factories|all( the)? factories|oldfactory|total)/);
        }


        if (percent == null){
            percent = _wildcard.match(/(percent|%|per cent|percentage)/);
        }

        if (repeat == null){
            repeat = _wildcard.match(/(repeat|again|one more time)/);
        }




        console.log("a " + a );
        console.log("b " + b );
        console.log("c " + c );
        console.log("Production " + production );
        console.log("sick " + sick );
        console.log("wearing " + wearing );
        console.log("two dates" + two_dates );
        console.log("onedate " + one_date );
        console.log("today " + today );
        console.log("highest " + highest );
        console.log("all facts " + all_fact );
        console.log("percent " + percent );
        console.log("repeat " + repeat );

        console.log("test " , null && true);

        console.log("a " , a && true);
        console.log("b " , b && true);
        console.log("c " , c && true);
        console.log("Production " , production && true);
        console.log("sick " , sick && true);
        console.log("wearing " , wearing && true);
        console.log("two dates" , two_dates && true);
        console.log("onedate " , one_date && true);
        console.log("today " , today && true);
        console.log("highest " , highest && true);
        console.log("all facts " , all_fact && true);
        console.log("percent " , percent && true);
        console.log("repeat " , repeat && true);

        


        
        let counter = 0;
        stack = [];

        if (c){
            counter = counter + 1;
            stack.push("C");
        }

        if (b){
            counter = counter + 1;
            stack.push("B");
        }

        if (a){
            counter = counter + 1;
            stack.push("A");
        }
   

        if (today){
            one_date = null;
            two_dates = null;
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


        if ( !a && !b && !c && !production && !sick && !wearing && !two_dates && !one_date  && !repeat && !percent){
            artyom.say("Please ask for factory a or b or c and for production units, sick people or wearing parts and for one or two dates some local maxima");
            reset();
            return 0;
        }

 





        if (repeat){
            a = deepcopy(lasta);
            b = deepcopy(lastb);
            c = deepcopy(lastc);
            sick = deepcopy(lastsick);
            production = deepcopy(lastproduction);
            waring = deepcopy(lastwearing);
            two_dates = deepcopy(lasttwo_dates);
            one_date = deepcopy(lastone_date);
            today = deepcopy(lasttoday);
            highest = deepcopy(lasthighest);
            all_fact = deepcopy(lastall_fact);
            percent = deepcopy(lastpercent);
            repeat = deepcopy(repeat);
            artyom.say("I will repeat the last sentence..");

        }




      
        // QUESTION ONE a b
        if ((a && b && !one_date && !two_dates && sick) || percent){
            artyom.say("Today there are some people sick, for factory A there are 15 people sick which is 7 percent, for the factory B its 34 which is 16 percent of the people not coming to work");
            reset();
            return 0;

        }

            // QUESTION ONE a
        if ((a && !b && !one_date && !two_dates && sick) || percent){
            artyom.say("Today there are some people sick, for factory A there are 15 people sick which is 7 percent");
            reset();
            return 0;

        }

          // QUESTION ONE b
          if ((!a && b && !one_date && !two_dates && sick) || percent){
            artyom.say("Today there are some people sick, for the factory B its 34 which is 16 percent of the people not coming to work");
            reset();
            return 0;

        }




        // QUESTION two
        if (a && !b && !c && production && highest){
            artyom.say("In this year, the month with the most produced units in factory A is May");
            reset();
            return 0;
        }


        // QUESTION three
        if (((a && b && c) || all_fact) && production && !one_date && !two_dates ){
            artyom.say("Until now, in all factory, there were 720 Units produced");
            reset();
            return 0;
        }


        // QUESTION four
        if (a && wearing && !one_date && !two_dates && highest ){
            artyom.say("The nuzzles cost today the most. I read it again slowly: nuzzles");
            reset();
            return 0;
        }
        


        // shield for loops
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
                    artyom.say(" for Factory " + temp_stack.pop() + " is " + getRandomInt(-50,50) + " " + get_half_times_a_percent_string() + ".");
                } 
            }
        }
        reset();
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
