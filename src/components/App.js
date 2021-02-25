import React, {Component} from 'react';
import axios from 'axios';
import {HashRouter, Switch, Route} from 'react-router-dom'
import MyNavBar from './MyNavBar'
import Login from './Login'
import Signup from './Signup'
import ShowRestaurant from './ShowRestaurant'
import EventShow from './EventShow'
import EventCreate from './EventCreate'
import Home from './Home'
import Wishlist from './Wishlist'
import EventList from './EventList'
import Container from 'react-bootstrap/Container';
import Background from './food-pattern.jpg';
import Navbar from 'react-bootstrap/Navbar'
import Welcome from './Welcome'

var appStyle = {
  backgroundSize: '100vh',
  backgroundRepeat: 'repeat',
  backgroundImage: `url(${Background})`,
};


const SERVER_URL = 'https://agile-tor-91190.herokuapp.com/' + 'logged_in'


function Logout(props) {
  const handleClick = (props) => {
      console.log('clicked');
      axios.delete('https://agile-tor-91190.herokuapp.com/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/project2-frontend')
      })
    .catch(error => console.log(error))
  }
  handleClick(props);
  return(
    <h1>Lala</h1>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus()
  }

  // CHANGE TO MATCH RAILS SERVER port. mine is 3000
  loginStatus = () => {
    axios.get(SERVER_URL, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        console.log('loginStatus();');
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }


  render() {
    return (
      <div style={ appStyle }>

        <Container style={{backgroundColor: '#F7BA89', minHeight: '100vh', position: 'relative'}}>
          <HashRouter>
            <MyNavBar {...this.state} isLoggedIn={this.state.isLoggedIn}/>
            <Switch>

              <Route exact path='/project2-frontend/' component={(props) => <Home {...props} {...this.state} isLoggedIn={this.state.isLoggedIn}/> } />
              <Route exact path='/project2-frontend/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/> } />
              <Route exact path='/project2-frontend/signup' component={(props) => <Signup {...props} handleLogin={this.handleLogin} /> } />
              <Route exact path='/project2-frontend/logout' component={(props) => <Logout {...props} onClick={this.handleClick} handleLogout={this.handleLogout}/> } />

              <Route exact path='/project2-frontend/event/:id' component = {(props) => <EventShow {...props} {...this.state} />} />

              <Route exact path='/project2-frontend/restaurant/:id' component={ShowRestaurant} />
              <Route exact path='/project2-frontend/wishlist' component={(props) => <Wishlist {...props} {...this.state} />} />
              <Route exact path='/project2-frontend/events' component={(props) => <EventList {...props} {...this.state} />} />
              <Route exact path='/project2-frontend/restaurant/:id/create-event' component={(props) => <EventCreate {...props} {...this.state} />} />
            </Switch>
          </HashRouter>
        </Container>
        <Navbar className="align-right" bg="dark" variant="dark">
          <Navbar.Brand>
            Proudly brought to you by KNYM
          </Navbar.Brand>
        </Navbar>
      </div>

    );
  }
};

export default App;
