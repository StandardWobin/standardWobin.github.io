window.addEventListener("load", function () {
    const artyom = new Artyom();
    let factorys = [
        {
            name: "A",
            sick: "9",
            production: "234",
            date: "12.12.2020"
        },
        {
            name: "B",
            sick: "12",
            production: "234324",
            date: "12.12.2020"

        },
        {
            name: "C",
            sick: "15",
            production: "234324",
            date: "12.12.2020"

        }    
    ];
    let factorysByName;
    let suggestions1 = [
        "'Was habe ich noch vor'",
        "'Wie lautet mein dritter Termin'",
        "'Wie lautet mein nächster Termin'"
    ];
    let suggestions2 = [
        `'Wann findet ${factorys[0].name} statt?'`,
        `'Wo findet ${factorys[1].name} statt?'`
    ];




    // two factories AB and two dates
    artyom.addCommands({
        description: "2F2D ab",
        indexes: [/factory [aAbB]( and |&)(the )?(other )?(factory )?[aAbB]( from )?(the )?((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))(.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a and b and two dates", _wildcard)
        }
    });
    // two factories AB and two dates
    artyom.addCommands({
        description: "2F2D ac",
        indexes: [/factory [aACc]( and |&)(the )?(other )?(factory )?[aACc]( from )?(the )?((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))(.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a and c and two dates", _wildcard)
        }
    });

    // two factories AB and two dates
    artyom.addCommands({
        description: "2F2D bc",
        indexes: [/factory [bBcC]( and |&)(the )?(other )?(factory )?[bBcC]( from )?(the )?((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))(.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)|(this month))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories b and c and two dates", _wildcard)
        }
    });
    

     // two factories and one date
     artyom.addCommands({
        description: "2F1D a b",
        indexes: [/factory [aAbB]( and |&)(the )?(other )?(factory )?[bBaA] (.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(this month)|(September)|(October)|(November)|(this month)|(December))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a b and one date", _wildcard)
        }
    });
      // two factories and one date
      artyom.addCommands({
        description: "2F1D a c",
        indexes: [/factory [aAcC]( and |&)(the )?(other )?(factory )?[aAcC] (.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(this month)|(September)|(October)|(November)|(this month)|(December))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a c and one date", _wildcard)
        }
    });
      // two factories and one date
      artyom.addCommands({
        description: "2F1D b c",
        indexes: [/factory [cCbB]( and |&)(the )?(other )?(factory )?[cCbB] (.* ?)*((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(this month)|(September)|(October)|(November)|(this month)|(December))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories b c and one date", _wildcard)
        }
    });

   
    // two factories
    artyom.addCommands({
        description: "2F a b",
        indexes: [/factory [aAbB]( and |&)(the )?(other )?(factory )?[aAbB]/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a b", _wildcard)
        }
    });
    // two factories
    artyom.addCommands({
        description: "2F a c",
        indexes: [/factory [aAcC]( and |&)(the )?(other )?(factory )?[aAcC]/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories a c", _wildcard)
        }
    });
    // two factories
    artyom.addCommands({
        description: "2F b c",
        indexes: [/factory [bBcC]( and |&)(the )?(other )?(factory )?[bBcC]/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two factories b c", _wildcard)
        }
    });

      // two dates
      artyom.addCommands({
        description: "2D",
        indexes: [/((January )|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December))(.* ?)*((January )|(February)|(this month)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(this month)|(December))/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("you want to see two dates", _wildcard)
        }
    });

    
    artyom.addCommands({
        description: "overview",
        indexes: [/overview/, /everything/],
        smart: true,
        action: function (_i, _wildcard) {
            console.log("overview", _wildcard)
        }
    });


    mapfactorys();
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
    function listFactorys(_unmentionedfactorys, _mentionedfactorys = []) {
        console.log(_unmentionedfactorys);
        for (const appointment of _unmentionedfactorys) {
            _mentionedfactorys.push(appointment);
            listFactory(appointment);
        }
        promptfactorys(_mentionedfactorys);
    }
    function listFactory(_factory) {
        artyom.say("In factory " + _factory.name + " there are " + _factory.sick + " people sick and " + _factory.production + " parts has been done today");
    }
    function listFactoryDetailed(_factory, time = true, location = true) {
        artyom.say(_factory.name);
        artyom.say("um " + _factory.time + " Uhr");
        artyom.say("in " + _factory.location);
    }
    function appointmentByCounter(_wildcard, _mentionedfactorys = []) {
        let askedAppointment;
        let appointmentNumber;
        let appointmentCounter = [
            "erster",
            "zweiter",
            "dritter",
            "vierter",
            "fünfter",
            "sechster",
            "siebter",
            "achter",
            "neunter",
            "zehnter"
        ];
        for (const key in appointmentCounter) {
            if (_wildcard.match(appointmentCounter[key])) {
                appointmentNumber = appointmentCounter[key];
                askedAppointment = factorys[key];
                break;
            }
        }
        if (!askedAppointment) {
            if (_wildcard.match("letzter")) {
                appointmentNumber = "letzter";
                askedAppointment = factorys[factorys.length - 1];
            }
            else if (appointmentNumber) {
                artyom.say(`Ein ${appointmentNumber} Termin steht heute nicht auf dem Plan`);
                promptfactorys(_mentionedfactorys);
                return;
            }
        }
        if (askedAppointment) {
            _mentionedfactorys.push(askedAppointment);
            artyom.say(`Dein ${appointmentNumber} Termin lautet: `);
            listFactoryDetailed(askedAppointment);
        }
        else {
            artyom.say("Das habe ich nicht Verstanden.");
        }
        promptfactorys(_mentionedfactorys);
    }
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
    }
});
//# sourceMappingURL=artyom-script.js.map