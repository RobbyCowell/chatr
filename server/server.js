const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.json());

const getConvosById = (userId) => {
    let convos = [];

    db.conversations.map(convo => {
        if (convo.participants.includes(userId)) {
            convos.push(convo);
        }
    });

    return convos;
};

const sendMessage = (msgData) => {
    const convo = db.conversations.find(cnv => {
        return cnv.id === msgData.id;
    });

    const msg = {
        timeSent: Date.now(),
        sentBy: msgData.sender,
        readBy: [],
        contents: msgData.msg
    }

    if (convo) {
        convo.messages.push(msg);
    } else {
        throw new Error('Conversation not found');
    }
};

app.get('/chats/:id', (req, res) => {
    const convos = getConvosById(req.params.id);
    return res.json(convos);
});

//curl -i -X POST -H 'Content-Type: application/json' -d '{"sender": "robby", "msg": "test message", "id": "xyz"}' http://localhost:5000/send
app.post('/send', (req, res) => {
    sendMessage(req.body);
    return res.json('OK');
});

app.listen(5000, () => 
    console.log('Server running on port 5000')
);