import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './components/Superman';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';
export default function App() {
  return (
    <View style={styles.container}>
      <Red />
      <Green />
      <Blue />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column-reverse',
  },
});
