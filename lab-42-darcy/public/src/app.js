import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-browser-router';
import ReactDOM from 'react-dom';

class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Paragraph</p>
    </Fragment>;
  }
}

class OtherPage extends Component {
  render() {
    return <Fragment>
      <h1>Other Page</h1>
      <p>Paragraph on other page..</p>
    </Fragment>;
  }
}

class App extends Component {
  render() {
    return <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={OtherPage} />
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);