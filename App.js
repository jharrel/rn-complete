import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{}}>
        <TextInput placeholder="Course Goal" 
        style={{borderColor: 'black', borderWidth: 1 }} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
