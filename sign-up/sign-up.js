import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUp({ navigation }) {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
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

  const signUpSubmit = async (data) => {
    console.log(data);
    const user = await axios
      .post(`https://grade-app-emel.herokuapp.com/register`, data)
      .catch((err) => {
        setPostError(err.message);
        console.log(err);
      });
    if (user) {
      reset();
      setpostError("");
    }
  };

  return (
    <View style={styles.signUpScreen}>
      <View style={styles.signInWrapper}>
        <Text style={styles.loginTitle}>Sign Up</Text>
        <View style={styles.signInInputWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                textContentType="name"
                style={styles.signInInput}
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
                {...register("firstName")}
              />
            )}
            name={"firstName"}
          />
          <Text style={styles.inputTitle}>First Name</Text>
          {errors.firstName?.message ? (
            <Text style={styles.errorText}>First Name Is A Required Field</Text>
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
                textContentType="familyName"
                onChangeText={onChange}
                value={value}
                style={styles.signInInput}
                returnKeyType="next"
                {...register("lastName")}
              />
            )}
            name="lastName"
          />
          <Text style={styles.inputTitle}>Last Name</Text>
          {errors.lastName?.message ? (
            <Text style={styles.errorText}>Last Name Is A Required Field</Text>
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
                textContentType="emailAddress"
                onChangeText={onChange}
                value={value}
                style={styles.signInInput}
                returnKeyType="next"
                {...register("email")}
              />
            )}
            name="email"
          />
          <Text style={styles.inputTitle}>Email</Text>
          {errors.email?.message ? (
            <Text style={styles.errorText}>{errors.email.message}</Text>
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
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
                style={styles.signInInput}
                returnKeyType="done"
                textContentType="password"
              />
            )}
            name="password"
          />
          <Text style={styles.inputTitle}>Password</Text>
          {errors.password?.message ? (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSubmit(signUpSubmit)}
          >
            <Text style={styles.SubmitButtonText}>Submit</Text>
          </TouchableOpacity>
          {postError ? (
            <Text style={styles.postErrorMessage}>{postError}</Text>
          ) : (
            <></>
          )}
          <Text
            onPress={() => navigation.navigate("Log In")}
            style={styles.link}
          >
            Already Have An Account?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpScreen: {
    flex: 1,
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
  errorText: {
    fontSize: 18,
    color: "red",
    textTransform: "capitalize",
  },
  postErrorMessage: {
    color: "red",
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  link: {
    fontSize: 20,
    color: "blue",
    marginTop: 10,
  },
});
