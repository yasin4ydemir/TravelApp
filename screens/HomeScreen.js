// screens/HomeScreen.js

import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Choose a Location</Text>
      <Button
        title="Go to Paris"
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })} 
      />
      <View style={{ height: 10 }} />
      <Button
        title="Go to London"
        onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
      />
    </View>
  );
}