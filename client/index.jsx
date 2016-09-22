// ----==== Node Modules ====----
import React from 'react';
import { render } from 'react-dom'; // eslint-disable-line no-unused-vars
// ----==== Components ====----
import StatFormContainer from './components/statFormContainer.jsx';

const App = () => <StatFormContainer />;

render(<App />, document.getElementById('content'));
