"use strict";class helmetResult{constructor(){helmetResult.displayData()}static displayData(){let e="";var t;document.getElementById("day").innerText=sessionStorage.getItem("day"),document.getElementById("incidentDate").innerText=sessionStorage.getItem("date"),document.getElementById("date").innerText=sessionStorage.getItem("date"),document.getElementById("incidentTime").innerText=sessionStorage.getItem("incidentTime"),document.getElementById("lastName").innerText=sessionStorage.getItem("lastName"),document.getElementById("firstName").innerText=sessionStorage.getItem("firstName"),"Male"===sessionStorage.getItem("gender")?document.getElementById("male").checked=!0:document.getElementById("female").checked=!0,document.getElementById("age").innerText=sessionStorage.getItem("age"),document.getElementById("height").innerText=sessionStorage.getItem("height"),document.getElementById("weight").innerText=sessionStorage.getItem("weight"),"Beginner"===sessionStorage.getItem("ability")?document.getElementById("ability").innerText="Beginner":"Intermediate"===sessionStorage.getItem("ability")?document.getElementById("ability").innerText="Intermediate":"Expert"===sessionStorage.getItem("ability")&&(document.getElementById("ability").innerText="Expert"),document.getElementById("incidentDescription").innerText=sessionStorage.getItem("incidentDescription"),t=sessionStorage.getItem("whichHill")?sessionStorage.getItem("whichHill"):sessionStorage.getItem("whichLift")?sessionStorage.getItem("whichLift"):sessionStorage.getItem("location"),document.getElementById("location").innerText=t,sessionStorage.getItem("injuryType")&&(sessionStorage.getItem("injuryType").match("Fracture")&&(e+=" Fracture,"),sessionStorage.getItem("injuryType").match("Puncture")&&(e+=" Puncture,"),sessionStorage.getItem("injuryType").match("Abrasion")&&(e+=" Abrasion,"),sessionStorage.getItem("injuryType").match("Dislocation")&&(e+=" Dislocation,"),sessionStorage.getItem("injuryType").match("Sprain")&&(e+=" Sprain,"),sessionStorage.getItem("injuryType").match("Bruise")&&(e+=" Bruise,"),sessionStorage.getItem("injuryType").match("Concussion")&&(e+=" Concussion,"),sessionStorage.getItem("injuryType").match("Frostbite")&&(e+=" Frostbite,"),sessionStorage.getItem("injuryType").match("Multiple")&&(e+=" Multiple,"),sessionStorage.getItem("injuryType").match("Other")&&sessionStorage.getItem("injuryTypeOther")&&(e+=sessionStorage.getItem("injuryTypeOther"))),sessionStorage.getItem("injuryZone")&&(sessionStorage.getItem("injuryZone").match("Left")?e+=" Left,":sessionStorage.getItem("injuryZone").match("Right")?e+=" Right,":sessionStorage.getItem("injuryZone").match("Both")&&(e+=" Both,"),sessionStorage.getItem("injuryZone").match("Multiple")&&(e+=" Multiple,"),sessionStorage.getItem("injuryZone").match("UpperLeg")&&(e+=" UpperLeg,"),sessionStorage.getItem("injuryZone").match("Knee")&&(e+=" Knee,"),sessionStorage.getItem("injuryZone").match("LowerLeg")&&(e+=" LowerLeg,"),sessionStorage.getItem("injuryZone").match("Ankle")&&(e+=" Ankle,"),sessionStorage.getItem("injuryZone").match("Foot")&&(e+=" Foot,"),sessionStorage.getItem("injuryZone").match("Hip")&&(e+=" Hip,"),sessionStorage.getItem("injuryZone").match("Abdomen")&&(e+=" Abdomen,"),sessionStorage.getItem("injuryZone").match("Chest")&&(e+=" Chest,"),sessionStorage.getItem("injuryZone").match("Back")&&(e+=" Back,"),sessionStorage.getItem("injuryZone").match("Neck")&&(e+=" Neck,"),sessionStorage.getItem("injuryZone").match("Shoulder")&&(e+=" Shoulder,"),sessionStorage.getItem("injuryZone").match("Arm")&&(e+=" Arm,"),sessionStorage.getItem("injuryZone").match("Wrist")&&(e+=" Wrist,"),sessionStorage.getItem("injuryZone").match("Hand")&&(e+=" Hand,"),sessionStorage.getItem("injuryZone").match("Thumb")&&(e+=" Thumb,"),sessionStorage.getItem("injuryZone").match("Head")&&(e+=" Head,"),sessionStorage.getItem("injuryZone").match("Face")&&(e+=" Face,"),sessionStorage.getItem("injuryZone").match("Eye")&&(e+=" Eye,"),sessionStorage.getItem("injuryZone").match("Nose")&&(e+=" Nose,"),sessionStorage.getItem("injuryZone").match("Mouth")&&(e+=" Mouth,"),sessionStorage.getItem("injuryZone").match("Teeth")&&(e+=" Teeth,"),sessionStorage.getItem("injuryZone").match("Internal")&&(e+=" Internal,"),sessionStorage.getItem("injuryZone").match("Other")&&sessionStorage.getItem("injuryZoneOther")&&(e+=sessionStorage.getItem("injuryZoneOther"))),document.getElementById("injuryNature").innerText=e}}window.addEventListener("load",()=>{new helmetResult});