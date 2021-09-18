import SQLite from 'react-native-sqlite-2'

function useDatabase() {
    const db = SQLite.openDatabase('weather.db', '1.0', '', 1)
    return db;
}

export default useDatabase;