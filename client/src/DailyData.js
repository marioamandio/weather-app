import React, { Component } from 'react';
import "./Dashboard.css"
import "./dailydata.css"

class DailyData extends Component {
    render() {
        return (
            <div className="dailyData grid-item">
                <p className="dailyData__date">{this.props.data.date}</p>
                <p className="dailyData__max">max temperature: {this.props.data.maxTemp}&ordm;f at {this.props.data.maxTempTime}</p>
                <p className="dailyData__min">min temperature: {this.props.data.minTemp}&ordm;f at {this.props.data.minTempTime}</p>
            </div>
        );
    }
}

export default DailyData;