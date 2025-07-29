//import { Ionicons } from '@expo/vector-icons';
//import { Image } from 'expo-image';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeartButton from '../components/HeartButton';
import SettingButton from '../components/SettingButton';
import Start from '../components/StartButton';
import StatisticsButtom from '../components/StatisticsButton';
import globalStyles from '../styles/globalStyles';

export default function MenuHome(){
    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.grid}>
                    <Start/>
                    <StatisticsButtom/>
                    <HeartButton/>
                    <SettingButton/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}