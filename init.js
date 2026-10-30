const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
main()
    .then((data) => {
        console.log('connected successfully');
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/app');
}

Chat.insertMany([{
            from: 'Neha',
            to: 'Sunita',
            msg: 'Do you remmember Tommorrow will Math exam'
        },
        {
            from: 'Sunita',
            to: 'Govinda',
            msg: 'Govinda Your movie is too good',
        }, {
            from: 'Rahul',
            to: 'Mohan',
            msg: 'Whatsup brother what are you doing',
        }, {
            from: 'Sam',
            to: 'Vijay',
            msg: 'Good morning babes',
        },
        {
            from: 'Shaym',
            to: 'Sahil',
            msg: "Let's play football",
        }, {
            from: 'Sunil',
            to: "Virat",
            msg: 'your innining was too good',
        }, {
            from: 'Rahul',
            to: 'Naredra',
            msg: 'You will listen my name',
        }
    ])
    .then((data) => {
        console.log(data);
    })