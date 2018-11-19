import React, { Component } from 'react';
import moment from 'moment';
import DailyData from './DailyData'
import DisplayTodayInfo from './DisplayTodayInfo';
import "./Dashboard.css"

class DisplayValues extends Component {

    getData = (daily) => {
        const dailyData = {
            date: moment.unix(daily.time).format("Do MMMM"),
            maxTemp: daily.temperatureHigh,
            maxTempTime: moment.unix(daily.temperatureHighTime).format("HH:mm"),
            minTemp: daily.temperatureLow,
            minTempTime: moment.unix(daily.temperatureLowTime).format("HH:mm"),
            summary: daily.summary,
            icon: daily.icon
        }
        return dailyData;
    }

    render() {
        if(this.props.data.error) {
            return (
                <div>
                    <p>{this.props.data.error}</p>
                </div>
            )
        }
        return (
            <div className="dashboard">
                <div className="dashboard-address">
                    <h3>{this.props.data.address}</h3>
                </div>
                <div className="dashboard--data">
                    {this.props.data.daily.map((item, i) => {
                        if(i < 8) {
                            if(i === 0) {
                                let today = this.getData(item)
                                return <DisplayTodayInfo key={i} today={today} currently={this.props.data}/>
                            } else {
                                let data = this.getData(item);
                                return <DailyData data={data} key={i} />
                            }
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    }
}

export default DisplayValues;