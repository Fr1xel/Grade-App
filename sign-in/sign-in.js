import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <View style={styles.signInWrapper}>
      <Text style={styles.loginTitle}>Sign In</Text>
      <View style={styles.signInInputWrapper}>
        {errors.firstName?.message ? (
          <>
            <TextInput
              style={[styles.signInInput, styles.inputError]}
              returnKeyType="next"
              {...register("firstName")}
            />
            <Text style={styles.inputTitle}>First Name</Text>
            <Text style={styles.errorText}>Please Enter Your Name</Text>
          </>
        ) : (
          <>
          <TextInput
              style={styles.signInInput}
              returnKeyType="next"
              {...register("firstName")}
            />
            <Text style={styles.inputTitle}>First Name</Text>
          </>
        )}
        <TextInput
          style={styles.signInInput}
          returnKeyType="next"
          {...register("lastName")}
        />
        <Text style={styles.inputTitle}>Last Name</Text>
        <TextInput
          style={styles.signInInput}
          returnKeyType="next"
          {...register("email")}
        />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.signInInput}
          returnKeyType="done"
          textContentType="password"
          {...register("password")}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TouchableOpacity style={styles.signInButton} onPress={handleSubmit()}>
          <Text style={styles.SubmitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signInWrapper: {
    width: "85%",
    flex: 1,
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
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    fontSize: 18,
    color: "red"
  }
});
