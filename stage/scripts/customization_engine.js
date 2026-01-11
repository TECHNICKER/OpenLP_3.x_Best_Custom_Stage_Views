//dark mode switch
if (dark === 1) document.body.classList.add("dark")
if (dark === 0) document.body.classList.remove("dark")

//font size adjustment
let verseorder = document.getElementById("verseorder")
let clock = document.getElementById("clock")
let leftside = document.getElementById("leftside")
let rightside = document.getElementById("rightside")

leftside.style.fontSize = clock.style.fontSize = (4*(size/100)).toFixed(1) + "vw"
rightside.style.fontSize = verseorder.style.fontSize = (3*(size/100)).toFixed(1) + "vw"