import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
  } from "react-native";
import { useState } from "react";

export const SignUpForm = ({ setIsSigned, navigation }) => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const [postError, setPostError] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const signUpSubmit = async (data) => {
    console.log(data);
    const user = await axios
      .post(`https://6df6-178-209-19-23.eu.ngrok.io/register`, data)
      .catch((err) => {
        setPostError(err.message);
        console.log(err);
      });
    if (user) {
      reset();
      setIsSigned(true);
      setPostError("");
    }
  };
  return (
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
      <Text onPress={() => navigation.navigate("Log In")} style={styles.link}>
        Already Have An Account?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
})