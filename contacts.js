// Core Module
// File System
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp, };    
    const file = fs.readFileSync('data/contacts.json', 'utf-8');    
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
        return false;
    }

    //cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
            return false;
        }
    }

    //cek nomor HP
    if(!validator.isMobilePhone(noHp, 'id-ID')){
        console.log(chalk.red.inverse.bold('Nomor Hp tidak valid!'));
        return false;
    }
    
    contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data.'));
        
};

module.exports = {simpanContact};