//   @todo Fix lines 222-235

"use strict";

export default class SetSessionStorage {
    constructor() {
        SetSessionStorage.saveData();
    }

    static saveData() {
        //DATE & TIME------------------------------------------------------------------------------------------------------
        sessionStorage.setItem('day', document.getElementById('day').value);
        sessionStorage.setItem('date', document.getElementById('date').value);
        sessionStorage.setItem('incidentTime', document.getElementById('incidentTime').value);

        //INJURED PERSON---------------------------------------------------------------------------------------------------
        sessionStorage.setItem('lastName', document.getElementById('lastName').value);
        sessionStorage.setItem('firstName', document.getElementById('firstName').value);
        if (document.getElementById('genderF').checked) {
            sessionStorage.setItem('gender', document.getElementById('genderF').value);
        } else if (document.getElementById('genderM').checked) {
            sessionStorage.setItem('gender', document.getElementById('genderM').value);
        }
        sessionStorage.setItem('dob', document.getElementById('dob').value);
        sessionStorage.setItem('age', document.getElementById('age').value);
        sessionStorage.setItem('height', document.getElementById('height').value);
        sessionStorage.setItem('weight', document.getElementById('weight').value);
        sessionStorage.setItem('patientStreet', document.getElementById('patientStreet').value);
        sessionStorage.setItem('patientCity', document.getElementById('patientCity').value);
        sessionStorage.setItem('patientState', document.getElementById('patientState').value);
        sessionStorage.setItem('patientZip', document.getElementById('patientZip').value);
        sessionStorage.setItem('email', document.getElementById('email').value);
        sessionStorage.setItem('occupation', document.getElementById('occupation').value);
        sessionStorage.setItem('homePhoneNum', document.getElementById('homePhoneNum').value);
        sessionStorage.setItem('cellPhoneNum', document.getElementById('cellPhoneNum').value);

        //PATIENT HISTORY--------------------------------------------------------------------------------------------------
        sessionStorage.setItem('priorInjury', document.getElementById('priorInjury').value);
        sessionStorage.setItem('yearInjured', document.getElementById('yearInjured').value);
        if (document.getElementById('hiYes').checked) {
            sessionStorage.setItem('hi', document.getElementById('hiYes').value);
        } else if (document.getElementById('hiNo').checked) {
            sessionStorage.setItem('hi', document.getElementById('hiNo').value);
        }
        sessionStorage.setItem('meds', document.getElementById('meds').value);
        sessionStorage.setItem('ticketType', document.getElementById('ticketType').value);
        sessionStorage.setItem('group', document.getElementById('group').value);

        //LOCATION---------------------------------------------------------------------------------------------------------
        if (document.getElementById('locationLift').checked) {
            sessionStorage.setItem('location', document.getElementById('locationLift').value);
            sessionStorage.setItem('locationLift', document.getElementById('locationLift').value);
            sessionStorage.setItem('whichLift', document.getElementById('whichLift').options[document.getElementById('whichLift').selectedIndex].value);
        } else if (document.getElementById('locationHill').checked) {
            sessionStorage.setItem('location', document.getElementById('locationHill').value);
            sessionStorage.setItem('locationHill', document.getElementById('locationHill').value);
            sessionStorage.setItem('whichHill', document.getElementById('whichHill').options[document.getElementById('whichHill').selectedIndex].text);
            sessionStorage.setItem('difficulty', document.getElementById('whichHill').options[document.getElementById('whichHill').selectedIndex].value);
        } else if (document.getElementById('locationPremise').checked) {
            sessionStorage.setItem('location', document.getElementById('locationPremise').value);
        }
        sessionStorage.setItem('specificLocation', document.getElementById('specificLocation').value);

        //SKIING HISTORY---------------------------------------------------------------------------------------------------
        if (document.getElementById('abilityBeginner').checked) {
            sessionStorage.setItem('ability', document.getElementById('abilityBeginner').value);
        } else if (document.getElementById('abilityIntermediate').checked) {
            sessionStorage.setItem('ability', document.getElementById('abilityIntermediate').value);
        } else if (document.getElementById('abilityExpert').checked) {
            sessionStorage.setItem('ability', document.getElementById('abilityExpert').value);
        } else {
            sessionStorage.setItem('ability', document.getElementById('abilityNA').value);
        }
        if (document.getElementById('lessonYes').checked) {
            sessionStorage.setItem('inLesson', document.getElementById('lessonYes').value);
            sessionStorage.setItem('instructor', document.getElementById('instructor').value);
        } else if (document.getElementById('lessonNo').checked) {
            sessionStorage.setItem('inLesson', document.getElementById('lessonNo').value);
        }
        if (document.getElementById('timesLift').checked) {
            sessionStorage.setItem('timesWhere', document.getElementById('timesLift').value);
        } else if (document.getElementById('timesHill').checked) {
            sessionStorage.setItem('timesWhere', document.getElementById('timesHill').value);
        } else if (document.getElementById('timesOther').checked) {
            sessionStorage.setItem('timesWhere', document.getElementById('timesOther').value);
            sessionStorage.setItem('setOther', document.getElementById('numOther').value);
        }
        sessionStorage.setItem('numTimesToday', document.getElementById('numTimesToday').value);
        sessionStorage.setItem('numTimesPrior', document.getElementById('numTimesPrior').value);
        if (document.getElementById('removeFall').checked) {
            sessionStorage.setItem('removedBy', document.getElementById('removeFall').value);
        } else if (document.getElementById('removeInjured').checked) {
            sessionStorage.setItem('removedBy', document.getElementById('removeInjured').value);
        } else if (document.getElementById('removePatrol').checked) {
            sessionStorage.setItem('removedBy', document.getElementById('removePatrol').value);
        } else if (document.getElementById('removeOther').checked) {
            sessionStorage.setItem('removedBy', document.getElementById('removeOther').value);
        }

        //EQUIPMENT--------------------------------------------------------------------------------------------------------
        if (document.getElementById('equipAlpine').checked) {
            sessionStorage.setItem('equipType', document.getElementById('equipAlpine').value);
        } else if (document.getElementById('equipNordic').checked) {
            sessionStorage.setItem('equipType', document.getElementById('equipNordic').value);
        } else if (document.getElementById('equipSnowboard').checked) {
            sessionStorage.setItem('equipType', document.getElementById('equipSnowboard').value);
        } else if (document.getElementById('equipOther').checked) {
            sessionStorage.setItem('equipType', document.getElementById('equipOther').value);
            sessionStorage.setItem('otherEquip', document.getElementById('otherEquip').value);
        }
        if (document.getElementById('ownerOwn').checked) {
            sessionStorage.setItem('owner', document.getElementById('ownerOwn').value);
        } else if (document.getElementById('ownerRent').checked) {
            sessionStorage.setItem('owner', document.getElementById('ownerRent').value);
            sessionStorage.setItem('skiNum', document.getElementById('skiNum').value);
            sessionStorage.setItem('bootNum', document.getElementById('bootNum').value);
            sessionStorage.setItem('shopName', "Nub's Nob");
            sessionStorage.setItem('shopStreet', "500 Nub's Nob Road");
            sessionStorage.setItem('shopCity', "Harbor Springs");
            sessionStorage.setItem('shopState', "MI");
            sessionStorage.setItem('shopZip', "49770");
        } else if (document.getElementById('ownerOther').checked) {
            sessionStorage.setItem('owner', document.getElementById('ownerOther').value);
            sessionStorage.setItem('skiNum', document.getElementById('skiNum').value);
            sessionStorage.setItem('bootNum', document.getElementById('bootNum').value);
            sessionStorage.setItem('shopName', document.getElementById('shopName').value);
            sessionStorage.setItem('shopStreet', document.getElementById('shopStreet').value);
            sessionStorage.setItem('shopCity', document.getElementById('shopCity').value);
            sessionStorage.setItem('shopState', document.getElementById('shopState').value);
            sessionStorage.setItem('shopZip', document.getElementById('shopZip').value);
        } else if (document.getElementById('ownerBorrowed').checked) {
            sessionStorage.setItem('owner', document.getElementById('ownerBorrowed').value);
        } else if (document.getElementById('ownerDemo').checked) {
            sessionStorage.setItem('owner', document.getElementById('ownerDemo').value);
            sessionStorage.setItem('skiNum', document.getElementById('skiNum').value);
            sessionStorage.setItem('bootNum', document.getElementById('bootNum').value);
            sessionStorage.setItem('shopName', "Nub's Nob");
            sessionStorage.setItem('shopStreet', "500 Nub's Nob Road");
            sessionStorage.setItem('shopCity', "Harbor Springs");
            sessionStorage.setItem('shopState', "MI");
            sessionStorage.setItem('shopZip', "49770");
        }
        sessionStorage.setItem('bindingMake', document.getElementById('bindingMake').value);
        sessionStorage.setItem('bindingModel', document.getElementById('bindingModel').value);
        sessionStorage.setItem('leftDinToe', document.getElementById('leftDinToe').value);
        sessionStorage.setItem('leftDinHeel', document.getElementById('leftDinHeel').value);
        sessionStorage.setItem('rightDinToe', document.getElementById('rightDinToe').value);
        sessionStorage.setItem('rightDinHeel', document.getElementById('rightDinHeel').value);
        if (document.getElementById('helmetY').checked) {
            sessionStorage.setItem('helmet', document.getElementById('helmetY').value);
            if (document.getElementById('helmetRentalYes').checked) {
                sessionStorage.setItem('helmetRental', document.getElementById('helmetRentalYes').value);
                sessionStorage.setItem('helmetNum', document.getElementById('helmetRentalNum').value);
            } else if (document.getElementById('helmetRentalNo').checked) {
                sessionStorage.setItem('helmetRental', document.getElementById('helmetRentalNo').value);
            }
        } else if (document.getElementById('helmetN').checked) {
            sessionStorage.setItem('helmet', document.getElementById('helmetN').value);
        }
        if (document.getElementById('videoY').checked) {
            sessionStorage.setItem('video', document.getElementById('videoY').value);
            sessionStorage.setItem('videoName', document.getElementById('videoName').value);
        } else if (document.getElementById('videoN').checked) {
            sessionStorage.setItem('video', document.getElementById('videoN').value);
        }

        //INCIDENT DESCRIPTION---------------------------------------------------------------------------------------------
        sessionStorage.setItem('incidentDescription', document.getElementById('incidentDescription').value);
        sessionStorage.setItem('statementTaker', document.getElementById('statementTaker_0').value);

        //PROBABLE INJURY--------------------------------------------------------------------------------------------------
        let injuryTypeBoxes = "";
        let injuries = document.getElementsByName('injury');
        for (let i = 0; i < injuries.length; i++) {
            if (injuries[i].checked) {
                injuryTypeBoxes += injuries[i].value + ", ";
            }
        }
        sessionStorage.setItem('injuryType', injuryTypeBoxes);
        if (document.getElementById('injuryTypeOther')) {
            sessionStorage.setItem('injuryTypeOther', document.getElementById('injuryTypeOther').value);
        }

        let injuryLocBoxes = "";
        let injuries2 = document.getElementsByName('injuryLoc');
        for (let j = 0; j < injuries2.length; j++) {
            if (injuries2[j].checked) {
                injuryLocBoxes += injuries2[j].value + ", ";
            }
        }
        sessionStorage.setItem('injuryZone', injuryLocBoxes);
        if (document.getElementById('injuryZoneOther')) {
            sessionStorage.setItem('injuryZoneOther', document.getElementById('injuryZoneOther').value);
        }

        //SITE CONDITIONS--------------------------------------------------------------------------------------------------
        let conditionBoxes = "";
        let sceneSurface = document.getElementsByName('sceneSurface');
        for (let k = 0; k < sceneSurface.length; k++) {
            if (sceneSurface[k].checked) {
                conditionBoxes += sceneSurface[k].value + ", ";
            }
        }
        sessionStorage.setItem('sceneSurface', conditionBoxes);

        let visBoxes = "";
        let sceneVis = document.getElementsByName('visibility');
        for (let l = 0; l < sceneVis.length; l++) {
            if (sceneVis[l].checked) {
                visBoxes += sceneVis[l].value + ", ";
            }
        }
        if (document.getElementById('sceneSurfaceOther')) {
            sessionStorage.setItem('sceneSurfaceOther', document.getElementById('sceneSurfaceOther').value);
        }
        sessionStorage.setItem('sceneVisibility', visBoxes);

        if (document.getElementById('temperatureCold').checked) {
            sessionStorage.setItem('temp', document.getElementById('temperatureCold').value);
        } else if (document.getElementById('temperatureMild').checked) {
            sessionStorage.setItem('temp', document.getElementById('temperatureMild').value);
        } else if (document.getElementById('temperatureWarm').checked) {
            sessionStorage.setItem('temp', document.getElementById('temperatureWarm').value);
        }
        if (document.getElementById('windCalm').checked) {
            sessionStorage.setItem('wind', document.getElementById('windCalm').value);
        } else if (document.getElementById('windMod').checked) {
            sessionStorage.setItem('wind', document.getElementById('windMod').value);
        } else if (document.getElementById('windHigh').checked) {
            sessionStorage.setItem('wind', document.getElementById('windHigh').value);
        }

        //FIRST AID RENDERED-----------------------------------------------------------------------------------------------
        sessionStorage.setItem('hillFirstAid', document.getElementById('hillFirstAid').value);
        sessionStorage.setItem('patrolRoomAid', document.getElementById('patrolRoomAid').value);

        if (document.getElementById('scenePatrollers_1')) {
            let count = 0;
            while (count >= 0) {
                let divCount = count + 1;
                if (document.getElementById(`scenePatrollers_${divCount}`)) {
                    sessionStorage.setItem(`scenePatrollers_${count}`, document.getElementById(`scenePatrollers_${count}`).value);
                    count++;
                } else {
                    break;
                }
            }
        }
        if (document.getElementById('transportPatrollers_1')) {
            let count = 0;
            while (count >= 0) {
                let divCount = count + 1;
                if (document.getElementById(`transportPatrollers_${divCount}`)) {
                    sessionStorage.setItem(`transportPatrollers_${count}`, document.getElementById(`transportPatrollers_${count}`).value);
                    count++;
                } else {
                    break;
                }
            }
        }
        if (document.getElementById('aidRoomPatrollers_1')) {
            sessionStorage.setItem('aidPatrollers', document.getElementById('aidRoomPatrollers_0').value);
            let count = 0;
            while (count >= 0) {
                let divCount = count + 1;
                if (document.getElementById(`aidRoomPatrollers_${divCount}`)) {
                    sessionStorage.setItem(`aidPatrollers_${count}`, document.getElementById(`aidRoomPatrollers_${count}`).value);
                    count++;
                } else {
                    break;
                }
            }
        }

        //TRANSPORTATION & DESTINATION-------------------------------------------------------------------------------------
        let howArrive = document.getElementsByName('arrival');
        for (let i = 0; i < howArrive.length; i++) {
            if (howArrive[i].checked) {
                sessionStorage.setItem('arrive', howArrive[i].value);
                if (document.getElementById('arrivalOther').checked) {
                    sessionStorage.setItem('arriveOther', document.getElementById('arriveOther').value);
                }
            }
        }
        let howLeave = document.getElementsByName('leave');
        for (let i = 0; i < howLeave.length; i++) {
            if (howLeave[i].checked) {
                sessionStorage.setItem('leave', howLeave[i].value);
            }
        }
        let dest = document.getElementsByName('dest');
        for (let i = 0; i < dest.length; i++) {
            if (dest[i].checked) {
                sessionStorage.setItem('dest', dest[i].value);
                if (document.getElementById('destOther').checked) {
                    sessionStorage.setItem('otherDest', document.getElementById('otherDest').value);
                }
            }
        }

        //WITNESSESS
        if (document.getElementById('w0LastName')) {
            let count = 0;
            while (count >= 0) {
                if (document.getElementById(`w${count}LastName`)) {
                    sessionStorage.setItem(`w${count}Name`, document.getElementById(`w${count}LastName`).value + ", " + document.getElementById(`w${count}FirstName`).value);
                    sessionStorage.setItem(`w${count}Street`, document.getElementById(`w${count}Street`).value);
                    sessionStorage.setItem(`w${count}CityStateZip`, document.getElementById(`w${count}City`).value + ", " + document.getElementById(`w${count}State`).value + " " + document.getElementById(`w${count}Zip`).value);
                    sessionStorage.setItem(`w${count}HomePhoneNum`, document.getElementById(`w${count}HomePhoneNum`).value);
                    sessionStorage.setItem(`w${count}CellPhoneNum`, document.getElementById(`w${count}CellPhoneNum`).value);
                    count++;
                } else {
                    break;
                }
            }
        }

        //REPORT COMPLETER-------------------------------------------------------------------------------------------------
        sessionStorage.setItem('reportCompleter', document.getElementById('reportCompleter_0').value);
        sessionStorage.setItem('dateComplete', document.getElementById('dateComplete').value);

        SetSessionStorage.passData();

        return false;
    }

    static passData() {
        // https://stackoverflow.com/a/41854807
        let data = {};
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            data[key] = sessionStorage.getItem(key);
        }
        data = JSON.stringify(data);
        fetch(document.url, {
            method: 'POST',
            body: data,
            headers: {
                'x-requested-with': 'fetch.0',
                'mode': 'no-cors'
            }
        }).then((response) => {
            console.log(response.text());
            return response.json();
        }).catch((errpr) => {
            // console.log(error);
        });

        return false;
    }
}