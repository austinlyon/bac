import React from 'react';
import StatForm from './statForm.jsx';
import Stats from './stats.jsx';

export default class StatFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sexInput: '',
      weightInput: '',
      sex: 'yes please',
      weight: 175,
    };
    this.recordStats = this.recordStats.bind(this);
  }

  recordStats(stats) {
    this.setState(
      {
        sex: stats.sex,
        weight: stats.weight,
      }
    );
  }

  render() {
    return (
      <div>
        <StatForm sex={this.sexInput} weight={this.weightInput} />
        <Stats sex={this.sex} weight={this.weight} />
      </div>
    );
  }
}
