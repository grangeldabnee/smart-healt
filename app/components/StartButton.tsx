import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";



export default function Start() {
    const [presionado,setPresionado]= useState(false);
    const router = useRouter();
    
    return (
            <View>
                <TouchableOpacity
                style={globalStyles.buttonCircleStar} 
                onPress={() =>{
                    setPresionado(!presionado)
                    router.push('/screens/StartScreen')
                    }}>
                        <FontAwesome6 name="circle-check" size={50} color="green" />
                    <Text style={{ color: "dart", fontWeight:"bold" }}>
                        {presionado ? "Precionado":"START"}
                    </Text>
            </TouchableOpacity>
            </View>
    );
}
