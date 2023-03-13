import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Home Screen</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        Conheça o Sobre
      </Button>
    </View>
  );
}
