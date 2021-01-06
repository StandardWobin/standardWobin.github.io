
<h1>Low Budget Evoting System</h1>

Ein E-Voting System lässt ein Publikum mit Hilfe von elektronischer Technik abstimmen. (z.B. der Publikumsjoker bei Wer wird Millionär).
Professionelle E-Voting Systeme sind mietbar. Dann allerdings relativ teuer und man hat wenig Einfluss auf die Datenübertragung. Möchte man spezielle Task wie mehrmals drücken pro Poll oder andere Zeit abhängigen Sachen implementieren muss man selbst ein E Voting System bauen. Die Schwierigkeit hierbei ist es mit wenig Geld ein möglichst Großes Publikum abstimmen lassen zu können. Im Folgenden wird kurz eine Technik erklärt wie man das Publikum abstimmen lässt und dann eine Formel gezeigt wie man die Kosten berechnet. 

<h2>1.	Technik</h2>
Zu Grunde liegt es ESP32 welcher mit USB Strom bekommt und 9 Kapazitive Sensoren hat. Jeder einzelne dieser Sensoren kann ein Touch Knopf auslesen. Jeder dieser Knöpfe besteht aus einem Kabel und einem Stück Metall (vielleicht noch einem Wiederstand). Der ESP32 registriert den Knopfdruckt und sendet über den eingebauten WIFI Chip ein http request an einen Server. Dieser Server sorgt dann für eine Persistenz welche von einem Plotter Programm ausgelesen und dargestellt wird. 

Prototyp:
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 



<h2>2.	Kosten</h2> 

E sind die Kosten des ESP’S
A sind die Auswahlmöglichkeiten pro ZuschauerInnen. 
N ist die Publikumsgröße

Dann ergeben sich aus (N * A / 8 * E) die Kosten für die ESP
Aus N * A * 0.20 die Kosten für die Knöpfe und Klebeband
Und aus (N * A / 8) *  0.50 die Kosten für die Stromversorgung pro ESP

    Kosten  = (N * A / 8 * E) + N * A * 0.20 + (N * A / 8) *  0.50

Was bei N = 240, A = 2, und E = 3 einen Kostenanschaffung von ca. 306 € darstellt








[back](/index.md)
 
 
