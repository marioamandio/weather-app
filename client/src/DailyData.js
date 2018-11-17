import React, { Component } from 'react';
import "./Dashboard.css"

class DailyData extends Component {
    render() {
        return (
            <div className="dailyData grid-item">
                <p className="dailyData__date">{this.props.data.date}</p>
                <p className="dailyData__max">max temperature:&nbsp;
                    <span className="dailyData__max--temp">{this.props.data.maxTemp}</span>
                    &ordm;f at&nbsp;
                    <span className="dailyData__max--hour">{this.props.data.maxTempTime}</span>
                </p>
                <p className="dailyData__min">
                     min temperature:&nbsp;
                     <span className="dailyData__min--temp">{this.props.data.minTemp}</span>&ordm;f at&nbsp;
                     <span className="dailyData__min--hour">{this.props.data.minTempTime}</span></p>
            </div>
        );
    }
}

export default DailyData;