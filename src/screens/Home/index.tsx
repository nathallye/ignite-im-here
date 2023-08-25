import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export const Home = () => {
  const participants = [
    "Nathallye Bacelar", 
    "Paulo Bacelar", 
    "Coquinho Bacelar", 
    "Lenilda Miranda", 
    "Isabel Souza", 
    "Luciana Sales"
  ];

  const handleParticipantAdd = () => {
    console.log("Adding...");
  };

  const handleParticipantRemove = (name: string) => {
    console.log("Acionando a função handleParticipantRemove via função onPress do TouchableOpacity.");
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
        />
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