module.exports = {
    users: [
        'Robby Cowell',
        'Fiona Jones',
        'Kyle Smith'
    ],
    conversations: [
        {
            id: 'xyz',
            participants: ['Robby Cowell', 'Fiona Jones'],
            messages: [
                {
                    timeSent: Date.now(),
                    sentBy: 'Robby Cowell',
                    readBy: [],
                    contents: 'Hey there how are you?'
                },
                {
                    timeSent: 123,
                    sentBy: 'Fiona Jones',
                    readBy: [],
                    contents: 'Im good thank you how are you?'
                },
                {
                    timeSent: 456,
                    sentBy: 'Robby Cowell',
                    readBy: [],
                    contents: 'Great thanks for asking!'
                }
            ]
        },
        {
            id: 'abc',
            participants: ['Robby Cowell', 'Kyle Smith'],
            messages: [
                {
                    timeSent: Date.now(),
                    sentBy: 'Robby Cowell',
                    readBy: [],
                    contents: 'Still up for lunch later'
                },
                {
                    timeSent: 123,
                    sentBy: 'Kyle Smith',
                    readBy: [],
                    contents: 'Definitely!'
                },
                {
                    timeSent: 456,
                    sentBy: 'Robby Cowell',
                    readBy: [],
                    contents: 'Meet you at Harolds at 12?'
                }
            ]
        }
    ]
};