//   @todo

'use strict';

class results {
    constructor() {
        results.populateResults();
    }

    static populateResults() {
    //DATE & TIME-----------------------------------------------------------------------------------------------------------
        document.getElementById('day').innerText = sessionStorage.getItem('day');
        document.getElementById('date').innerText = sessionStorage.getItem('date');
        document.getElementById('incidentTime').innerText = sessionStorage.getItem('incidentTime');

    //LOCATION--------------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('whichHill')) {
            document.getElementById('hill').checked = true;
            document.getElementById('location').innerText = sessionStorage.getItem('whichHill');
            if (sessionStorage.getItem('difficulty') === "1") {
                document.getElementById('easier').checked = true;
            } else if (sessionStorage.getItem('difficulty') === "2") {
                document.getElementById('moreDiff').checked = true;
            } else if (sessionStorage.getItem('difficulty') === "3") {
                document.getElementById('mostDiff').checked = true;
                if (sessionStorage.getItem('whichHill') === "Terrain Park") {
                    document.getElementById('freestyle').checked = true;
                }
            } else if (sessionStorage.getItem('difficulty') === "4") {
                document.getElementById('experts').checked = true;
            }
        } else if (sessionStorage.getItem('whichLift')) {
            document.getElementById('lift').checked = true;
            document.getElementById('location').innerText = sessionStorage.getItem('whichLift');
            document.getElementById('na').checked = true;
        } else {
            document.getElementById('premise').checked = true;
            document.getElementById('location').innerText = sessionStorage.getItem('location');
            document.getElementById('na').checked = true;
        }
        document.getElementById('specificLocation').innerText = sessionStorage.getItem('specificLocation');

    //INJURED PERSON--------------------------------------------------------------------------------------------------------
        document.getElementById('lastName').innerText = sessionStorage.getItem('lastName');
        document.getElementById('firstName').innerText = sessionStorage.getItem('firstName');
        if (sessionStorage.getItem('gender') === "Male") {
            document.getElementById('male').checked = true;
        } else {
            document.getElementById('female').checked = true;
        }
        document.getElementById('dob').innerText = sessionStorage.getItem('dob');
        document.getElementById('age').innerText = sessionStorage.getItem('age');
        document.getElementById('height').innerText = sessionStorage.getItem('height');
        document.getElementById('weight').innerText = sessionStorage.getItem('weight');
        document.getElementById('patientStreet').innerText = sessionStorage.getItem('patientStreet');
        document.getElementById('patientCity').innerText = sessionStorage.getItem('patientCity');
        if (sessionStorage.getItem('patientState')) {
            document.getElementById('patientState').innerText = sessionStorage.getItem('patientState').replace(/(\r\n|\n|\r)/gm, "");
        }
        document.getElementById('patientZip').innerText = sessionStorage.getItem('patientZip');
        document.getElementById('email').innerText = sessionStorage.getItem('email');
        document.getElementById('occupation').innerText = sessionStorage.getItem('occupation');
        document.getElementById('homePhoneNum').innerText = sessionStorage.getItem('homePhoneNum');
        document.getElementById('cellPhoneNum').innerText = sessionStorage.getItem('cellPhoneNum');

    //SKIING HISTORY--------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('ability') === 'Beginner') {
            document.getElementById('beginner').checked = true;
        } else if (sessionStorage.getItem('ability') === 'Intermediate') {
            document.getElementById('intermediate').checked = true;
        } else if (sessionStorage.getItem('ability') === 'Expert') {
            document.getElementById('advanced').checked = true;
        } else {
            document.getElementById('abilityNA').checked = true;
        }

        if (sessionStorage.getItem('inLesson') === "Yes") {
            document.getElementById('inLesson').checked = true;
            document.getElementById('instYep').innerText = sessionStorage.getItem('instructor');
        } else {
            document.getElementById('lessonNA').checked = true;
        }

        if (sessionStorage.getItem('timesWhere') === 'Hill') {
            document.getElementById('numTimesTrail').checked = true;
            document.getElementById('trailLiftToday').checked = true;
            document.getElementById('timesToday').innerText = sessionStorage.getItem('numTimesToday');
            if (sessionStorage.getItem('numTimesPrior') >= 0) {
                document.getElementById('trailLiftPrior').checked = true;
                document.getElementById('timesPrior').innerText = sessionStorage.getItem('numTimesPrior');
            }
        } else if (sessionStorage.getItem('timesWhere') === 'Lift') {
            document.getElementById('numTimesLift').checked = true;
            document.getElementById('trailLiftToday').checked = true;
            document.getElementById('timesToday').innerText = sessionStorage.getItem('numTimesToday');
            if (sessionStorage.getItem('numTimesPrior') >= 0) {
                document.getElementById('trailLiftPrior').checked = true;
                document.getElementById('timesPrior').innerText = sessionStorage.getItem('numTimesPrior');
            }
        } else if (sessionStorage.getItem('timesWhere') === 'Other') {
            document.getElementById('timesOther').innerText = sessionStorage.getItem('setOther');
            document.getElementById('timesToday').innerText = sessionStorage.getItem('numTimesToday');
            if (sessionStorage.getItem('numTimesPrior') >= 0) {
                document.getElementById('trailLiftPrior').checked = true;
                document.getElementById('timesPrior').innerText = sessionStorage.getItem('numTimesPrior');
            }
        } else {
            document.getElementById('timesOther').innerText = 'N/A';
        }

        if (sessionStorage.getItem('removedBy') === 'Fall') {
            document.getElementById('equipRemoveFall').checked = true;
        } else if (sessionStorage.getItem('removedBy') === 'Injured') {
            document.getElementById('equipRemoveInjured').checked = true;
        } else if (sessionStorage.getItem('removedBy') === 'Patrol') {
            document.getElementById('equipRemovePatrol').checked = true;
        } else if (sessionStorage.getItem('removedBy') === 'Other') {
            document.getElementById('equipRemoveOther').checked = true;
        }

    //PATIENT HISTORY-------------------------------------------------------------------------------------------------------
        document.getElementById('priorInjury').innerText = sessionStorage.getItem('priorInjury');
        document.getElementById('yearInjured').innerText = sessionStorage.getItem('yearInjured');
        if (sessionStorage.getItem('hi') === 'Yes') {
            document.getElementById('insuranceYes').checked = true;
        } else {
            document.getElementById('insuranceNo').checked = true;
        }
        document.getElementById('meds').innerText = sessionStorage.getItem('meds');
        document.getElementById('ticketType').innerText = sessionStorage.getItem('ticketType');
        document.getElementById('group').innerText = sessionStorage.getItem('group');

    //EQUIPMENT-------------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('equipType') === "Alpine") {
            document.getElementById('alpine').checked = true;
        }
        if (sessionStorage.getItem('equipType') === "Nordic") {
            document.getElementById('nordic').checked = true;
        }
        if (sessionStorage.getItem('equipType') === "Snowboard") {
            document.getElementById('snowboard').checked = true;
        }
        if (sessionStorage.getItem('equipType') === "Other") {
            document.getElementById('equipOther').checked = true;
            if (sessionStorage.getItem('otherEquip')) {
                document.getElementById('equipTypeOther').innerHTML = sessionStorage.getItem('otherEquip');
            }
        }
        if (sessionStorage.getItem('owner') === "Owned") {
            document.getElementById('owned').checked = true;
        }
        if (sessionStorage.getItem('owner') === "AreaRental") {
            document.getElementById('areaRental').checked = true;
            document.getElementById('skiNum').innerText = sessionStorage.getItem('skiNum');
            document.getElementById('bootNum').innerText = sessionStorage.getItem('bootNum');
            document.getElementById('shopName').innerText = sessionStorage.getItem('shopName');
            document.getElementById('shopStreet').innerText = sessionStorage.getItem('shopStreet');
            document.getElementById('shopCity').innerText = sessionStorage.getItem('shopCity');
            document.getElementById('shopState').innerText = sessionStorage.getItem('shopState');
            document.getElementById('shopZip').innerText = sessionStorage.getItem('shopZip');
        }
        if (sessionStorage.getItem('owner') === "OtherRental") {
            document.getElementById('otherRental').checked = true;
            document.getElementById('skiNum').innerText = sessionStorage.getItem('skiNum');
            document.getElementById('bootNum').innerText = sessionStorage.getItem('bootNum');
            document.getElementById('shopName').innerText = sessionStorage.getItem('shopName');
            document.getElementById('shopStreet').innerText = sessionStorage.getItem('shopStreet');
            document.getElementById('shopCity').innerText = sessionStorage.getItem('shopCity');
            document.getElementById('shopState').innerText = sessionStorage.getItem('shopState');
            document.getElementById('shopZip').innerText = sessionStorage.getItem('shopZip');
        }
        if (sessionStorage.getItem('owner') === "Borrowed") {
            document.getElementById('borrowed').checked = true;
        }
        if (sessionStorage.getItem('owner') === "Demo") {
            document.getElementById('demo').checked = true;
            document.getElementById('skiNum').innerText = sessionStorage.getItem('skiNum');
            document.getElementById('bootNum').innerText = sessionStorage.getItem('bootNum');
            document.getElementById('shopName').innerText = sessionStorage.getItem('shopName');
            document.getElementById('shopStreet').innerText = sessionStorage.getItem('shopStreet');
            document.getElementById('shopCity').innerText = sessionStorage.getItem('shopCity');
            document.getElementById('shopState').innerText = sessionStorage.getItem('shopState');
            document.getElementById('shopZip').innerText = sessionStorage.getItem('shopZip');
        }
        document.getElementById('bindingMake').innerText = sessionStorage.getItem('bindingMake');
        document.getElementById('bindingModel').innerText = sessionStorage.getItem('bindingModel');
        document.getElementById('leftDinToe').innerText = sessionStorage.getItem('leftDinToe');
        document.getElementById('leftDinHeel').innerText = sessionStorage.getItem('leftDinHeel');
        document.getElementById('rightDinToe').innerText = sessionStorage.getItem('rightDinToe');
        document.getElementById('rightDinHeel').innerText = sessionStorage.getItem('rightDinHeel');
        if (sessionStorage.getItem('helmet') === "Yes") {
            document.getElementById('helmetYes').checked = true;
            if (sessionStorage.getItem('helmetRental') === 'Yes') {
                document.getElementById('helmetRentalYes').checked = true;
                document.getElementById('helmetRentalNum').innerText = sessionStorage.getItem('helmetNum');
            } else if (sessionStorage.getItem('helmetRental') === 'No') {
                document.getElementById('helmetRentalNo').checked = true;
            }
        } else {
            document.getElementById('helmetNo').checked = true;
        }
        if (sessionStorage.getItem('video') === "Yes") {
            document.getElementById('videoYes').checked = true;
            document.getElementById('videoName').innerText = sessionStorage.getItem('videoName');
        } else {
            document.getElementById('videoNo').checked = true;
        }

    //INCIDENT DESCRIPTION--------------------------------------------------------------------------------------------------
        document.getElementById('incidentDescription').innerText = sessionStorage.getItem('incidentDescription');
        document.getElementById('statementTaker').innerText = sessionStorage.getItem('statementTaker');

    //PROBABLE INJURY-------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('injuryType')) {
            if (sessionStorage.getItem('injuryType').match("Fracture")) {
                document.getElementById('fracture').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Puncture")) {
                document.getElementById('puncture').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Abrasion")) {
                document.getElementById('abrasion').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Dislocation")) {
                document.getElementById('dislocation').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Sprain")) {
                document.getElementById('sprain').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Bruise")) {
                document.getElementById('bruise').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Concussion")) {
                document.getElementById('concussion').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Frostbite")) {
                document.getElementById('frostbite').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Multiple")) {
                document.getElementById('multipleType').checked = true;
            }
            if (sessionStorage.getItem('injuryType').match("Other")) {
                document.getElementById('injOther').checked = true;
                if (sessionStorage.getItem('injuryTypeOther')) {
                    document.getElementById('injuryTypeOther').innerText = sessionStorage.getItem('injuryTypeOther');
                }
            }
        }

    //INJURY ZONE-----------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('injuryZone')) {
            if (sessionStorage.getItem('injuryZone').match("Left")) {
                document.getElementById('left').checked = true;
            } else if (sessionStorage.getItem('injuryZone').match("Right")) {
                document.getElementById('right').checked = true;
            } else if (sessionStorage.getItem('injuryZone').match("Both")) {
                document.getElementById('both').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Multiple")) {
                document.getElementById('multipleZone').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("UpperLeg")) {
                document.getElementById('upperLeg').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Knee")) {
                document.getElementById('knee').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("LowerLeg")) {
                document.getElementById('lowerLeg').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Ankle")) {
                document.getElementById('ankle').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Foot")) {
                document.getElementById('foot').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Hip")) {
                document.getElementById('hip').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Abdomen")) {
                document.getElementById('abdomen').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Chest")) {
                document.getElementById('chest').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Back")) {
                document.getElementById('back').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Neck")) {
                document.getElementById('neck').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Shoulder")) {
                document.getElementById('shoulder').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Arm")) {
                document.getElementById('arm').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Wrist")) {
                document.getElementById('wrist').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Hand")) {
                document.getElementById('hand').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Thumb")) {
                document.getElementById('thumb').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Head")) {
                document.getElementById('head').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Face")) {
                document.getElementById('face').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Eye")) {
                document.getElementById('eye').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Nose")) {
                document.getElementById('nose').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Mouth")) {
                document.getElementById('mouth').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Teeth")) {
                document.getElementById('teeth').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Internal")) {
                document.getElementById('internal').checked = true;
            }
            if (sessionStorage.getItem('injuryZone').match("Other")) {
                document.getElementById('zoneOther').checked = true;
                if (sessionStorage.getItem('injuryZoneOther')) {
                    document.getElementById('injuryZoneOther').innerText = sessionStorage.getItem('injuryZoneOther');
                }
            }
        }

    //FIRST AID RENDERED----------------------------------------------------------------------------------------------------
        document.getElementById('hillFirstAid').innerText = sessionStorage.getItem('hillFirstAid');
        document.getElementById('patrolRoomAid').innerText = sessionStorage.getItem('patrolRoomAid');

    //PATROLLERS------------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('scenePatrollers_0')) {
            document.getElementById('scenePatrollers').innerText = sessionStorage.getItem('scenePatrollers_0');
            let count = 1;
            while (count > 0) {
                if (sessionStorage.getItem(`scenePatrollers_${count}`)) {
                    document.getElementById('scenePatrollers').innerText += (`, ` + sessionStorage.getItem(`scenePatrollers_${count}`));
                    count++;
                } else {
                    break;
                }
            }
        }
        if (sessionStorage.getItem('transportPatrollers_0')) {
            document.getElementById('transportPatrollers').innerText = sessionStorage.getItem('transportPatrollers_0');
            let count = 1;
            while (count > 0) {
                if (sessionStorage.getItem(`transportPatrollers_${count}`)) {
                    document.getElementById('transportPatrollers').innerText += (`, ` + sessionStorage.getItem(`transportPatrollers_${count}`));
                    count++;
                } else {
                    break;
                }
            }
        }
        if (sessionStorage.getItem('aidPatrollers_0')) {
            document.getElementById('aidPatrollers').innerText = sessionStorage.getItem('aidPatrollers_0');
            let count = 1;
            while (count > 0) {
                if (sessionStorage.getItem(`aidPatrollers_${count}`)) {
                    document.getElementById('aidPatrollers').innerText += (`, ` + sessionStorage.getItem(`aidPatrollers_${count}`));
                    count++;
                } else {
                    break;
                }
            }
        }

    //TRANSPORTATION & DESTINATION------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('arrive') === "SkiPatrol") {
            document.getElementById('patrol').checked = true;
        }
        if (sessionStorage.getItem('arrive') === "WalkIn") {
            document.getElementById('walkIn').checked = true;
        }
        if (sessionStorage.getItem('arrive') === "Other") {
            document.getElementById('arriveOther').checked = true;
            if (sessionStorage.getItem('arriveOther')) {
                document.getElementById('otherArrive').innerText = sessionStorage.getItem('arriveOther');
            }
        }
        if (sessionStorage.getItem('leave') === "Ambulance") {
            document.getElementById('ambulance').checked = true;
        }
        if (sessionStorage.getItem('leave') === "Car") {
            document.getElementById('car').checked = true;
        }
        if (sessionStorage.getItem('leave') === "Walk") {
            document.getElementById('walkOut').checked = true;
        }
        if (sessionStorage.getItem('dest') === "Home") {
            document.getElementById('home').checked = true;
        }
        if (sessionStorage.getItem('dest') === "Lodge") {
            document.getElementById('lodge').checked = true;
        }
        if (sessionStorage.getItem('dest') === "ReturnSkiing") {
            document.getElementById('returnSki').checked = true;
        }
        if (sessionStorage.getItem('dest') === "Other") {
            document.getElementById('destOther').checked = true;
            if (sessionStorage.getItem('otherDest')) {
                document.getElementById('otherDest').innerText = sessionStorage.getItem('otherDest');
            }
        }

    //SITE CONDITIONS-------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('sceneSurface')) {
            console.log(sessionStorage.getItem('sceneSurface'));
            if (sessionStorage.getItem('sceneSurface').match("powder")) {
                document.getElementById('powder').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("packedpowder")) {
                document.getElementById('packedPowder').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("hardpacked")) {
                document.getElementById('hardPacked').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("variable")) {
                document.getElementById('variable').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("corn")) {
                document.getElementById('corn').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("granular")) {
                document.getElementById('loose').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("wet")) {
                document.getElementById('wet').checked = true;
            }
            if (sessionStorage.getItem('sceneSurface').match("other")) {
                document.getElementById('other').checked = true;
                if (sessionStorage.getItem('sceneSurfaceOther')) {
                    document.getElementById('surfaceConditionsOther').innerText = sessionStorage.getItem('sceneSurfaceOther');
                }
            }
        }

        if (sessionStorage.getItem('sceneVisibility')) {
            if (sessionStorage.getItem('sceneVisibility').match("Clear")) {
                document.getElementById('clear').checked = true;
            }
            if (sessionStorage.getItem('sceneVisibility').match("Overcast")) {
                document.getElementById('overcast').checked = true;
            }
            if (sessionStorage.getItem('sceneVisibility').match("Fog")) {
                document.getElementById('fog').checked = true;
            }
            if (sessionStorage.getItem('sceneVisibility').match("Snowing")) {
                document.getElementById('snowing').checked = true;
            }
            if (sessionStorage.getItem('sceneVisibility').match("Raining")) {
                document.getElementById('raining').checked = true;
            }
            if (sessionStorage.getItem('sceneVisibility').match("Snowmaking")) {
                document.getElementById('snowmaking').checked = true;
            }
        }

        if (sessionStorage.getItem('temp')) {
            if (sessionStorage.getItem('temp') === "Below0") {
                document.getElementById('below0').checked = true;
            } else if (sessionStorage.getItem('temp') === "0-32") {
                document.getElementById('zero32').checked = true;
            } else if (sessionStorage.getItem('temp') === "above32") {
                document.getElementById('above32').checked = true;
            }
        }

        if (sessionStorage.getItem('wind')) {
            if (sessionStorage.getItem('wind') === "Calm") {
                document.getElementById('calm').checked = true;
            } else if (sessionStorage.getItem('wind') === "Moderate") {
                document.getElementById('moderate').checked = true;
            } else if (sessionStorage.getItem('wind') === "High") {
                document.getElementById('high').checked = true;
            }
        }

    //WITNESSES-------------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('w0Name')) {
            let count = 0;
            while (count >= 0) {
                if (sessionStorage.getItem(`w${count}Name`)) {
                    document.getElementById('witnesses').innerText += (
                        sessionStorage.getItem(`w${count}Name`)
                        + `,   ` + sessionStorage.getItem(`w${count}Street`)
                        + `,   ` + sessionStorage.getItem(`w${count}CityStateZip`)
                        + `; Home Phone: ` + sessionStorage.getItem(`w${count}HomePhoneNum`)
                        + `, Cell Phone: ` + sessionStorage.getItem(`w${count}CellPhoneNum`)
                        + (`\n`)
                    );
                    count++;
                } else {
                    break;
                }
            }
        } else {
            document.getElementById('noWitness').checked = true;
        }

    //REPORT COMPLETER------------------------------------------------------------------------------------------------------
        document.getElementById('reportCompleter').innerText = sessionStorage.getItem('reportCompleter');
        document.getElementById('dateComplete').innerText = sessionStorage.getItem('dateComplete');
}

//For later when desiring to get results from DB (needs work)
/*
    populateResults() {
        this.performAjax('XHR6', 0, (response) => {
            let tempList = JSON.parse(response);
            let last = tempList.length - 1;
            console.log(tempList[last]._id);
            document.getElementById('day').innerText += tempList[last].day;
            document.getElementById('date').innerText += tempList[last].date;
            document.getElementById('lastName').innerText += tempList[last].lastName;

            /!*for (let i = 0; i < Object.keys(tempList[last]).length; i++) {
                document.getElementById('day').innerText += tempList[last].day;
            }*!/
        });
    }

    performAjax(requestNum, sendToNode, callback) {
        let bustCache = "?" + new Date().getTime();
        const XHR = new XMLHttpRequest();
        XHR.open("POST", document.url + bustCache, true);
        XHR.setRequestHeader("X-Requested-with", requestNum);
        XHR.send(sendToNode);
        XHR.onload = () => {
            if (XHR.readyState ==== 4 && XHR.status ==== 200 && callback) {
                return callback(XHR.responseText);
            }
        };
    }
*/
}

window.addEventListener('load', () => {
    new results();
});