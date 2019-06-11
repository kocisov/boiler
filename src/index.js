import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'static/global.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.dispose(() => {});
  module.hot.accept(() => {});
}
