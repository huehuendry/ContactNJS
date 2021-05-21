
const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama:{
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP:{
            describe: 'No HP',
            demandOption: true,
            type: 'string',
           },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama,  argv.email, argv.noHP);
        
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP,
        // };
        // console.log(contact);
    },
});
    

yargs.parse();












// const contacts = require('./contacts.js');

// const main = async () => {
//     const nama  = await contacts.tulispertanyaan('Masukkan nama anda : ');
//     const email = await contacts.tulispertanyaan('Masukkan email anda : ');
//     const noHp  = await contacts.tulispertanyaan('Masukkan noHp anda : ');

//     contacts.simpanContact(nama, email, noHp);
// };

// main();

