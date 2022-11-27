import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";

export default function SignUp({ navigation }) {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <View style={styles.signUpScreen}>
      <View style={styles.signInWrapper}>
        <Text style={styles.loginTitle}>Sign Up</Text>
        <SignUpForm setIsSigned={setIsSigned} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpScreen: {
    display: "flex",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  signInWrapper: {
    width: "85%",
    height: 700,
    backgroundColor: "white",
    borderRadius: 10,
  },
  loginTitle: {
    color: "blue",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
