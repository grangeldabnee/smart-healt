import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function StatisticsButtom(){
    
    const [presionado,setPresionado]= useState(false);
    const router = useRouter();

    return(
        <View>
            <TouchableOpacity
            style= {globalStyles.buttonCircleStatistics}
            onPress={()=> {setPresionado(!presionado)
                router.push('/screens/HistoryScreen')
            }}>
                <FontAwesome6 name="chart-simple" size = {50} color="dart"/>
                <Text style={{color: "dark", fontWeight: "bold"}}>{presionado ? "ENTRAMOS":"STATISTICS"}</Text>

            </TouchableOpacity>
        </View>
    )

}