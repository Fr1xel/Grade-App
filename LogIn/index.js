import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import LogInForm from "./LogInForm";

export default function LogIn({ navigation }) {

  const [isSigned, setIsSigned] = useState(false);

  return (
    <View style={styles.logInWindow}>
      <View style={styles.logInContainer}>
        <Text style={styles.logInTitle}>Log In</Text>
        <LogInForm setIsSigned={setIsSigned} navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logInWindow: {
    display: "flex",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  logInContainer: {
    flex: 1,
    backgroundColor: "white",
    color: "purple",
    borderRadius: 10,
    width: "90%",
    marginTop: 50,
    marginBottom: 50,
  },
  logInTitle: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
  },
});
