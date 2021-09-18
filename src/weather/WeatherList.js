import * as React from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl, SafeAreaView } from 'react-native';
import useWeather from './useWeather';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function WeatherList() {

  const { weather, isLoading } = useWeather();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={weather}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={<RefreshControl refreshing={isLoading} />}
          renderItem={({ item, index }) => (
            <View
              style={styles.weatherCard}>
              <View style={styles.weatherItem}>
                <Text style={styles.title}>{index + 1}</Text>
              </View>
              <View style={styles.weatherItem}>
                <Text style={styles.paragraph}>{`${item.humidity} %`}</Text>
                {item.weather === 'Clouds' ? (
                  <Icon name="cloud" size={30} color="blue" />
                ) : (
                  <Icon name="sun-o" size={30} color="orange" />
                )}
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  weatherCard: {
    flex: 1,
    backgroundColor: 'white',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherItem: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'center',
  },
});
