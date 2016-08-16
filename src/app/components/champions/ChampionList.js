import React from 'react';
import ChampionRow from './ChampionRow';

class ChampionList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.filterChampions = this.filterChampions.bind(this);
  }

  filterChampions(champions, championName) {
    let rows = [];

    rows = champions.map(function (el) {
        if (el.name.toUpperCase().includes(championName.toUpperCase())) {
          return <ChampionRow champion={el} key={el.name} />;
        }
    });

    return rows;
  }

  render() {
    let rows = this.filterChampions(this.props.champions, this.props.championName);

    return (
      <section>
      <div className="container">
        <h2>Champions</h2>

        <div className="row">
          <ul className="heroes">
            {rows}
          </ul>
        </div>

      </div>
    </section>
    );
  }
}

ChampionList.propTypes = {
  champions: React.PropTypes.array.isRequired,
  championName: React.PropTypes.string.isRequired
};

export default ChampionList;
