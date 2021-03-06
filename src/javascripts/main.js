'use strict';
import EventHandler from './EventHandler.js';

class main {
    constructor() {
        // let date = new Date();
        this.date = new Date();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.year = this.date.getFullYear();
        this.weekday = this.date.getDay();
        this.fullDate = `${this.month}/${this.day}/${this.year}`;
        this.populateDate();
        new EventHandler(this.year, this.month, this.day);
        main.prepApp();
    }

    static prepApp() {
        document.getElementById('noPrint').style.display = 'none';
        // document.getElementById('admin').style.display = 'none';
        document.getElementById('submit').disabled = true;

        document.getElementById('dateTime').style.display = 'block';
        document.getElementById('dtSymbol').innerHTML = `<i class="fas fa-minus expanderFont float-right"></i>`;
        document.getElementById('injuredPerson').style.display = 'none';
        document.getElementById('ipSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('patientHistory').style.display = 'none';
        document.getElementById('phSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('location').style.display = 'none';
        document.getElementById('loSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('skiingHistory').style.display = 'none';
        document.getElementById('shSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('equipment').style.display = 'none';
        document.getElementById('eqSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('incidentDescription').style.display = 'none';
        document.getElementById('idSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('siteConditions').style.display = 'none';
        document.getElementById('scSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('injuryData').style.display = 'none';
        document.getElementById('jdSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('firstAid').style.display = 'none';
        document.getElementById('faSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('patrollers').style.display = 'none';
        document.getElementById('ptSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('transport').style.display = 'none';
        document.getElementById('tdSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('witnesses').style.display = 'none';
        document.getElementById('wtSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
        document.getElementById('completer').style.display = 'none';
        document.getElementById('rcSymbol').innerHTML = `<i class="fas fa-plus expanderFont float-right"></i>`;
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