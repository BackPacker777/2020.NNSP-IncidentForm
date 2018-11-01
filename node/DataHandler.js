//   todo:

"use strict";

const FS = require('fs');
const SQL = require('sqlite3').verbose();

class DataHandler {
    constructor() {
        this.initDB();
    }

    initDB() {
        this.db = new SQL.Database(`data/incident_data.db`, (err) => {
            this.db.run(`PRAGMA foreign_keys = on`);
            this.db.run(`PRAGMA AUTO_VACUUM = FULL`);
            if (err) {
                return console.error(err.message);
            } else {
                console.log(`Connected to -incident_data.db- Sqlite3 DB`);
            }
        });
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_patients (
                patient_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                lastName TEXT,
                firstName TEXT,
                gender TEXT,
                dob TEXT,
                age INTEGER,
                height INTEGER,
                weight INTEGER,
                patientStreet TEXT,
                patientCity TEXT,
                patientState TEXT,
                patientZip INTEGER,
                email TEXT,
                occupation TEXT,
                homePhoneNum TEXT,
                cellPhoneNum TEXT,
                ability TEXT,
                priorInjury TEXT,
                yearInjured INTEGER,
                healthInsurance INTEGER,
                medications TEXT,
                ticketType TEXT,
                groupType TEXT
            )`);
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_patientEquip (
              patientEquip_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
              patient_id INTEGER,
              removedBy INTEGER,
              equipType INTEGER,
              otherEquip TEXT,
              owner INTEGER,
              skiNum INTEGER,
              bootNum INTEGER,
              shopName TEXT,
              shopStreet TEXT,
              shopCity TEXT,
              shopState TEXT,
              shopZip INTEGER,
              bindingMake TEXT,
              bindingModel TEXT,
              leftDinToe INTEGER,
              leftDinHeel INTEGER,
              rightDinToe INTEGER,
              rightDinHeel INTEGER,
              helmet INTEGER,
              helmetRental INTEGER,
              helmetNum INTEGER,
              FOREIGN KEY (patient_id) REFERENCES nnsp_patients(patient_id) ON DELETE CASCADE ON UPDATE CASCADE
            )`);
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_incidents (
                incident_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                patient_id INTEGER,
                day TEXT,
                date TEXT,
                inLesson INTEGER,
                timesWhere INTEGER,
                numTimesToday INTEGER,
                numTimesPrior INTEGER,
                incidentTime TEXT,
                video TEXT,
                videoName TEXT,
                incidentDescription TEXT,
                statementTaker TEXT,
                witnessData TEXT,
                reportCompleter TEXT,
                dateComplete TEXT,
                FOREIGN KEY (patient_id) REFERENCES nnsp_patients (patient_id) ON DELETE CASCADE ON UPDATE CASCADE
            )`);
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_witnesses (
                witness_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                patient_id INTEGER,
                name TEXT,
                street TEXT,
                city_state_zip TEXT,
                home_phone TEXT,
                cell_phone TEXT,
                FOREIGN KEY (patient_id) REFERENCES nnsp_patients (patient_id) ON DELETE CASCADE ON UPDATE CASCADE
            )`);
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_siteData (
                siteData_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                patient_id INTEGER,
                location TEXT,
                locationLift TEXT,
                whichLift TEXT,
                locationHill TEXT,
                whichHill TEXT,
                difficulty TEXT,
                locationPremise TEXT,
                specificLocation TEXT,
                sceneSurface TEXT,
                sceneSurfaceOther TEXT,
                sceneVisibility TEXT,
                temp INTEGER,
                wind TEXT,                
                FOREIGN KEY (patient_id) REFERENCES nnsp_patients (patient_id) ON DELETE CASCADE ON UPDATE CASCADE
            )`);
            this.db.run(`CREATE TABLE IF NOT EXISTS nnsp_firstAid (
                firstAid_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
                patient_id INTEGER,
                injuryType TEXT,
                injuryTypeOther TEXT,
                injuryZone TEXT,
                injuryZoneOther TEXT,
                hillFirstAid TEXT,
                patrolRoomAid TEXT,
                scenePatrollers_0 TEXT,
                scenePatrollers_1 TEXT,
                scenePatrollers_2 TEXT,
                scenePatrollers_3 TEXT,
                scenePatrollers_4 TEXT,
                scenePatrollers_5 TEXT,
                transportPatrollers_0 TEXT,
                transportPatrollers_1 TEXT,
                transportPatrollers_2 TEXT,
                transportPatrollers_3 TEXT,
                transportPatrollers_4 TEXT,
                transportPatrollers_5 TEXT,
                aidRoomPatrollers_0 TEXT,
                aidRoomPatrollers_1 TEXT,
                aidRoomPatrollers_2 TEXT,
                aidRoomPatrollers_3 TEXT,
                aidRoomPatrollers_4 TEXT,
                aidRoomPatrollers_5 TEXT,
                arrive TEXT,
                arrivalOther TEXT,
                leave TEXT,
                dest TEXT,
                destOther TEXT,
                FOREIGN KEY (patient_id) REFERENCES nnsp_patients (patient_id) ON DELETE CASCADE ON UPDATE CASCADE
            )`);
        });
        console.log(`Sqlite -nnsp- tables created`);
    }

    static renderDom(path, contentType, callback, encoding) {
        FS.readFile(path, encoding ? encoding : 'utf-8', (error, string) => {
            callback(error, string, contentType);
        });
    }

    static setBaseData(data, callback) {
        let filePath, columns;
        if (data === 'zip') {
            filePath = 'data/ZipCodeDB.csv';
        } else if (data === 'hills') {
            filePath = 'data/hills.csv';
            columns = 2;
        } else if (data === 'lifts') {
            filePath = 'data/lifts.csv';
            columns = 1;
        } else if (data === 'patrollers') {
            filePath = 'data/patrollers.csv';
            columns = 2;
        }

        FS.readFile(filePath, 'utf8', (err, file) => {
            let tempArray, finalData = [];
            tempArray = file.split(/\r?\n/); //remove newlines
            for (let i = 0; i < tempArray.length; i++) {
                finalData[i] = tempArray[i].split(/,/).slice(0, columns);
            }
            // finalData = JSON.stringify(finalData);
            callback(finalData);
        });
    }

    static handleUserData(data, callback) {
        data = JSON.parse(data);
        const FILE_PATH = 'data/users.csv';
        FS.readFile(FILE_PATH, 'utf8', (err, file) => {
            let user = {};
            const COLUMNS = 4;
            let tempArray, finalData = [];
            tempArray = file.split(/\r?\n/); //remove newlines
            for (let i = 0; i < tempArray.length; i++) {
                finalData[i] = tempArray[i].split(/,/).slice(0, COLUMNS);
            }
            for (let i = 0; i < finalData.length; i++) {
                if (data === finalData[i][0]) {
                    user = JSON.stringify({
                        'email': finalData[i][0],
                        'position': finalData[i][1],
                        'lastName': finalData[i][2],
                        'firstName': finalData[i][3]
                    });
                    break;
                } else {
                    user = 'false';
                }
            }
            callback(user);
        });
    }

    getRowCount(callback) {
        this.db.get(`SELECT COUNT(*) as 'count' FROM nnsp_patients`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(result.count);
            }
        });
    }

    queryData(search, callback) {
        search = search.split(',');
        let data = [];
        if (search[0] === 'date') {
            let dateArray = search[1].split('-');
            dateArray[1] = parseInt(dateArray[1], 10);
            let date = (dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0]);
            let sql = `SELECT * FROM nnsp_incidents LEFT JOIN nnsp_patients ON nnsp_incidents.patient_id = nnsp_patients.patient_id LEFT JOIN nnsp_siteData ON nnsp_patients.patient_id = nnsp_siteData.patient_id WHERE nnsp_incidents.date = ?`;
            this.db.all(sql, [date], (err, rows) => {
                if (err) {
                    console.log(`DATE ERR = ${err}`);
                } else {
                    data.push(rows);
                    console.log(data);
                    callback(data);
                }
            });
        } else if (search[0] === 'lastName') {
            let sql = `SELECT * FROM nnsp_patients LEFT JOIN nnsp_incidents ON nnsp_patients.patient_id = nnsp_incidents.patient_id LEFT JOIN nnsp_siteData ON nnsp_patients.patient_id = nnsp_siteData.patient_id WHERE nnsp_patients.lastName = ?`;
            this.db.all(sql, [search[1]], (err, rows) => {
                if (err) {
                    console.log(`NAME ERR = ${err}`);
                } else {
                    data.push(rows);
                    console.log(data);
                    callback(data);
                }
            });
        } else {
            let sql = `SELECT * FROM nnsp_incidents LEFT JOIN nnsp_patients ON nnsp_incidents.patient_id = nnsp_patients.patient_id LEFT JOIN nnsp_siteData ON nnsp_patients.patient_id = nnsp_siteData.patient_id WHERE nnsp_incidents.incident_id = ?`;
            this.db.all(sql, [search[1]], (err, rows) => {
                if (err) {
                    console.log(`ID ERR = ${err}`);
                } else {
                    data.push(rows);
                    console.log(data);
                    callback(data);
                }
            });
        }
    }

    getAllData(callback) {
        this.db.all(`SELECT * FROM nnsp_patients`, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                callback(rows);
            }
        });
    }

    getID(callback) {
        this.db.get(`SELECT patient_id FROM nnsp_patients ORDER BY patient_id DESC LIMIT 1`, (err, row) => {
            callback(row.patient_id);
        });
    }

    insertRow(data) {
        data = JSON.parse(data);
        this.db.run(`INSERT INTO nnsp_patients (lastName, firstName, gender, dob, age, height, weight, patientStreet, patientCity, patientState, patientZip, email, occupation, homePhoneNum, cellPhoneNum, ability, priorInjury, yearInjured, healthInsurance, medications, ticketType, groupType)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.lastName, data.firstName, data.gender, data.dob, data.age, data.height, data.weight, data.patientStreet, data.patientCity, data.patientState, data.patientZip, data.email, data.occupation, data.homePhone, data.cellPhone, data.ability, data.priorInjury, data.yearInjured, data.healthInsurance, data.medications, data.ticketType, data.groupType],
            function(err) {
                if (err) {
                    return console.log(err.message);
                }
            }
        );
        this.getID((patient_id) => {
            this.db.run(`INSERT INTO nnsp_patientEquip (patientEquip_id, patient_id, removedBy, equipType, otherEquip, owner, skiNum, bootNum, shopName, shopStreet, shopCity, shopState, shopZip, bindingMake, bindingModel, leftDinToe, leftDinHeel, rightDinToe, rightDinHeel, helmet, helmetRental, helmetNum)
              VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [data.patientEquip_id, patient_id, data.removedBy, data.equipType, data.otherEquip, data.owner, data.skiNum, data.bootNum, data.shopName, data.shopStreet, data.shopCity, data.shopState, data.shopZip, data.bindingMake, data.bindingModel, data.leftDinToe, data.leftDinHeel, data.rightDinToe, data.rightDinHeel, data.helmet, data.helmetRental, data.helmetNumdata],
                function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }
            );
            this.db.run(`INSERT INTO nnsp_incidents (incident_id, patient_id, day, date, inLesson, timesWhere, numTimesToday, numTimesPrior, incidentTime, video, videoName, incidentDescription, statementTaker, witnessData, reportCompleter, dateComplete)
              VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [data.incident_id, patient_id, data.day, data.date, data.inLesson, data.timesWhere, data.numTimesToday, data.numTimesPrior, data.incidentTime, data.video, data.videoName, data.incidentDescription, data.statementTaker, data.witnessData, data.reportCompleter, data.dateComplete],
                function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }
            );
            this.db.run(`INSERT INTO nnsp_siteData (siteData_id, patient_id, location, locationLift, whichLift, locationHill, whichHill, difficulty, locationPremise, specificLocation, sceneSurface, sceneSurfaceOther, sceneVisibility, temp, wind)
              VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [data.siteData_id, patient_id, data.location, data.locationLift, data.whichLift, data.locationHill, data.whichHill, data.difficulty, data.locationPremise, data.specificLocation, data.sceneSurface, data.sceneSurfaceOther, data.sceneVisibility, data.temp, data.wind],
                function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }
            );
            let counter = 0;
            while (counter >= 0) {
                let wName = `data.w${counter}Name`;
                if (eval(wName)) {
                    let wStreet = `data.w${counter}Street`, wCityStateZip = `data.w${counter}CityStateZip`, wHomePhone = `data.w${counter}HomePhoneNum`, wCellPhone = `data.w${counter}CellPhoneNum`;
                    this.db.run(`INSERT INTO nnsp_witnesses (witness_id, patient_id, name, street, city_state_zip, home_phone, cell_phone)
                        VALUES(?, ?, ?, ?, ?, ?, ?)`,
                        [data.witness_id, patient_id, eval(wName), eval(wStreet), eval(wCityStateZip), eval(wHomePhone), eval(wCellPhone)],
                        function(err) {
                            if (err) {
                                return console.log(err.message);
                            }
                        }
                    );
                } else {
                    counter = null;
                    break;
                }
                counter++;
            }
            this.db.run(`INSERT INTO nnsp_firstAid (firstAid_id, patient_id, injuryType, injuryTypeOther, injuryZone, injuryZoneOther, hillFirstAid, patrolRoomAid, scenePatrollers_0, scenePatrollers_1, scenePatrollers_2, scenePatrollers_3, scenePatrollers_4, scenePatrollers_5, transportPatrollers_0, transportPatrollers_1, transportPatrollers_2, transportPatrollers_3, transportPatrollers_4, transportPatrollers_5, aidRoomPatrollers_0, aidRoomPatrollers_1, aidRoomPatrollers_2, aidRoomPatrollers_3, aidRoomPatrollers_4, aidRoomPatrollers_5, arrive, arrivalOther, leave, dest, destOther)
              VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [data.firstAid_id, patient_id, data.injuryType, data.injuryTypeOther, data.injuryZone, data.injuryZoneOther, data.hillFirstAid, data.patrolRoomAid, data.scenePatrollers_0, data.scenePatrollers_1, data.scenePatrollers_2, data.scenePatrollers_3, data.scenePatrollers_4, data.scenePatrollers_5, data.transportPatrollers_0, data.transportPatrollers_1, data.transportPatrollers_2, data.transportPatrollers_3, data.transportPatrollers_4, data.transportPatrollers_5, data.aidRoomPatrollers_0, data.aidRoomPatrollers_1, data.aidRoomPatrollers_2, data.aidRoomPatrollers_3, data.aidRoomPatrollers_4, data.aidRoomPatrollers_5, data.arrive, data.arrivalOther, data.leave, data.dest, data.destOther],
                function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }
            );
        });
    }
}

module.exports = DataHandler;