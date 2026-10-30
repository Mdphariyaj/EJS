const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const port = 3000;
const Chat = require('./models/chat');
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


main()
    .then((res) => {
        console.log('connected');
    }).catch((err) => {
        console.log(err);
    });


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/app');

}
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('server working well');
});

app.get('/chats', async(req, res) => {
    let chats = await Chat.find();

    res.render('index.ejs', { chats })
});
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});
app.post('/chats', async(req, res) => {
    console.log(req.body);
    await Chat.insertOne(req.body);
    res.redirect('/chats')
});
app.use(methodOverride('_method'));
app.get('/chats/:id/edit', async(req, res) => {
    let { id } = req.params;
    console.log(id);
    let chat = await Chat.findById(id);

    res.render('edit.ejs', { chat })
});

app.put('/chats/:id', async(req, res) => {
    let { msg } = req.body;
    let { id } = req.params;
    console.log(msg, id);
    await Chat.findByIdAndUpdate(id, { msg: msg });
    res.redirect('/chats');
});

app.delete('/chats/:id', async(req, res) => {
    let { id } = req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
})