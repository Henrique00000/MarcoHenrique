import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a About Screen</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Conheça o Sobre
      </Button>
    </View>
  );
}
