import React from 'react';

class Temperature extends React.Component {
  state = {
    temperature: '',
  };

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    let result, resultStyle;
    if (this.state.temperature < 10) {
      result = "It's cold ❄️";
      resultStyle = {
        color: 'blue',
      };
    } else if (this.state.temperature > 30) {
      result = "It's warm ☀️";
      resultStyle = {
        color: 'red',
      };
    } else {
      result = "It's nice 🌼";
      resultStyle = {
        color: 'black',
      };
    }
    return (
      <div className="temperature-section">
        <h1 className="temperature-section__title">Temperature</h1>
        <input
          onChange={this.handleChange}
          placeholder="Temperature in °C"
          type="number"
          className="temperature-section__input"
          min="-50"
          max="50"
        ></input>
        {this.state.temperature && (
          <p style={resultStyle} className="temperature-section__text">
            {result}
          </p>
        )}
      </div>
    );
  }
}

export default Temperature;
