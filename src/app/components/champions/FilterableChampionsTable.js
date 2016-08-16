import React from 'react';
import ChampionSearchBar from './ChampionSearchBar';
import ChampionList from './ChampionList';
import { CHAMPIONS } from '../../api/mockChampions';

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
          champions={CHAMPIONS}
          championName={this.state.championName}/>
      </div>
    );
  }

}

FilterableChampionsTable.propTypes = {
};

export default FilterableChampionsTable;
