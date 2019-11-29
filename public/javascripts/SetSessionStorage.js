"use strict";export default class SetSessionStorage{constructor(){SetSessionStorage.saveData()}static saveData(){sessionStorage.setItem("day",document.getElementById("day").value),sessionStorage.setItem("date",document.getElementById("date").value),sessionStorage.setItem("incidentTime",document.getElementById("incidentTime").value),sessionStorage.setItem("lastName",document.getElementById("lastName").value),sessionStorage.setItem("firstName",document.getElementById("firstName").value),document.getElementById("genderF").checked?sessionStorage.setItem("gender",document.getElementById("genderF").value):document.getElementById("genderM").checked&&sessionStorage.setItem("gender",document.getElementById("genderM").value),sessionStorage.setItem("dob",document.getElementById("dob").value),sessionStorage.setItem("age",document.getElementById("age").value),sessionStorage.setItem("height",document.getElementById("height").value),sessionStorage.setItem("weight",document.getElementById("weight").value),sessionStorage.setItem("patientStreet",document.getElementById("patientStreet").value),sessionStorage.setItem("patientCity",document.getElementById("patientCity").value),sessionStorage.setItem("patientState",document.getElementById("patientState").value),sessionStorage.setItem("patientZip",document.getElementById("patientZip").value),sessionStorage.setItem("email",document.getElementById("email").value),sessionStorage.setItem("occupation",document.getElementById("occupation").value),sessionStorage.setItem("homePhoneNum",document.getElementById("homePhoneNum").value),sessionStorage.setItem("cellPhoneNum",document.getElementById("cellPhoneNum").value),sessionStorage.setItem("priorInjury",document.getElementById("priorInjury").value),sessionStorage.setItem("yearInjured",document.getElementById("yearInjured").value),document.getElementById("hiYes").checked?sessionStorage.setItem("hi",document.getElementById("hiYes").value):document.getElementById("hiNo").checked&&sessionStorage.setItem("hi",document.getElementById("hiNo").value),sessionStorage.setItem("meds",document.getElementById("meds").value),sessionStorage.setItem("ticketType",document.getElementById("ticketType").value),sessionStorage.setItem("group",document.getElementById("group").value),document.getElementById("locationLift").checked?(sessionStorage.setItem("location",document.getElementById("locationLift").value),sessionStorage.setItem("locationLift",document.getElementById("locationLift").value),sessionStorage.setItem("whichLift",document.getElementById("whichLift").options[document.getElementById("whichLift").selectedIndex].value)):document.getElementById("locationHill").checked?(sessionStorage.setItem("location",document.getElementById("locationHill").value),sessionStorage.setItem("locationHill",document.getElementById("locationHill").value),sessionStorage.setItem("whichHill",document.getElementById("whichHill").options[document.getElementById("whichHill").selectedIndex].text),sessionStorage.setItem("difficulty",document.getElementById("whichHill").options[document.getElementById("whichHill").selectedIndex].value)):document.getElementById("locationPremise").checked&&sessionStorage.setItem("location",document.getElementById("locationPremise").value),sessionStorage.setItem("specificLocation",document.getElementById("specificLocation").value),document.getElementById("abilityBeginner").checked?sessionStorage.setItem("ability",document.getElementById("abilityBeginner").value):document.getElementById("abilityIntermediate").checked?sessionStorage.setItem("ability",document.getElementById("abilityIntermediate").value):document.getElementById("abilityExpert").checked?sessionStorage.setItem("ability",document.getElementById("abilityExpert").value):sessionStorage.setItem("ability",document.getElementById("abilityNA").value),document.getElementById("lessonYes").checked?(sessionStorage.setItem("inLesson",document.getElementById("lessonYes").value),sessionStorage.setItem("instructor",document.getElementById("instructor").value)):document.getElementById("lessonNo").checked&&sessionStorage.setItem("inLesson",document.getElementById("lessonNo").value),document.getElementById("timesLift").checked?sessionStorage.setItem("timesWhere",document.getElementById("timesLift").value):document.getElementById("timesHill").checked?sessionStorage.setItem("timesWhere",document.getElementById("timesHill").value):document.getElementById("timesOther").checked&&(sessionStorage.setItem("timesWhere",document.getElementById("timesOther").value),sessionStorage.setItem("setOther",document.getElementById("numOther").value)),sessionStorage.setItem("numTimesToday",document.getElementById("numTimesToday").value),sessionStorage.setItem("numTimesPrior",document.getElementById("numTimesPrior").value),document.getElementById("removeFall").checked?sessionStorage.setItem("removedBy",document.getElementById("removeFall").value):document.getElementById("removeInjured").checked?sessionStorage.setItem("removedBy",document.getElementById("removeInjured").value):document.getElementById("removePatrol").checked?sessionStorage.setItem("removedBy",document.getElementById("removePatrol").value):document.getElementById("removeOther").checked&&sessionStorage.setItem("removedBy",document.getElementById("removeOther").value),document.getElementById("equipAlpine").checked?sessionStorage.setItem("equipType",document.getElementById("equipAlpine").value):document.getElementById("equipNordic").checked?sessionStorage.setItem("equipType",document.getElementById("equipNordic").value):document.getElementById("equipSnowboard").checked?sessionStorage.setItem("equipType",document.getElementById("equipSnowboard").value):document.getElementById("equipOther").checked&&(sessionStorage.setItem("equipType",document.getElementById("equipOther").value),sessionStorage.setItem("otherEquip",document.getElementById("otherEquip").value)),document.getElementById("ownerOwn").checked?sessionStorage.setItem("owner",document.getElementById("ownerOwn").value):document.getElementById("ownerRent").checked?(sessionStorage.setItem("owner",document.getElementById("ownerRent").value),sessionStorage.setItem("skiNum",document.getElementById("skiNum").value),sessionStorage.setItem("bootNum",document.getElementById("bootNum").value),sessionStorage.setItem("shopName","Nub's Nob"),sessionStorage.setItem("shopStreet","500 Nub's Nob Road"),sessionStorage.setItem("shopCity","Harbor Springs"),sessionStorage.setItem("shopState","MI"),sessionStorage.setItem("shopZip","49770")):document.getElementById("ownerOther").checked?(sessionStorage.setItem("owner",document.getElementById("ownerOther").value),sessionStorage.setItem("skiNum",document.getElementById("skiNum").value),sessionStorage.setItem("bootNum",document.getElementById("bootNum").value),sessionStorage.setItem("shopName",document.getElementById("shopName").value),sessionStorage.setItem("shopStreet",document.getElementById("shopStreet").value),sessionStorage.setItem("shopCity",document.getElementById("shopCity").value),sessionStorage.setItem("shopState",document.getElementById("shopState").value),sessionStorage.setItem("shopZip",document.getElementById("shopZip").value)):document.getElementById("ownerBorrowed").checked?sessionStorage.setItem("owner",document.getElementById("ownerBorrowed").value):document.getElementById("ownerDemo").checked&&(sessionStorage.setItem("owner",document.getElementById("ownerDemo").value),sessionStorage.setItem("skiNum",document.getElementById("skiNum").value),sessionStorage.setItem("bootNum",document.getElementById("bootNum").value),sessionStorage.setItem("shopName","Nub's Nob"),sessionStorage.setItem("shopStreet","500 Nub's Nob Road"),sessionStorage.setItem("shopCity","Harbor Springs"),sessionStorage.setItem("shopState","MI"),sessionStorage.setItem("shopZip","49770")),sessionStorage.setItem("bindingMake",document.getElementById("bindingMake").value),sessionStorage.setItem("bindingModel",document.getElementById("bindingModel").value),sessionStorage.setItem("leftDinToe",document.getElementById("leftDinToe").value),sessionStorage.setItem("leftDinHeel",document.getElementById("leftDinHeel").value),sessionStorage.setItem("rightDinToe",document.getElementById("rightDinToe").value),sessionStorage.setItem("rightDinHeel",document.getElementById("rightDinHeel").value),document.getElementById("helmetY").checked?(sessionStorage.setItem("helmet",document.getElementById("helmetY").value),document.getElementById("helmetRentalYes").checked?(sessionStorage.setItem("helmetRental",document.getElementById("helmetRentalYes").value),sessionStorage.setItem("helmetNum",document.getElementById("helmetRentalNum").value)):document.getElementById("helmetRentalNo").checked&&sessionStorage.setItem("helmetRental",document.getElementById("helmetRentalNo").value)):document.getElementById("helmetN").checked&&sessionStorage.setItem("helmet",document.getElementById("helmetN").value),document.getElementById("videoY").checked?(sessionStorage.setItem("video",document.getElementById("videoY").value),sessionStorage.setItem("videoName",document.getElementById("videoName").value)):document.getElementById("videoN").checked&&sessionStorage.setItem("video",document.getElementById("videoN").value),sessionStorage.setItem("incidentDescription",document.getElementById("incidentDescriptionText").value),sessionStorage.setItem("statementTaker",document.getElementById("statementTaker_0").value);let e="",t=document.getElementsByName("injury");for(let o=0;o<t.length;o++)t[o].checked&&(e+=t[o].value+", ");sessionStorage.setItem("injuryType",e),document.getElementById("injuryTypeOther")&&sessionStorage.setItem("injuryTypeOther",document.getElementById("injuryTypeOther").value);let o="",s=document.getElementsByName("injuryLoc");for(let e=0;e<s.length;e++)s[e].checked&&(o+=s[e].value+", ");sessionStorage.setItem("injuryZone",o),document.getElementById("injuryZoneOther")&&sessionStorage.setItem("injuryZoneOther",document.getElementById("injuryZoneOther").value);let n="",m=document.getElementsByName("sceneSurface");for(let e=0;e<m.length;e++)m[e].checked&&(n+=m[e].value+", ");sessionStorage.setItem("sceneSurface",n);let d="",l=document.getElementsByName("visibility");for(let e=0;e<l.length;e++)l[e].checked&&(d+=l[e].value+", ");if(document.getElementById("sceneSurfaceOther")&&sessionStorage.setItem("sceneSurfaceOther",document.getElementById("sceneSurfaceOther").value),sessionStorage.setItem("sceneVisibility",d),document.getElementById("temperatureCold").checked?sessionStorage.setItem("temp",document.getElementById("temperatureCold").value):document.getElementById("temperatureMild").checked?sessionStorage.setItem("temp",document.getElementById("temperatureMild").value):document.getElementById("temperatureWarm").checked&&sessionStorage.setItem("temp",document.getElementById("temperatureWarm").value),document.getElementById("windCalm").checked?sessionStorage.setItem("wind",document.getElementById("windCalm").value):document.getElementById("windMod").checked?sessionStorage.setItem("wind",document.getElementById("windMod").value):document.getElementById("windHigh").checked&&sessionStorage.setItem("wind",document.getElementById("windHigh").value),sessionStorage.setItem("hillFirstAid",document.getElementById("hillFirstAid").value),sessionStorage.setItem("patrolRoomAid",document.getElementById("patrolRoomAid").value),document.getElementById("scenePatrollers_1")){let e=0;for(;e>=0;){let t=e+1;if(!document.getElementById(`scenePatrollers_${t}`))break;sessionStorage.setItem(`scenePatrollers_${e}`,document.getElementById(`scenePatrollers_${e}`).value),e++}}if(document.getElementById("transportPatrollers_1")){let e=0;for(;e>=0;){let t=e+1;if(!document.getElementById(`transportPatrollers_${t}`))break;sessionStorage.setItem(`transportPatrollers_${e}`,document.getElementById(`transportPatrollers_${e}`).value),e++}}if(document.getElementById("aidRoomPatrollers_1")){sessionStorage.setItem("aidPatrollers",document.getElementById("aidRoomPatrollers_0").value);let e=0;for(;e>=0;){let t=e+1;if(!document.getElementById(`aidRoomPatrollers_${t}`))break;sessionStorage.setItem(`aidPatrollers_${e}`,document.getElementById(`aidRoomPatrollers_${e}`).value),e++}}let a=document.getElementsByName("arrival");for(let e=0;e<a.length;e++)a[e].checked&&(sessionStorage.setItem("arrive",a[e].value),document.getElementById("arrivalOther").checked&&sessionStorage.setItem("arriveOther",document.getElementById("arriveOther").value));let i=document.getElementsByName("leave");for(let e=0;e<i.length;e++)i[e].checked&&sessionStorage.setItem("leave",i[e].value);let u=document.getElementsByName("dest");for(let e=0;e<u.length;e++)u[e].checked&&(sessionStorage.setItem("dest",u[e].value),document.getElementById("destOther").checked&&sessionStorage.setItem("otherDest",document.getElementById("otherDest").value));if(document.getElementById("w0LastName")){let e=0;for(;e>=0&&document.getElementById(`w${e}LastName`);)sessionStorage.setItem(`w${e}Name`,document.getElementById(`w${e}LastName`).value+", "+document.getElementById(`w${e}FirstName`).value),sessionStorage.setItem(`w${e}Street`,document.getElementById(`w${e}Street`).value),sessionStorage.setItem(`w${e}CityStateZip`,document.getElementById(`w${e}City`).value+", "+document.getElementById(`w${e}State`).value+" "+document.getElementById(`w${e}Zip`).value),sessionStorage.setItem(`w${e}HomePhoneNum`,document.getElementById(`w${e}HomePhoneNum`).value),sessionStorage.setItem(`w${e}CellPhoneNum`,document.getElementById(`w${e}CellPhoneNum`).value),e++}return sessionStorage.setItem("reportCompleter",document.getElementById("reportCompleter_0").value),sessionStorage.setItem("dateComplete",document.getElementById("dateComplete").value),SetSessionStorage.passData(),!1}static passData(){let e={};for(let t=0;t<sessionStorage.length;t++){let o=sessionStorage.key(t);e[o]=sessionStorage.getItem(o)}return e=JSON.stringify(e),fetch(document.url,{method:"POST",body:e,headers:{"x-requested-with":"fetch.0",mode:"no-cors"}}).then(e=>(console.log(e.text()),e.json())).catch(e=>{}),!1}}