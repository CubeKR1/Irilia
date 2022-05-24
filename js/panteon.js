const arrGod = [
    ["eone", 'Eone, gudinden for genfødsel...'],
    ["duphin", 'Duphin, guden for havet...'],
    ["zephin", 'Zephin, gudinden for natur...'],
    ["uhthys", "Uhthys, gudinden for magi..."],
    ["dodis", "Dodis, guden for død..."],
]; // The order is: firstName, text

for (let i = 0; i < arrGod.length; i++) {
    document.getElementById(arrGod[i][0]).addEventListener("click", function() {
        document.getElementById("primgod-text").innerHTML = arrGod[i][1];
    });
};

const arrAltGod = [
    ["mørkinden", 'Mørkinden...'],
    ["våbenmageren", 'Våbenmageren...'],
    ["sjælen", 'Sjælen...'],
    ["bjergbestigeren", 'Bjergbestigeren...'],
    ["dragekongen", 'Dragekongen...'],
] // The order is: firstName, text

for (let i = 0; i < arrAltGod.length; i++) {
    document.getElementById(arrAltGod[i][0]).addEventListener("click", function() {
        document.getElementById("altgod-text").innerHTML = arrAltGod[i][1];
    });
};
