import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {inject, observer} from 'mobx-react';

@inject('TeamsStore')
@observer
class Teams extends Component {
  
  constructor(props) {
    super(props);

    this.state = { manage: false }

  }

  changeState(event) {

    this.setState({manage:event.target.checked});

  }

  render() {

    const TeamsStore = this.props.TeamsStore;

    const listTeams = TeamsStore.Teams.map((team,i) =>
      <Team key={i} team={team}></Team>
    );

    const listManageTeams = TeamsStore.Teams.map((team,i) =>
      <ManageTeam key={i} team={team}></ManageTeam>
    );
    
    const render = this.state.manage ? listManageTeams : listTeams;

    return (
      <div className="Teams">

        <input type="checkbox" onChange={this.changeState.bind(this)} />

        {render}
        
      </div>
    );
  }
}

class Team extends Component{

    render(){

      return(

      <div className="Team">
        <h1>Team 1 : {this.props.team.name}</h1>
      </div>

      );

    }

}

class ManageTeam extends Component{

    changeTeamName(event){
      this.props.team.changeName(event.target.value);
    }

    render(){

      return(

      <div className="Team">
        <input type="text" value={this.props.team.name} onChange={this.changeTeamName.bind(this)}/>
      </div>

      );

    }

}

export default Teams;
