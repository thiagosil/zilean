import React from 'react';

class ChampionRow extends React.Component {
  constructor() {
    super();

    this.getLolKingUrl = this.getLolKingUrl.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
  }

  getLolKingUrl(championKey) {
    return `http://www.lolking.net/guides/champion/${championKey}`;
  }

  getImageUrl(championKey) {
    return `http://ddragon.leagueoflegends.com/cdn/6.13.1/img/champion/${championKey}.png`;
  }

  render() {
    return (
        <li>
          <div className="fl-left bloc-3">
            <a href={this.getLolKingUrl(this.props.champion.key)}>
                <img src={this.getImageUrl(this.props.champion.key)} className="champion-pic"/>
            </a>
          </div>
        </li>
    );
  }
}

ChampionRow.propTypes = {
  champion: React.PropTypes.object.isRequired
};

export default ChampionRow;
