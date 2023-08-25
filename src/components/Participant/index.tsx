import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: (event: GestureResponderEvent) => void;
}

export const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
};