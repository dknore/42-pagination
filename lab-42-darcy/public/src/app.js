import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Paragraph</p>
      <Link to="/other">Other Page</Link>
    </Fragment>;
  }
}

class OtherPage extends Component {
  render() {
    return <Fragment>
      <h1>Other Page</h1>
      <p>Paragraph on other page..</p>
      <Link to="/">Home</Link>
    </Fragment>;
  }
}

class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);