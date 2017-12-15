const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('getTeams', () => {
        var teams = [
            {
                name : 'Team 1'
            },{
                name : 'Team 2'
            }
        ]
        client.emit('teams', teams);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);