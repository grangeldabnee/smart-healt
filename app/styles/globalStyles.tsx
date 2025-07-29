import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#878686ff',
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textRegular: {
    fontSize: 16,
    color: '#121212ff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20, // Si tu versión de React Native lo soporta, si no usa margin en los botones
  },
  buttonCircleStar: {
    backgroundColor: '#f7f9f9ff',
    borderRadius: 900,
    padding: 10,
    width: 350,
    margin: 10, // Espacio entre botones
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonCircleStatistics: {
    backgroundColor: '#f7f9f9ff',
    borderRadius: 900,
    padding: 10,
    width: 350,
    margin: 10, // Espacio entre botones
    alignItems: 'center',
    justifyContent: 'center',
  },
      buttonCircleHeart: {
    backgroundColor: '#f7f9f9ff',
    borderRadius: 900,
    padding: 10,
    width: 350,
    margin: 10, // Espacio entre botones
    alignItems: 'center',
    justifyContent: 'center',
  },
        buttonCircleSetting: {
    backgroundColor: '#f7f9f9ff',
    borderRadius: 900,
    padding: 10,
    width: 350,
    margin: 10, // Espacio entre botones
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  
  icon: {
    width: 50,
    height: 50,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },


  
});

export default globalStyles;
