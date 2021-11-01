import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const Increment = ({value, incrementValue}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
        <Button onPress={incrementValue} title="Increment" />
      </View>
    );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(Increment);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#eee",
  },
});
