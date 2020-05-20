import React, { Component } from 'react';
import PropType from 'prop-types';
import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {
    techs: ['Javascript', 'Typescript'],
  };

  static propTypes = {
    techs: PropType.array,
  };

  // constructor() {
  //   state = {
  //     techs: [
  //       'Node.js',
  //       'ReactJS',
  //       'React Native',
  //     ]
  //   };
  // }

  state = {
    newTech: '',
    techs: []
  };

  // Hook when component is created in the page
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Hook when props or state are updated
  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Hook when component is destroyed
  componentWillUnmount() {
    console.log('Component Destroyed');
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{ this.state.newTech }</h1>
        <ul>
          {this.state.techs.map(tech =>
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default TechList;
