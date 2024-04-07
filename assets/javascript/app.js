let state = "noset";
let state2 = "noset2";
let state3 = "noset3";
let state4 = "noset4";
let theam = "dark";
document.querySelector(".move-next").addEventListener("click", function () {
  if (state === "noset") {
    document.querySelector(".prpule3").textContent =
      "“Amazing service. Can’t wait to find out what’s next!”";
    state = "set";
  } else {
    document.querySelector(".prpule3").textContent =
      "“I don't know what we did before discovering Strada. Every project is a masterpiece!”";
    state = "noset";
  }
});

document.querySelector(".move-previos").addEventListener("click", function () {
  if (state2 === "noset2") {
    document.querySelector(".prpule3").textContent =
      "“I don't know what we did before discovering Strada. Every project is a masterpiece!”";
    state2 = "set2";
  } else {
    document.querySelector(".prpule3").textContent =
      "“Amazing service. Can’t wait to find out what’s next!”";
    state2 = "noset2";
  }
});

document.querySelector(".menu-close").addEventListener("click", function () {
  if (state3 === "noset3") {
    document.querySelector(".menu-responsive").style.display = "block";
    document.querySelector(".digital").style.marginTop = "100px";
    state3 = "set3";
  } else {
    document.querySelector(".menu-responsive").style.display = "none";
    document.querySelector(".digital").style.marginTop = "10px";
    state3 = "noset3";
  }
});

document.querySelector(".services").addEventListener("click", function () {
  if (state4 === "noset4") {
    document.querySelector(".abol-services").style.display = "block";
    state4 = "set4";
  } else {
    document.querySelector(".abol-services").style.display = "none";
    state4 = "noset4";
  }
});

document.querySelector(".services-ab").addEventListener("click", function () {
  if (theam === "dark") {
    document.querySelector(".menu-responsive").style.backgroundColor = "white";
    document.querySelector(".services").style.color = "black";
    document.querySelector(".ti").style.color = "black";
    document.querySelector(".ti2").style.color = "black";
    document.querySelector(".ti3").style.color = "black";
    document.querySelector(".ti4").style.color = "black";
    document.querySelector(".ti5").style.color = "black";
    document.querySelector(".ti6").style.color = "black";
    document.querySelector(".ti7").style.color = "black";
    document.querySelector(".ti8").style.color = "black";
    document.querySelector(".services-ab").style.color = "black";
    theam = 'light'
  }else{
    document.querySelector(".menu-responsive").style.backgroundColor = "rgb(45, 44, 44)";
    document.querySelector(".services").style.color = "white";
    document.querySelector(".ti").style.color = "white";
    document.querySelector(".ti2").style.color = "white";
    document.querySelector(".ti3").style.color = "white";
    document.querySelector(".ti4").style.color = "white";
    document.querySelector(".ti5").style.color = "white";
    document.querySelector(".ti6").style.color = "white";
    document.querySelector(".ti7").style.color = "white";
    document.querySelector(".ti8").style.color = "white";
    theam = 'dark'
  }
});
