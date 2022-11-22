import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function LogIn({ navigation }) {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const [postError, setPostError] = useState("");
  const [isSigned, setIsSigned] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const LogInHandler = async (data) => {
    const user = await axios
      .post("https://grade-app-emel.herokuapp.com/login", data)
      .catch((err) => {
        setPostError(err.message);
        console.log(err.message);
      });
    if (user) {
      reset();
      setPostError("");
      setIsSigned(true);
      setIsSigned(true)
      console.log(user);
    }
  };

  return (
    <View style={styles.logInWindow}>
      <View style={styles.logInContainer}>
        <Text style={styles.logInTitle}>Log In</Text>
        <View style={styles.logInInputWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.logInInput}
                textContentType="emailAddress"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
          />
          <Text style={styles.logInInputTitle}>Email</Text>
          {errors?.email ? (
            <Text style={styles.inputErrorMessage}>{errors.email.message}</Text>
          ) : (
            <></>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.logInInput}
                value={value}
                onChangeText={onChange}
                textContentType="password"
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          <Text style={styles.logInInputTitle}>Password</Text>
          {errors?.password ? (
            <Text style={styles.inputErrorMessage}>
              {errors.password.message}
            </Text>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={styles.logInSubmitButton}
            onPress={handleSubmit(LogInHandler)}
          >
            <Text style={styles.logInSubmitButtonText}>Submit</Text>
          </TouchableOpacity>
          {postError ? (
            <Text style={styles.postError}>{postError}</Text>
          ) : (
            <></>
          )}
          <Text
            onPress={() => navigation.navigate("Sign Up")}
            style={styles.link}
          >
            Dont Have An Account?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logInWindow: {
    flex: 1,
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
  logInInput: {
    width: "90%",
    fontSize: 20,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "purple",
  },
  logInInputWrapper: {
    flex: 1,
    marginLeft: 20,
    marginTop: 30,
  },
  logInInputTitle: {
    fontSize: 20,
    color: "purple",
    marginTop: 5,
  },
  logInSubmitButton: {
    padding: 15,
    marginTop: 15,
    width: "30%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  logInSubmitButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  inputErrorMessage: {
    color: "red",
    fontSize: 20,
    textTransform: "capitalize",
  },
  postError: {
    color: "red",
    fontSize: 15,
    marginTop: 5,
  },
  link: {
    fontSize: 20,
    color: "purple",
    marginTop: 10,
  },
});
