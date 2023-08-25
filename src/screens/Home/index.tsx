import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export const Home = () => {
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

      <Participant name="Nathallye Bacelar" onRemove={() => handleParticipantRemove("Nathallye Bacelar")} />
      <Participant name="Paulo Bacelar" onRemove={() => handleParticipantRemove("Paulo Bacelar")} />
      <Participant name="Cocadinha Bacelar" onRemove={() => handleParticipantRemove("Cocadinha Bacelar")} />
    </View>
  )
};