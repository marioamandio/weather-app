import React, { Component } from 'react';
import axios from 'axios';
import "./App.css"
import Loader from './Loader'
import DisplayValues from "./DisplayValues";


class App extends Component {
    
    state = {
      dataToFetch: false,
      data: {},
      displayLoader: false
    }

    submitForm = (ev) => {
      ev.preventDefault()
      let addressToFetch = ev.target.address.value
      ev.target.address.value = "";

      this.setState(() => {
        return {
          displayLoader: true,
          data: {},
          dataToFetch: false
        }
      })
      //display processing
      axios.post("/api/address",{
             address: addressToFetch
      }).then((response) => {
        if(response.error) {

          //display:none
          return this.setState(() => {
            return {
              data: response,
              displayLoader: false
            }
          })
        }
        this.setState(() => {
          return {
          data: response.data,
          dataToFetch: true,
          displayLoader: false
        }})
      })
    }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="header-title">Weather app</h1>
        
        <form onSubmit={(ev) => {
          this.submitForm(ev)}}
          className="form"
          >
          <input type="text" name="address" placeholder="address" className="form--address"/>
          <input type="submit" className="form--submit"/>
        </form>
        </div>
        {this.state.displayLoader && <Loader />}
        {this.state.dataToFetch && <DisplayValues data={this.state.data}/>}
      </div>
    );
  }
}

export default App;
