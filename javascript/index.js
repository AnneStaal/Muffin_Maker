/* ----------------------------------- pagina's wisselen ----------------------------------- */
const kokGekozen = document.getElementById("kokKies");
const muffinGekozen = document.getElementById("muffinKies");
const beslagGekozen = document.getElementById("beslagKies");
const ovenAan = document.getElementById("oven");
const slagroomGekozen = document.getElementById("slagroomKies");
const sprinkelsGekozen = document.getElementById("sprinkelsKies");
const eindButton = document.getElementById("eindButton");

/* ----------------------------------- extra's ----------------------------------- */
const ovenGeluid = new Audio("sounds/oven_timer.mp3");
const muffinGif = document.getElementById("muffinGif")

/* ----------------------------------- verschillende opties ----------------------------------- */
const muffinVormButton1 = document.getElementById("muffinVormButton1");
const muffinVormButton2 = document.getElementById("muffinVormButton2");
const muffinVormButton3 = document.getElementById("muffinVormButton3");
const muffinVormButton4 = document.getElementById("muffinVormButton4");
const muffinVormGekozenAfbeelding = document.getElementById("muffinVormGekozenAfbeelding");

const muffinOvenGekozenAfbeelding = document.getElementById("muffinOvenGekozenAfbeelding");

const muffinBeslagButton1 = document.getElementById("muffinBeslagButton1");
const muffinBeslagButton2 = document.getElementById("muffinBeslagButton2");
const muffinBeslagButton3 = document.getElementById("muffinBeslagButton3");
const muffinBeslagButton4 = document.getElementById("muffinBeslagButton4");
const beslagGekozenAfbeelding = document.getElementById("beslagGekozenAfbeelding");

const muffinSlagroomButton1 = document.getElementById("muffinSlagroomButton1");
const muffinSlagroomButton2 = document.getElementById("muffinSlagroomButton2");
const muffinSlagroomButton3 = document.getElementById("muffinSlagroomButton3");
const muffinSlagroomButton4 = document.getElementById("muffinSlagroomButton4");
const slagroomGekozenAfbeelding = document.getElementById("slagroomGekozenAfbeelding");

const muffinSprinkelsButton1 = document.getElementById("muffinSprinkelsButton1");
const muffinSprinkelsButton2 = document.getElementById("muffinSprinkelsButton2");
const sprinkelsGekozenAfbeelding = document.getElementById("sprinkelsGekozenAfbeelding");

let muffinVorm; 
let beslag;
let slagroom;
let sprinkles;

/* ----------------------------------- extra's ----------------------------------- */
let time = 0;

/* ----------------------------------- wisselen van pagina na klikken ----------------------------------- */
/* Chat Gpt
Hoe krijg ik het voor elkaar om met javascript de ene sectie weg te halen en een andere te voor schijn krijgen? */ 
function wisselselectieKok(){
    document.getElementById("kokKeuze").style.display = "none";
    document.getElementById("muffinKeuze").style.display = "block";
}

function wisselselectieMuffin(){
    document.getElementById("muffinKeuze").style.display = "none";
    document.getElementById("beslagKeuze").style.display = "block";
}

function wisselselectieBeslag(){
    document.getElementById("beslagKeuze").style.display = "none";
    document.getElementById("oven").style.display = "block";
    ovenGeluid.play();
    let teller = setInterval(() =>{
        time =+ 10;

        if( time = 5000){
            clearInterval(teller);
            document.getElementById("oven").style.display = "none";
            document.getElementById("slagroomKeuze").style.display = "block";
        } else{
            time =+ 10;
        }
    },3500);
}

function wisselselectieSlagroom(){
    document.getElementById("slagroomKeuze").style.display = "none";
    document.getElementById("sprinkelsKeuze").style.display = "block";
}

function wisselselectieSprinkels(){
    document.getElementById("sprinkelsKeuze").style.display = "none";
    document.getElementById("eindKeuze").style.display = "block";
    laatGIFZien();
}

function wisselselectieOpnieuw(){
    document.getElementById("eindKeuze").style.display = "none";
    document.getElementById("kokKeuze").style.display = "block";
}

/* ----------------------------------- afbeeldingen veranderen na keuze ----------------------------------- */
function kiesMuffinVorm(muffinVormKleur) {
    muffinVorm = muffinVormKleur;
    muffinVormGekozenAfbeelding.src = "images/" + muffinVormKleur + ".png";
}
function kiesMuffinOven(muffinVorm) {
    muffinOvenGekozenAfbeelding.src = "images/" + muffinVorm + "_oven.png";
}
function kiesMuffinBeslag(muffinVorm, muffinBeslag) {
    beslag = muffinBeslag;
    beslagGekozenAfbeelding.src = "images/" + muffinVorm + "_" + muffinBeslag + ".png";
}
function kiesMuffinSlagroom(muffinVorm, beslag, muffinSlagroom) {
    slagroom = muffinSlagroom;
    slagroomGekozenAfbeelding.src = "images/" + muffinSlagroom + "/" + muffinVorm + "_" + beslag + "_" + muffinSlagroom + ".png";
}
function kiesMuffinSprinkels(muffinVorm, beslag, slagroom, sprinkelsGekozen) {
    sprinkles = sprinkelsGekozen
    sprinkelsGekozenAfbeelding.src ="images/" + slagroom + "/" + sprinkelsGekozen + "/" + muffinVorm + "_" + beslag + "_" + slagroom + "_" + sprinkelsGekozen+ ".png";
}

/* ----------------------------------- extra's ----------------------------------- */
function laatGIFZien(){
    muffinGif.style.display = "block";
    let teller = setInterval(() =>{
        time =+ 10;

        if( time = 5000){
            muffinGif.style.display = "none";
            clearInterval(teller);
        } else{
            muffinGif.style.display = "block";
            time =+ 10;
        }
    },5000);
}

/* ----------------------------------- eventlisteners van verschillende keuzes ----------------------------------- */
muffinVormButton1.addEventListener("click", () => {
    kiesMuffinVorm("bruin");
});
muffinVormButton2.addEventListener("click", () => {
    kiesMuffinVorm("rood");
});
muffinVormButton3.addEventListener("click", () => {
    kiesMuffinVorm("sierlijk");
});
muffinVormButton4.addEventListener("click", () => {
    kiesMuffinVorm("streep");
});

muffinVormButton1.addEventListener("click", () => {
    kiesMuffinOven("bruin");
});
muffinVormButton2.addEventListener("click", () => {
    kiesMuffinOven("rood");
});
muffinVormButton3.addEventListener("click", () => {
    kiesMuffinOven("sierlijk");
});
muffinVormButton4.addEventListener("click", () => {
    kiesMuffinOven("streep");
});

muffinBeslagButton1.addEventListener("click", () => {
    kiesMuffinBeslag(muffinVorm, "choco");
});
muffinBeslagButton2.addEventListener("click", () => {
    kiesMuffinBeslag(muffinVorm, "vanille");
});
muffinBeslagButton3.addEventListener("click", () => {
    kiesMuffinBeslag(muffinVorm, "aardbei");
});
muffinBeslagButton4.addEventListener("click", () => {
    kiesMuffinBeslag(muffinVorm, "wortel");
});

muffinSlagroomButton1.addEventListener("click", () => {
    kiesMuffinSlagroom(muffinVorm, beslag, "aardbei");
});
muffinSlagroomButton2.addEventListener("click", () => {
    kiesMuffinSlagroom(muffinVorm, beslag,"choco");
});
muffinSlagroomButton3.addEventListener("click", () => {
    kiesMuffinSlagroom(muffinVorm, beslag, "vanille");
});
muffinSlagroomButton4.addEventListener("click", () => {
    kiesMuffinSlagroom(muffinVorm, beslag);
});

muffinSprinkelsButton1.addEventListener("click", () => {
    kiesMuffinSprinkels(muffinVorm, beslag, slagroom, "sprinkles");
});
muffinSprinkelsButton2.addEventListener("click", () => {
    kiesMuffinSprinkels(muffinVorm, beslag, slagroom);
});

/* ----------------------------------- eventlisteners van pagina wisselen ----------------------------------- */
kokGekozen.addEventListener("click", wisselselectieKok);
muffinGekozen.addEventListener("click", wisselselectieMuffin);
beslagGekozen.addEventListener("click", wisselselectieBeslag);
slagroomGekozen.addEventListener("click", wisselselectieSlagroom);
sprinkelsGekozen.addEventListener("click", wisselselectieSprinkels);
eindButton.addEventListener("click", wisselselectieOpnieuw);


