import * as React from 'react';
import useDatabase from '../utils/useDatabase';
import { useGetWeatherQuery } from './weatherService';

function useWeather() {
  const { data, status, error } = useGetWeatherQuery();
  const [weather, setWeather] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const db = useDatabase();

  React.useEffect(() => {
    const weatherList = []
    if (error) {
      console.log("error", error)
      db.transaction(function (txn) {
        txn.executeSql('SELECT * FROM `weather`', [], function (tx, res) {
          for (let i = 0; i < res.rows.length; ++i) {
            // console.log('item:', res.rows.item(i))
            weatherList.push(res.rows.item(i))
          }
          setWeather(weatherList);
          setIsLoading(false);
        })
      })
    } else if (data?.list) {
      db.transaction(function (txn) {
        txn.executeSql('DROP TABLE IF EXISTS Weather', [])
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS Weather(id INTEGER PRIMARY KEY NOT NULL, humidity VARCHAR(30), weather VARCHAR(30))',
          []
        )
        data.list.forEach(item => {
          txn.executeSql('INSERT INTO Weather (humidity, weather) VALUES (:humidity, :weather)', [item.main.humidity, item.weather[0].main])
          weatherList.push({ "humidity": item.main.humidity, "id": item.id, "weather": item.weather[0].main })
        })
        setWeather(weatherList);
        setIsLoading(false);
        // txn.executeSql('SELECT * FROM `Weather`', [], function (tx, res) {
        //   for (let i = 0; i < res.rows.length; ++i) {
        //     console.log('item:', res.rows.item(i))
        //   }
        // })
      })
    }
  }, [data, error])


  return { weather, isLoading };
}


export default useWeather;

