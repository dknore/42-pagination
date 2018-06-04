import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import RestaurantList from './components/RestaurantList.js';

class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Paragraph</p>
      <p><Link to="/other">Other Page</Link></p>
      <p><Link to="/restaurants">Restaurants</Link></p>
    </Fragment>;
  }
}

class OtherPage extends Component {
  render() {
    return <Fragment>
      <h1>Other Page</h1>
      <p>Paragraph on other page..</p>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/restaurants">Restaurants</Link></p>
    </Fragment>;
  }
}

class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
        <Route path="/restaurants" component={RestaurantList} />
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);