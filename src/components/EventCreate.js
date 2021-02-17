import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/events'

const EventCreate = (props) => {
  const {id} = useParams();
  return(
    <EventCreateForm restaurant_id = {parseInt(id)} user = {props.user}/>
  )
}


class EventCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      date:'',
      introduction:'',
      user:this.props.user,
      restaurant_id: this.props.restaurant_id,
      attendants:[],
      attendants_search:[],
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._findAttendants = this._findAttendants.bind(this)
    this._handleCheckbox = this._handleCheckbox.bind(this)
  }

  _handleChange = (event) => {
    const {name,value} = event.target;
    this.setState ({
      [name]:value,
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const {title, date, introduction, user, restaurant_id, attendants, _} = this.state;
    let newEvent = {
      title:title,
      date:date,
      introduction:introduction,
      user:user,
      restaurant_id:restaurant_id
    };
    console.log(newEvent)
    axios.post(SERVER_URL, newEvent).then((response) => {
      console.log(response);
      this.addAttendants(attendants, newEvent)
    })
  }

  addAttendants(attendants, newEvent){
    console.log(attendants)
    console.log(this.state.attendants)
    axios.get(SERVER_URL + '.json').then((response) => {
      console.log(response.data)
      const found = response.data.find((event) => {
        return event.title === newEvent.title
      })
      console.log(found)
      attendants.map((user) => {
        let newAttendant = {user_id: user.id, event_id: found.id};
        console.log(newAttendant)
        axios.post('http://localhost:3000/attendants', newAttendant).then((response) => {
          console.log(response)
        })
      })
    })
  }

  _findAttendants = (event) => {
    event.preventDefault();
    if(event.target.value === '') {
      this.setState({attendants_search:[]});
      return
    }
    const keyword = event.target.value
    axios.get('http://localhost:3000/users').then((response) => {
      const users = response.data.users;
      const matches = users.filter(user => {
        const regex = new RegExp(keyword, 'gi');
        return user.name.match(regex)
      });
      this.setState({
        attendants_search:matches
      })
    })
  }

  _handleCheckbox = (event) => {
    event.preventDefault();
    let searched = [...this.state.attendants_search]
    let checked = [...this.state.attendants]
    let user_id = Number(event.target.id)
    if(event.target.checked === true) {
      let add = searched.find((user) => {return user.id === user_id})
      checked = checked.concat( add)
      this.setState({
        attendants:checked
      })
    } else {
      let remove = checked.findIndex((user) => {return user.id === user_id})
      if(remove !== -1) {
        checked.splice(remove,1)
        this.setState({
          attendants:checked
        })
      }
    }
  }

  render(){
    return(
      <div>
        <h2>Create Event</h2>
        <h3>Venue:</h3>
        <form onSubmit = {this._handleSubmit}>
          <label>Title</label>
          <input name='title' onChange = {this._handleChange} required/>
          <label>Date</label>
          <input placeholder='2020-12-31' name='date' onChange = {this._handleChange} required/>
          <label>Summary</label>
          <textarea name='introduction'onChange = {this._handleChange}/>
          <div>
            <label>Attendants</label>
            <input name='attendants' onChange = {this._findAttendants}/>
            <ul>
              {this.state.attendants.map((attendant) => (
                <label><input type='checkbox' key = {attendant.id} id = {attendant.id} onChange={this._handleCheckbox} checked />{attendant.name}</label>
              ))}
                {this.state.attendants_search.map((user) => (
                <label><input type='checkbox' key = {user.id} id = {user.id} onChange={this._handleCheckbox}/>{user.name}</label>
              ))}
            </ul>
          </div>

          <button>Create Event</button>
        </form>
      </div>
    )
  }
}

export default EventCreate
