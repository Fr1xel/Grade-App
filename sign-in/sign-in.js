import { StyleSheet, TouchableOpacity, Text, View, TextInput  } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.signInWrapper}>
      <Text style={styles.loginTitle}>Sign In</Text>
      <View style={styles.signInInputWrapper}>
        <TextInput style={styles.signInInput} returnKeyType="next"/>
        <Text style={styles.inputTitle}>First Name</Text>
        <TextInput style={styles.signInInput} returnKeyType="next" />
        <Text style={styles.inputTitle}>Last Name</Text>
        <TextInput style={styles.signInInput} returnKeyType="next" />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          secureTextEntry={true}
          on
          style={styles.signInInput}
          returnKeyType="done"
          textContentType="password"
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.SubmitButtonText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signInWrapper: {
    width: "85%",
    height: 500,
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
  signInInput: {
    width: "90%",
    fontSize: 20,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "blue",
  },
  signInInputWrapper: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
  },
  inputTitle: {
    color: "blue",
    fontSize: 20,
  },
  signInButton: {
    marginTop: 25,
    backgroundColor: "#06cc13",
    padding: 15,
    width: 100,
    borderRadius: 10,
  },
  SubmitButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
});
