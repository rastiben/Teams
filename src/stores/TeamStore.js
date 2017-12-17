import {observable, action, computed} from 'mobx';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class TeamsStore{

    @observable Teams = [];
    @observable time = undefined;

    constructor(){
        socket.on('teams', teams => this.setTeams(teams));
        socket.emit('getTeams');
    }

    setTeams(teams){
        this.Teams = teams.map((team,i) =>
            new TeamStore(team.name,i)
        );
    }

}

class TeamStore{

    @observable name;
    
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    @action changeName = (name) => {
        this.name = name;
        socket.emit('changeTeamName',{id:this.id,name:this.name});
    }

}

const store = new TeamsStore();
export default store;