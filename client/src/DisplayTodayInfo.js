import React, { Component } from 'react';
import "./Dashboard.css";

class DisplayTodayInfo extends Component {
    render() {
        return (
            <div className="today-info grid-item">
                    <div className="current-info">
                        <p className="today-info_head">currently:</p>
                        <p>temperature: {this.props.currently.currentTemperature}&ordm;f</p>
                        <p>apparent temperature: {this.props.currently.apparenttemperature}&ordm;f</p>
                    </div>
                    <div className="today-info__minmax">
                        <p className="today-info_head">today min and max info:</p>
                        <p className="dailyData__max">max temperature: {this.props.today.maxTemp}&ordm;f at {this.props.today.maxTempTime}</p>
                        <p className="dailyData__min">min temperature: {this.props.today.minTemp}&ordm;f at {this.props.today.minTempTime} </p>
                    </div>
                    <div className="today-summary">
                        <p className="today-info_head">Summary:</p>
                        <p>{this.props.today.summary}</p>
                    </div>
            </div>
        );
    }
}

export default DisplayTodayInfo;

//min temp
//max temp
//min temp time
//max temp time
//currently
//apparent currently
//summary
//