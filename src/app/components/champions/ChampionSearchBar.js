import React from 'react';

class ChampionSearchBar extends React.Component
{
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.props.onUserInput(
      this.refs.championNameInput.value
    );
  }

  render() {
    return (
      <section className="hero-section">
        <div className="container">
          <h1>Lol Guide Index</h1>
            <form>
              <input
                type="text"
                placeholder="Search..."
                value={this.props.championName}
                onChange={this.handleChange}
                ref="championNameInput"
                className="hero-searchbar form-control ap-input"
              />
            </form>
        </div>
      </section>

    );
  }
}


ChampionSearchBar.propTypes = {
  championName: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};

export default ChampionSearchBar;
