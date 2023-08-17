import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const ReusableForm = ({ student }) => {
  const [studentId, setStudentId] = useState(student?.id);
  const [name, setName] = useState(student?.Name);
  const [dob, setDob] = useState(student?.DoB);

  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={[styles.container]}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <View style={styles.hstack}>
        <TextInput
          label="Date of Birth"
          value={dob}
          onChangeText={(text) => setDob(text)}
          style={{ width: "60%" }}
        />

        <Button mode="outlined" onPress={() => setShowDatePicker(true)}>
          Pick Date
        </Button>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, selected) => {
              if (selected) {
                setDob(selected.toISOString().split("T")[0]);
              }
              setShowDatePicker(false);
            }}
          />
        )}
      </View>

      <Button
        mode="contained"
        onPress={() => {
          handleSave();
        }}
      >
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  hstack: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ReusableForm;
