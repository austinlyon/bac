import React from 'react';

const StatForm = props => (
  <div id="statFormWrapper">
    <form id="statForm">
      <div>
        <label htmlFor="sex">Sex</label>
        <input type="text" id="sex" name="sex" value={props.sex} />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="text" id="weight" name="weight" value={props.weight} />
      </div>
    </form>
  </div>
);
StatForm.propTypes = {
  sex: React.PropTypes.string,
  weight: React.PropTypes.number,
};
StatForm.defaultProps = {
  sex: 'Male',
  weight: 175,
};

export default StatForm;
