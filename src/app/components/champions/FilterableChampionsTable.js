import React from 'react';
import ChampionSearchBar from './ChampionSearchBar';
import ChampionList from './ChampionList';
import { loadChampions } from '../../actions/championActions';
import { call, put } from 'redux-saga/effects';

class FilterableChampionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        championName: ''
    };

    this.handleUserInput =  this.handleUserInput.bind(this);
  }

  handleUserInput(championName) {
   this.setState({
     championName: championName
   });
  }

  render() {
    return (
      <div>
        <ChampionSearchBar
          championName={this.state.championName}
          onUserInput={this.handleUserInput} />

        <hr/>

        <ChampionList
          championName={this.state.championName}/>
      </div>
    );
  }

}

export default FilterableChampionsTable;
