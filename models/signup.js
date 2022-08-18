const db = require('../config/database')

class Signup {
    constructor( email, city, phoneNumber, userName, password ) {
        this.email = email,
        this.city = city,
        this.phoneNumber = phoneNumber,
        this.userName = userName,
        this.password = password

    }

    async save() {
        let sql = `
        INSERT INTO signupdb(
            email,
            city,
            phoneNumber,
            userName,
            password
            )
            VALUES(
                 '${this.email}',
                 '${this.city}',
                 '${this.phoneNumber}',
                 '${this.userName}',
                 '${this.password}'
                 )
                 `;

            
            return  db.execute(sql);


    }

    static findAll() {
        let sql = "SELECT * FROM signupdb;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql =  `SELECT * FROM signupdb WHERE id ${id};`;
        return db.execute(sql);

    }




}

module.exports = Signup;