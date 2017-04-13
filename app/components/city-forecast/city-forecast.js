import styles from './city-forecast.css';
import React from 'react';
import LoadingContainer from '../loading/loading-container';
import DayForecast from '../day-forecast/day-forecast';

function CityForecast(props) {
  if (props.isLoading) {
    return (<LoadingContainer />);
  }

  return (
    <div className={styles.container}> 
      <h1 className={`${styles.cityName} h1`}> 
        {props.weatherData.cityName} 
      </h1>
      <div className={styles.dayList}>
        {props.weatherData.days.map((day, i) =>         
          <DayForecast 
            key={i}
            date={day.date}
            iconCode={day.iconCode}
            onClick={props.onDayClick.bind(null, day)}
          />)}
      </div>
    </div>
  );
}

CityForecast.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  weatherData: React.PropTypes.shape({
    cityName: React.PropTypes.string.isRequired,
    days: React.PropTypes.array.isRequired
  }),
  onDayClick: React.PropTypes.func.isRequired
  
};

export default CityForecast;
