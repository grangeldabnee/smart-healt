//import { Ionicons } from '@expo/vector-icons';
//import { Image } from 'expo-image';
//import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuHome from './screens/home';


export default function HomeScreen() {
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <MenuHome/>
    </SafeAreaView>
  );
}
