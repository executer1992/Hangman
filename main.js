function nicknameFunction(){
nick=document.getElementById("usr").value;
document.getElementById("nick").innerHTML = nick;
document.getElementById("nick").style.textAlign = "center";
};
let goBackFromMultiplayer = () =>{
  let back =document.getElementById("multiplayer");
  back.classList.add('display-none');
  let goingBack=document.getElementById('intro');
  goingBack.classList.remove('display-none');
}
let goBackFromCategory = () => {
  let backCategory = document.getElementById("category");
  backCategory.classList.add('display-none');
  let goingBack=document.getElementById('intro');
  goingBack.classList.remove('display-none');
}
let goBackFromLearning = () =>{
  let backLearning = document.getElementById("learning");
  backLearning.classList.add('display-none');
  let goingBackFromLearning=document.getElementById('intro');
  goingBackFromLearning.classList.remove('display-none');
}

let tutorial = () => {
  let learning =document.getElementById("intro");
  learning.classList.add('display-none');
  let learningSection=document.getElementById('learning');
  learningSection.classList.remove('display-none');
};
/* Function Tooglig show/hide defintions of words in category in tutorial */
let showHistoria = () =>{
  $("#historia-words").toggleClass("display-show",);
}
let showBiologia = () =>{
  $("#biologia-words").toggleClass("display-show",);
}
let showChemia = () =>{
  $("#chemia-words").toggleClass("display-show",);
}
let showSport = () =>{
  $("#sport-words").toggleClass("display-show",);
}
let showInformatyka = () =>{
  $("#informatyka-words").toggleClass("display-show",);
}
let showFizyka = () =>{
  $("#fizyka-words").toggleClass("display-show",);
}
function singleFunction(){
  let single =document.getElementById("intro");
  single.classList.add('display-none');
  let category=document.getElementById('category');
  category.classList.remove('display-none');
};
function multiFunction(){
  let single =document.getElementById("intro");
  single.classList.add('display-none');
  let category=document.getElementById('multiplayer');
  category.classList.remove('display-none');

}
/* Wybieranie Kategori,losowanie hasla i rozpoczecie gry */
function multiplayerFunction(){
  let multiSekcja=document.getElementById('multiplayer');
  multiSekcja.classList.add('display-none')
  let game=document.getElementById('game-container');
  game.classList.remove('display-none');
  multiHaslo=document.getElementById("myTextarea").value;
  multiHaslo=multiHaslo.replace(/[A-ZĄĆĘŁŃÓŚŹŻ]{4,}/g, "");
  haslo = multiHaslo.toUpperCase();
  dlugosc = haslo.length;
  console.log(haslo);
  start();
}

/* Funkcje czasowe */

function timeStartFunction(){
timeStart= new Date();
minutyStart = timeStart.getMinutes();
sekundyStart = timeStart.getSeconds();
}
function timeEndFunction(){
timeEnd= new Date();
minutyEnd = timeEnd.getMinutes();
sekundyEnd = timeEnd.getSeconds();
}
function timeOverallFunction(){
  if (sekundyEnd < sekundyStart){
  czasS = sekundyEnd - sekundyStart;
  x = time_overall-Math.abs(czasS);
  czasM = (minutyEnd - minutyStart) - 1;}
else{
    x = sekundyEnd - sekundyStart;
    czasM = minutyEnd - minutyStart;
  }
}

/* Funkcje ktore rozpoczynają grę po wybraniu kategori i tworzą haslo*/

function biologiaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = biologiaArray[Math.floor(biologiaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "biologia";
start();
}
function historiaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = historiaArray[Math.floor(historiaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "historia";
start();
}

function muzykaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = muzykaArray[Math.floor(muzykaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "muzyka";
start();
}

function sportFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = sportArray[Math.floor(sportArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "sport";
start();
}

function informatykaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = informatykaArray[Math.floor(informatykaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "informatyka";
start();
}

function chemiaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = chemiaArray[Math.floor(chemiaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "chemia";
start();
}
function fizykaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = fizykaArray[Math.floor(fizykaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "fizyka";
start();
}

function filmografiaFunction(){
  let historia=document.getElementById('category');
  historia.classList.add('display-none')
  let game=document.getElementById('game-container');
game.classList.remove('display-none');
haslo = filmografiaArray[Math.floor(filmografiaArray.length*Math.random())].toUpperCase();
dlugosc = haslo.length;
background = "filmy";
start();
}
/* Tablice hasel */
let hasloArray = ["Tak krawiec kraje JAK mu materiał staje","będą takie mrozy że przymarznie cap do kozy","gadał dziad do obrazu a obraz doń ani razu","prehistotia","świat według kiepskich ","malkontent","Zbigniew Boniek","Wojciech fortuna", "Bez pracy nie ma kołaczy", "kwas acetylosalicylowy", "Prestidigitator", "Wyindywidualizowany", "Bory Tucholskie", "kosmogonia", "dźwiękonaśladownictwo", "pięćdziesięciogroszówka", "telekomunikacja", "deoksyrybonukleinowy", "anatomopatologiczny", "luminescencja", "malkontenctwo", "lumpenproletariat", "kolorowanka", "gżegżółka", "Sri Dźajawardanapura Kotte", "encyklopedycznie", "Arachnofobia"];
let historiaArray = ["epoka hellenistyczna", "Nicholas Hammond", "Jerzy Manteuffel", "Cesarstwo Bizantyńskie", "wielka schizma wschodnia", "Aleksander Macedoński", "Napoleon Bonaparte", "ABSOLUTYZM OŚWIECONY", "Gloria Victris", "Bitwa pod Termopile i Salaminą", "Traktat w Verdun", "Pokój w Budziszynie", "Mezopotoamia", "Powstanie Kościuszkowskie", "Utworzenie Księstwa Warszawskiego", "Hołd Pruski", "Unia brzeska", "Powstanie Warszawskie", "cezaropapizm",
"elekcja viritim", "industrializacja", "Dwudziestolecie międzywojenne", "Władysław I Łokietek", "Ludwik Węgierski", "Jadwiga Andegaweńska", "Aleksander Jagiellończyk", "Henryk Walezy", "Anna Jagiellonka", "Michał Korybut Wiśniowiecki", "Stanisław Leszczyński", "Stanisław August Poniatowski"];
let fizykaArray = ["elektrodynamika klasyczna", "stała Boltzmanna", "transformacja Lorentza", "hamiltonian", "Mechanika Hamiltona", "oscylator harmoniczny", "perpetuum mobile", "Prawo Faradaya", "Zasady dynamiki Newtona", "Sito Eratostenesa", "Widmo optyczne", "Eksperyment Galileusza", "Wahadło Foucaulta", "Ładunek elektryczny", "Mechanika Kwantowa", "teoria czasoprzestrzeni i ruchu", "elektrodynamika", "Entropia mikroskopowa",
"Suma Statystyczna"];
let sportArray = ["W zdrowym ciele zdrowy duch","Wojciech fortuna", "Muhammad Ali", "Michael Phelps", "Lewis Hamilton", "Floyd Mayweather Jr", "Michael Schumacher", "Łyżwiarstwo figurowe", "Zapasy wielbłądów", " Wielobój kulturystyczny", "Tchoukball", "Wyścigi psich zaprzęgów", "Bayern Monachium", "manchester united", "Jagiellonia Białystok", "Pogoń Szczecin", "Tottenham Hotspur", "Los Angeles Clippers", "San Antonio Spurs",
"Boston Celtics"];
let muzykaArray = ['Bohemian Rhapsody', "There Is A Light That Never Goes Out", 'I Bet You Look Good On The Dancefloor', 'Smells Like Teen Spirit', "Welcome To The Jungle", "Knockin On Heavens Door", "Nothing Else Matters", "Stanisław Moniuszko", "Ludwig van Beethoven", "Wolfgang Amadeusz Mozart", "Jan Sebastian Bach"];
let informatykaArray = ["Teleinformatyka", "Rejestr procesora", "Bluetooth", "Tryb wsadowy", "interpolacja dwuliniowa", "abstrakcja danych", "Partycja", "jądro systemu graficznego", "Baza danych", "Metadane", "Kryptologia", "Drukarka mozaikowa", "Protokół transferu pliku", "Złośliwe oprogramowanie"];
let biologiaArray = ["Aorta brzuszna", "	Bilans kwasowo zasadowy", "Frekwencja alleli", "Amoksycylina", "Wzrost drobnoustrojów", "Biologiczne sprzężenie zwrotne", "Krzepnięcie krwi", "Naczynie krwionośne", "Aberracja chromosomowa", "Alkaloza wyrównana", "Współczynnik strawności", "Allel dominujący", "Aminokwasy endogenne", "Gruczoł egzokrynny", "Antygeny zgodności tkankowej", "Niedoczynność tarczycy"
, "Alkaloza metaboliczna"];
let chemiaArray = ["Kwas deoksyrybonukleinowy", "fermentacja", "Enzymy", "Skala Hounsfielda", "Reaktor chemiczny", "Mikrosegregacja", "skraplacz bocznikowy", "nasycanie ditlenkiem węgla", "sprężarka odśrodkowa", "Operacja jednostkowa", "temperatura końcowa destylacji", "równowaga dynamiczna", "wytrzymałość zmęczeniowa", "Flotacja", "odparowanie rzutowe", "wrzenie warstewkowe", "szybkość wiązania", "spalanie bezpłomieniowe", "kondensacja frakcjonowana",
"przepuszczalność gazu"];
let filmografiaArray = ["świat według kiepskich ", "Clint Eastwood", "Casablanca", "Robert De Niro", "Przeminęło z wiatrem", "Lista Schindlera", "Czarnoksiężnik z krainy Oz", "Lot nad kukułczym gniazdem", "Bonnie i Clyde", "Ich noce", "Jack Nicholson", "Morgan Freeman", "Anthony Hopkins", "Jodie Foster", "Marilyn Monroe", "Arnold Schwarzenegger", ];

let multiHaslo = "";
let ile_skuch = 0;
let nick = "";
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
let timeStart= 0;
let minutyStart = 0;
let sekundyStart = 0;
let timeEnd= 0;
let minutyEnd = 0;
let sekundyEnd = 0;
let haslo1 = "";
let czasS = 0;
let czasM = 0;
let x = 0;
let time_overall = 60;
let background = "";

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}


let litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
  switch (background){
    case "chemia":
    $("#game-container").addClass("chemiaBackground");
    break;
    case "sport":
    $("#game-container").addClass("sportBackground");
    break;
    case "fizyka":
      $("#game-container").addClass("fizykaBackground");
      break;
    case "informatyka":
      $("#game-container").addClass("informatykaBackground");
      break;
    case "muzyka":
      $("#game-container").addClass("muzykaBackground");
      break;
    case "biologia":
      $("#game-container").addClass("biologiaBackground");
      break;
    case "filmy":
      $("#game-container").addClass("filmyBackground");
      break;
    case "historia":
      $("#game-container").addClass("historiaBackground");
      break;
      default:
        $("#game-container").addClass("multiBackground");
  }
  timeStartFunction();
  console.log(minutyStart);
  console.log(sekundyStart);
  for (i=0; i<dlugosc; i++)
  {
  	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " " ;
  	else haslo1 = haslo1 + "-";
  }

	let tresc_diva ="";

	for (i=0; i<=34; i++)
	{
		let element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;


	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{

	let trafiona = false;

	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}

	if(trafiona == true)
	{
		yes.play();
		let element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";

		wypisz_haslo();
	}
	else
	{
		no.play();
		let element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");

		//skucha
		ile_skuch++;
		let obraz = ["http://res.cloudinary.com/dinwmdlb9/image/upload/v1503591971/s0.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503591975/s1.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592016/s2.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592019/s3.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592022/s4.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592025/s5.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592028/s6.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592031/s7.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592034/s8.jpg", "http://res.cloudinary.com/dinwmdlb9/image/upload/v1503592036/s9.jpg"];
 let grafika = obraz[ile_skuch];
		document.getElementById("szubienica").innerHTML = '<img src="'+grafika+'" alt="" />';
	}

	//wygrana
	if (haslo == haslo1)

	document.getElementById("alfabet").innerHTML  = "Brawo "+nick+ "! Udało Ci się odgadnąć nasze hasło :) - "+haslo+  " Twoj czas to : " +czasM+ "m. i " +x+ "s." + '<br /><br /><span class="reset" onclick="location.reload(false)">JESZCZE RAZ?</span>';
  timeEndFunction();
  timeOverallFunction();
	//przegrana
	if (ile_skuch>=9)

	document.getElementById("alfabet").innerHTML  = "Niestety "+nick+ " Nie udało Ci się odgagnąć hasła :( - "+haslo+ " Twoj czas to : " +czasM+ "m. i " +x+ "s." + '<br /><br /><span class="reset" onclick="location.reload(false)">JESZCZE RAZ?</span>';
}
