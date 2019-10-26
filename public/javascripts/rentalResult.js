"use strict";

class rentalResult {
    constructor() {
        rentalResult.displayData();
    }

    static displayData() {
        let injuryNature = "";
    //DATE & TIME-------------------------------------------------------------------------------------------------------
        document.getElementById('day').innerText = sessionStorage.getItem('day');
        document.getElementById('incidentDate').innerText = sessionStorage.getItem('date');
        document.getElementById('date').innerText = sessionStorage.getItem('date');
        document.getElementById('incidentTime').innerText = sessionStorage.getItem('incidentTime');

    //INJURED PERSON
        document.getElementById('lastName').innerText = sessionStorage.getItem('lastName');
        document.getElementById('firstName').innerText = sessionStorage.getItem('firstName');
        if (sessionStorage.getItem('gender') === "Male") {
            document.getElementById('male').checked = true;
        } else {
            document.getElementById('female').checked = true;
        }
        document.getElementById('age').innerText = sessionStorage.getItem('age');
        document.getElementById('height').innerText = sessionStorage.getItem('height');
        document.getElementById('weight').innerText = sessionStorage.getItem('weight');
        if (sessionStorage.getItem('ability') === 'Beginner') {
            document.getElementById('beginner').checked = true;
        } else if (sessionStorage.getItem('ability') === 'Intermediate') {
            document.getElementById('intermediate').checked = true;
        } else if (sessionStorage.getItem('ability') === 'Expert') {
            document.getElementById('advanced').checked = true;
        }

    //PROBABLE INJURY---------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('injuryType')) {
            if (sessionStorage.getItem('injuryType').match("Fracture")) {
                injuryNature += " Fracture,";
            }
            if (sessionStorage.getItem('injuryType').match("Puncture")) {
                injuryNature += " Puncture,";
            }
            if (sessionStorage.getItem('injuryType').match("Abrasion")) {
                injuryNature += " Abrasion,";
            }
            if (sessionStorage.getItem('injuryType').match("Dislocation")) {
                injuryNature += " Dislocation,";
            }
            if (sessionStorage.getItem('injuryType').match("Sprain")) {
                injuryNature += " Sprain,";
            }
            if (sessionStorage.getItem('injuryType').match("Bruise")) {
                injuryNature += " Bruise,";
            }
            if (sessionStorage.getItem('injuryType').match("Concussion")) {
                injuryNature += " Concussion,";
            }
            if (sessionStorage.getItem('injuryType').match("Frostbite")) {
                injuryNature += " Frostbite,";
            }
            if (sessionStorage.getItem('injuryType').match("Multiple")) {
                injuryNature += " Multiple,";
            }
            if (sessionStorage.getItem('injuryType').match("Other")) {
                if (sessionStorage.getItem('injuryTypeOther')) {
                    injuryNature += sessionStorage.getItem('injuryTypeOther');
                }
            }
        }

//INJURY ZONE-----------------------------------------------------------------------------------------------------------
        if (sessionStorage.getItem('injuryZone')) {
            if (sessionStorage.getItem('injuryZone').match("Left")) {
                injuryNature += " Left,";
            } else if (sessionStorage.getItem('injuryZone').match("Right")) {
                injuryNature += " Right,";
            } else if (sessionStorage.getItem('injuryZone').match("Both")) {
                injuryNature += " Both,";
            }
            if (sessionStorage.getItem('injuryZone').match("Multiple")) {
                injuryNature += " Multiple,";
            }
            if (sessionStorage.getItem('injuryZone').match("UpperLeg")) {
                injuryNature += " UpperLeg,";
            }
            if (sessionStorage.getItem('injuryZone').match("Knee")) {
                injuryNature += " Knee,";
            }
            if (sessionStorage.getItem('injuryZone').match("LowerLeg")) {
                injuryNature += " LowerLeg,";
            }
            if (sessionStorage.getItem('injuryZone').match("Ankle")) {
                injuryNature += " Ankle,";
            }
            if (sessionStorage.getItem('injuryZone').match("Foot")) {
                injuryNature += " Foot,";
            }
            if (sessionStorage.getItem('injuryZone').match("Hip")) {
                injuryNature += " Hip,";
            }
            if (sessionStorage.getItem('injuryZone').match("Abdomen")) {
                injuryNature += " Abdomen,";
            }
            if (sessionStorage.getItem('injuryZone').match("Chest")) {
                injuryNature += " Chest,";
            }
            if (sessionStorage.getItem('injuryZone').match("Back")) {
                injuryNature += " Back,";
            }
            if (sessionStorage.getItem('injuryZone').match("Neck")) {
                injuryNature += " Neck,";
            }
            if (sessionStorage.getItem('injuryZone').match("Shoulder")) {
                injuryNature += " Shoulder,";
            }
            if (sessionStorage.getItem('injuryZone').match("Arm")) {
                injuryNature += " Arm,";
            }
            if (sessionStorage.getItem('injuryZone').match("Wrist")) {
                injuryNature += " Wrist,";
            }
            if (sessionStorage.getItem('injuryZone').match("Hand")) {
                injuryNature += " Hand,";
            }
            if (sessionStorage.getItem('injuryZone').match("Thumb")) {
                injuryNature += " Thumb,";
            }
            if (sessionStorage.getItem('injuryZone').match("Head")) {
                injuryNature += " Head,";
            }
            if (sessionStorage.getItem('injuryZone').match("Face")) {
                injuryNature += " Face,";
            }
            if (sessionStorage.getItem('injuryZone').match("Eye")) {
                injuryNature += " Eye,";
            }
            if (sessionStorage.getItem('injuryZone').match("Nose")) {
                injuryNature += " Nose,";
            }
            if (sessionStorage.getItem('injuryZone').match("Mouth")) {
                injuryNature += " Mouth,";
            }
            if (sessionStorage.getItem('injuryZone').match("Teeth")) {
                injuryNature += " Teeth,";
            }
            if (sessionStorage.getItem('injuryZone').match("Internal")) {
                injuryNature += " Internal,";
            }
            if (sessionStorage.getItem('injuryZone').match("Other")) {
                if (sessionStorage.getItem('injuryZoneOther')) {
                    injuryNature += sessionStorage.getItem('injuryZoneOther');
                }
            }
        }
        document.getElementById('injuryNature').innerText = injuryNature;
    }
}

window.addEventListener('load', () => {
    new rentalResult();
});