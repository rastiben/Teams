import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {inject, observer} from 'mobx-react';

@inject('TeamStore')
@observer
class Teams extends Component {
  render() {

    const TeamStore = this.props.TeamStore;

    const listTeams = TeamStore.Teams.map((team,i) =>
      <Team key={i} team={team}></Team>
    );

    return (
      <div className="Teams">

        {TeamStore.time}

        {listTeams}

      </div>
    );
  }
}

@inject('TeamStore')
@observer
class Team extends Component{

    changeTeamName(name){
      this.props.team.name = name;
    }

    onChange (event) {
      this.changeTeamName(event.target.value)
    }

    render(){

      return(

      <div className="Team">
        <h1>Team 1 : {this.props.team.name}</h1>
        <input type="text" value={this.props.team.name} onChange={this.onChange.bind(this)}/>
      </div>

      );

    }

}

export default Teams;
