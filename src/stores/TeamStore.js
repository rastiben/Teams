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
        this.Teams = teams;
    }

}

class TeamStore{

    @observable name;
    
    constructor(name){
        this.name = name;
    }

}

const store = new TeamsStore();
export default store;