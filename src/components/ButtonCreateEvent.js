import React, {useState} from 'react';
import {Component} from 'react';
import {AddToWishList} from './ButtonAddToWishList'


function ButtonCreateEvent(props) {
  return(
    <button onClick={() => {
      AddToWishList(props.restaurant, (restaurant_id) => {
        console.log(restaurant_id);
        props.history.push(`/restaurant/${restaurant_id}/create-event`)
      });

    }} >
       Add to list and creat Event
    </button>
  )
}

export default ButtonCreateEvent;
