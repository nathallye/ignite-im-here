import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>(["Nathallye Bacelar", "Paulo Bacelar"]);
  const [newParticipant, setNewParticipant] = useState<string>("");

  const handleParticipantAdd = () => {
    if (participants.includes(newParticipant)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com o nome informado.")
    }

    setParticipants([...participants, newParticipant]);
    setNewParticipant("");
  };

  const handleParticipantRemove = (name: string) => {
    const participantsFilter = participants.filter(participant => participant !== name);

    Alert.alert("Remover", `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(participantsFilter)
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 23 de Agosto de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={(e) => setNewParticipant(e)} 
          value={newParticipant}
        /> 
        {/*
          onChangeText - Para acessarmos o conteúdo digitado
            onChangeText={(e) => setNewParticipant(e)} - ou somente onChangeText={setNewParticipant}
          value - Vinculamos o valor do input ao estado
        */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evendo ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
};