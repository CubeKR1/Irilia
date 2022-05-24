let circleContinent = document.getElementsByClassName("dot-continent");
let buttonMainContinent = document.getElementsByClassName("button-continent");
let rectangleContinent = document.getElementsByClassName("button");
let triangleContinent = document.getElementsByClassName("triangle");
let buttonContinent = document.getElementsByClassName("button");
let cutoutContinent = document.getElementsByClassName("cutout");
let wrapContinent = document.getElementsByClassName("wrap-dot")

for (let i = 0; i < circleContinent.length; i++) {
    circleContinent[i].addEventListener("mouseover", function() {
        buttonMainContinent[i].style.transform = "translateY(100px)";
        buttonContinent[i].style.background = "rgb(125, 131, 131)";
        triangleContinent[i].style.background = "rgb(125, 131, 131)";  
        buttonMainContinent[i].style.zIndex = "3";
        buttonMainContinent[i].style.visibility = "visible";
        wrapContinent[i].style.transform = "translateX(-53.5px)";
        circleContinent[i].style.transform = "translateY(-50px)";
        circleContinent[i].style.width = "125px";
        circleContinent[i].style.height = "125px";
        circleContinent[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }); 
    buttonMainContinent[i].addEventListener("mouseover", function() {
        buttonMainContinent[i].style.transform = "translateY(100px)";
        buttonContinent[i].style.background = "rgb(125, 131, 131)";
        triangleContinent[i].style.background = "rgb(125, 131, 131)";  
        buttonMainContinent[i].style.zIndex = "3";
        buttonMainContinent[i].style.visibility = "visible";
        wrapContinent[i].style.transform = "translateX(-53.5px)";
        circleContinent[i].style.transform = "translateY(-50px)";
        circleContinent[i].style.width = "125px";
        circleContinent[i].style.height = "125px";
        circleContinent[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    });
    circleContinent[i].addEventListener("mouseout", function() {
        buttonMainContinent[i].style.transform = "translateY(0px)";
        triangleContinent[i].style.background = "rgba(0, 0, 0, 0)";
        buttonContinent[i].style.background = "rgba(0, 0, 0, 0)";
        buttonMainContinent[i].style.visibility = "hidden";
        wrapContinent[i].style.transform = "translateX(0px)";
        circleContinent[i].style.transform = "translateY(0px)";
        circleContinent[i].style.width = "12px";
        circleContinent[i].style.height = "12px";
        circleContinent[i].style.backgroundColor = "rgb(125, 131, 131)";
    });
    buttonMainContinent[i].addEventListener("mouseout", function() {
        buttonMainContinent[i].style.transform = "translateY(0px)";
        triangleContinent[i].style.background = "rgba(0, 0, 0, 0)";
        buttonContinent[i].style.background = "rgba(0, 0, 0, 0)";
        buttonMainContinent[i].style.visibility = "hidden";
        wrapContinent[i].style.transform = "translateX(0px)";
        circleContinent[i].style.transform = "translateY(0px)";
        circleContinent[i].style.width = "12px";
        circleContinent[i].style.height = "12px";
        circleContinent[i].style.backgroundColor = "rgb(125, 131, 131)";
    });
};