import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Button, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";

import { Text, View } from "../components/Themed";

export default function Postcode({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Postcode</Text>
      <Formik
        initialValues={{ postcode: "3" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, submitForm, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("postcode")}
              onBlur={handleBlur("postcode")}
              value={values.postcode}
            />
            <Button onPress={submitForm} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderColor: "#eeeeee",
    borderWidth: 2,
    padding: 10
    
  },
});
