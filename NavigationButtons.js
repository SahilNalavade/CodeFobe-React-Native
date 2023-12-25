import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationButtons = ({ onPrevious, onNext }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonPrevious} onPress={onPrevious}>
        <Text style={[styles.buttonText, { color: '#151b20' }]}>Previous</Text>
      </TouchableOpacity>
      <View style={styles.spacing}></View>
      <TouchableOpacity style={styles.buttonNext} onPress={onNext}>
        <Text style={[styles.buttonText, { color: '#edeff4' }]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  spacing: {
    width: 110, // Adjust the width for the desired spacing
  },
  buttonPrevious: {
    backgroundColor: '#edeff4',
    padding: 15,
    borderRadius: 30,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,  // Add border width
    borderColor: '#bdc3c7',  // Add border color
  },
  buttonNext: {
    backgroundColor: '#151b20',
    padding: 15,
    borderRadius: 30,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,  // Add border width
    borderColor: '#bdc3c7',  // Add border color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NavigationButtons;
