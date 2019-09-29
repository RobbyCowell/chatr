const express = require('express');

const app = express();

const dummyData = {
    users: [
        'robby',
        'guest'
    ],
    conversations: [
        {
            participants: ['robby', 'guest'],
            messages: [
                {
                    timeSent: Date.now(),
                    sentBy: 'robby',
                    readBy: [],
                    contents: 'Hello world!'
                }
            ]
        }
    ]
};

const getConvosById = (userId) => {
    let convos = [];
    dummyData.conversations.map(convo => {
        if (convo.participants.includes(userId)) {
            convos.push(convo);
        }
    });

    return convos;
};

app.get('/chats/:id', (req, res) => {
    const convos = getConvosById(req.params.id);
    return res.json(convos);
});

app.listen(5000, () => 
    console.log('Server running on port 5000')
);