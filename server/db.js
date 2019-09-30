module.exports = {
    users: [
        'robby',
        'guest'
    ],
    conversations: [
        {
            id: 'xyz',
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