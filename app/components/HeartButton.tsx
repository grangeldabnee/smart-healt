import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";



export default function HeartButton() {
    const [presionado,setPresionado]= useState(false);
    const router = useRouter();
    
    return (
            <View>
                <TouchableOpacity
                style={globalStyles.buttonCircleStar} 
                onPress={() => setPresionado(!presionado)}>
                        <FontAwesome6 name="heart-circle-bolt" size={50} color="red" />
                    <Text style={{ color: "dart", fontWeight:"bold" }}>
                        {presionado ? "Precionado":"HEART"}
                    </Text>
            </TouchableOpacity>
            </View>
    );
}
