'use strict';
import EventHandler from './EventHandler.js';

class main {
    constructor() {
        let date = new Date();
        this.date = date;
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.year = this.date.getFullYear();
        this.weekday = this.date.getDay();
        this.fullDate = `${this.month}/${this.day}/${this.year}`;
        this.populateDate();
        this.eventHandler = new EventHandler(this.year, this.month, this.day);
        main.prepApp();
    }

    static prepApp() {
        document.getElementById('noPrint').style.display = 'none';

        // document.getElementById('dateTime').style.visibility = 'hidden';
        document.getElementById('dtExpand').style.display = 'none';
        document.getElementById('personalInfo').style.visibility = 'hidden';
        document.getElementById('patientHistory').style.visibility = 'hidden';
        document.getElementById('locationsHistory').style.visibility = 'hidden';
        document.getElementById('equipment').style.visibility = 'hidden';
        document.getElementById('incidentDescriptionConditions').style.visibility = 'hidden';
        document.getElementById('injuryData').style.visibility = 'hidden';
        document.getElementById('firstAidPatrollersTransport').style.visibility = 'hidden';
        document.getElementById('witnessCompleter').style.visibility = 'hidden';
        document.getElementById('buttons').style.visibility = 'hidden';
        // main.setRequired();
    }

    static setRequired() {
        let required = document.getElementById('mainForm').querySelectorAll('[required]');
        for (let element of required) {
            element.style.backgroundColor = 'yellow';
        }
    }

    populateDate() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        document.getElementById('day').value = days[this.weekday];
        document.getElementById('date').value = this.fullDate;
    }
}

window.addEventListener('load', () => {
    sessionStorage.clear();
    new main();
});