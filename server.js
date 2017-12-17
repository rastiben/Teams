const io = require('socket.io')();

var teams = [
    {
        name : 'Team 1'
    },{
        name : 'Team 2'
    }
];

io.on('connection', (client) => {
    client.on('getTeams', () => {
        client.emit('teams', teams);
    });

    client.on('changeTeamName', (data) => {
        teams[data.id].name = data.name;
        io.emit('teams', teams);
    });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);