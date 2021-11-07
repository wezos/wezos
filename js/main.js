    var setting = document.getElementById("sett");
    var bg = document.getElementById("bg");

function Settings() {
    document.getElementById("sett").style.display = "block";
    bg.style.display = "block";
}

function closesett() {
    document.getElementById("sett").style.display = "none";
    bg.style.display = "none";
}

function Save() {
    var bg1 = document.getElementById("clr1").value;
    var bg2 = document.getElementById("clr2").value;
    var background = document.getElementById("cbg");

    background.style.background = "linear" + "" + clr1 + "" + clr2;
}