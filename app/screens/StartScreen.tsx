import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function StartCronometro() {
  const [inicio, setInicio] = useState<number | null>(null);
  const [tiempo, setTiempo] = useState<number>(0);
  const [corriendo, setCorriendo] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
  const [tiempoFinal, setTiempoFinal] = useState<number | null>(null);
  const [historial, setHistorial] = useState<number[]>([]); // Nuevo estado para la tabla

  const startRun = () => {
    if (corriendo) return;

    const timestamp = Date.now();
    setInicio(timestamp);
    setTiempo(0);
    setTiempoFinal(null);
    setCorriendo(true);

    const id = setInterval(() => {
      setTiempo(Math.floor((Date.now() - timestamp) / 1000));
    }, 1000);
    setIntervalId(id);
  };

  const finishRun = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    if (inicio) {
      const tiempoFinalizado = Math.floor((Date.now() - inicio) / 1000);
      setTiempo(tiempoFinalizado);
      setTiempoFinal(tiempoFinalizado);
      setHistorial(prev => [...prev, tiempoFinalizado]); // Guarda en la tabla
    }

    setCorriendo(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>⏱ Duración: {tiempo} segundos</Text>
      <Button title="Iniciar" onPress={startRun} disabled={corriendo} />
      <Button title="Terminar" onPress={finishRun} disabled={!corriendo} />
      <Text style={styles.label}>
        ⏱ Finalizó: {tiempoFinal !== null ? `${tiempoFinal} segundos` : ""}
      </Text>
      <Text style={styles.label}>Historial de tiempos:</Text>
      <FlatList
        data={historial}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>{`#${index + 1}: ${item} segundos`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
});