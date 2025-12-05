// screens/DetailsScreen.js

import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  const welcomeMessage = rating === 5
    ? `⭐ Welcome to ${place}! This is a 5-star must-see destination!`
    : `🗺️ Welcome to ${place}. A solid ${rating}-star location.`;
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, margin: 20, textAlign: 'center' }}>
        {welcomeMessage}
      </Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}