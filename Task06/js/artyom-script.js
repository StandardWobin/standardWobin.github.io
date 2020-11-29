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
            artyom.say("Allright, lets start from the beginning, what you want to know?");
    }
    function wildhandler(_wildcard) {
        if (a == null){
            console.log("update d");

            a = _wildcard.match(/((factory|plant|company) [aA]|&[aA]|and [aA]|[aA]&|np [aA])/);
        }
        if (b == null){
            console.log("update b");

            b = _wildcard.match(/((factory|plant|company) [bB]|&[bB]|and [bB]|[bB]&|np [bB])/);
        }
        if (c == null){
            console.log("update c");

            c = _wildcard.match(/((factory|plant|company) [cC]|&[cC]|and [cC]|[cC]&|np [cC])/);
        }
        if (production == null){
            console.log("update production");

            production = _wildcard.match(/(production|produced|built|products)/);
        }
        if (sick == null){
            console.log("update sick");

            sick = _wildcard.match(/(sick|ill|at home|not at work)/);
        }
        if (wearing == null){
            console.log("update wearing");

            wearing = _wildcard.match(/(wearing)/);
        }

        if (two_dates == null){
            console.log("update two dates");
            two_dates = _wildcard.match(/((January)|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month)) ?(.* ?)* ?((January)|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))/);
        }
        if (one_date == null){
            console.log("update one datessss");

            one_date = _wildcard.match(/(January|February|March|April|May|june|July|August|September|October|November|December|this month)/);
        }

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
            inner_stack.push("the amount of produced units");
        }
        if (sick){
            inner_counter = inner_counter + 1;
            inner_stack.push("the amount of sick people");
        }

        if (wearing){
            inner_counter = inner_counter + 1;
            inner_stack.push("the amount of wearing parts");
        }




        if ( !a && !b && !c && !production && !sick && !wearing && !two_dates && !one_date  ){
            artyom.say("Everything works fine");
        }

        if ( a && b && c ){
            artyom.say("It is not allowed to compare three factories");
        }


        // PASS
        if (one_date && !two_dates){
            artyom.say("For the specific date");
            let s_l =stack.length;
            for (i = 0; i < s_l; i++) {
                artyom.say("Factory " + stack.pop());

                let inner_s_l =inner_stack.length;
                let temp_stack = inner_stack;
                for (j = 0; j < inner_s_l; j++) {
                    artyom.say(temp_stack.pop() + " is " + getRandomInt(5,5000));

                    if (j != inner_s_l-1){
                        artyom.say("and");

                    }
              } 

              if (i != s_l-1){
                artyom.say("and");
            }


        }


       

        }

       





    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  /*
    function promptfactorys(_mentionedfactorys, _factoryFound = true) {
        let unmentionedfactorys = factorys.filter(_value => !_mentionedfactorys.includes(_value));
        let suggestion;
        let question;
        if (unmentionedfactorys.length > 0) {
            suggestion = suggestions1.pop();
            question = `Du hast noch ${unmentionedfactorys.length == 1 ? "einen weiteren Termin" : (unmentionedfactorys.length + " weitere Termine")}. Wenn du wissen willst was du noch vor hast `;
        }
        else {
            suggestion = suggestions2.pop();
            question = `${_factoryFound ? "" : "Das habe ich nicht Verstanden."} Wenn du genauere Informationen zu deinen Terminen haben willst `;
        }
        if (suggestion) {
            question += `sag zum Beispiel ${suggestion}.`;
        }
        else {
            question += "frag einfach nach. ";
            if (unmentionedfactorys.length == 0)
                question += "Wenn du nichts mehr Wissen willst sag einfach Stop";
        }
        artyom.newPrompt({
            question: question,
            smart: true,
            options: [
                /nächster Termin/,
                /((sonst noch)|(sonst)|(noch) vor)|(weiteren|anderen Termine)/,
                "* Termin",
                "Wo *",
                "Wann *",
                /^[Ss]topp?$/
            ],
            onMatch: (_index, _wildcard) => {
                switch (_index) {
                    case 0:
                        _mentionedfactorys.push(unmentionedfactorys[0]);
                        return () => {
                            listFactoryDetailed(unmentionedfactorys[0]);
                            promptfactorys(_mentionedfactorys);
                        };
                    case 1:
                        return () => {
                            artyom.say("Deine anderen Termine lauten: ");
                            listFactorys(unmentionedfactorys, _mentionedfactorys);
                        };
                    case 2:
                        return () => appointmentByCounter(_wildcard, _mentionedfactorys);
                    case 3:
                    case 4:
                        let askedAppointment;
                        for (const key in factorysByName) {
                            let match = _wildcard.match(key.toLocaleLowerCase());
                            if (match) {
                                console.log(match);
                                askedAppointment = factorysByName[key];
                                break;
                            }
                        }
                        if (askedAppointment) {
                            _mentionedfactorys.push(askedAppointment);
                            return () => {
                                artyom.say(`Dein Termin ${askedAppointment.name} findet ${_index == 3 ? `in ${askedAppointment.location}` : `um ${askedAppointment.time} Uhr`} statt`);
                                promptfactorys(_mentionedfactorys);
                            };
                        }
                        else {
                            return () => {
                                promptfactorys(_mentionedfactorys, false);
                            };
                        }
                    default:
                        return () => {
                            artyom.say("Okay ich hoffe ich konnte dir behilflich sein");
                        };
                }
            }
        });
    }
    function mapfactorys() {
        factorysByName = {};
        for (const facto of factorys) {
            factorysByName[facto.name] = facto;
        }
    }*/
});
//# sourceMappingURL=artyom-script.js.map