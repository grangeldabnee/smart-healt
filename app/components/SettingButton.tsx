import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";



export default function SettingButton() {
    const [presionado,setPresionado]= useState(false);
    const router = useRouter();
    
    return (
            <View>
                <TouchableOpacity
                style={globalStyles.buttonCircleSetting} 
                onPress={() => setPresionado(!presionado)}>
                        <FontAwesome6 name="gear" size={50} color="grey" />
                    <Text style={{ color: "dart", fontWeight:"bold" }}>
                        {presionado ? "Precionado":"SETTINGS"}
                    </Text>
            </TouchableOpacity>
            </View>
    );
}
