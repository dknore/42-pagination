import React, {Component, Fragment} from 'react';
import RESTAURANTS from '../zomato.js';

export default class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>"Zomato" Restaurant Ratings</h1>
      <p>{RESTAURANTS.length} restaurants.</p>
      {RESTAURANTS.map(restaurant => {
        return <div>
          {restaurant.name}
        </div>;
      })}
    </Fragment>;
  }
}