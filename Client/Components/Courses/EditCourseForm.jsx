import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button as ButtonRN,
} from "react-native";
import { Button, Menu } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postCourses, updateCourses } from "../../store/actions/actionCourses";

const EditCourseForm = ({ navigation, course }) => {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState(course ? course.CourseName : "");
  const students = useSelector((state) => state.students.data);
  const [studentName, setStudentName] = useState("");

  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(course ? course.Students : []);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOptionSelect = async (option) => {
    setSelectedId((prev) => [...prev, option.id]);
    console.log(selectedId);
    closeMenu();
  };

  const handleCourseSubmit = () => {
    console.log("Course Id:", course.id);
    console.log("Course Name:", courseName);
    console.log("Students:", selectedId);
    dispatch(
      updateCourses({
        id: course.id,
        CourseName: courseName,
        Students: selectedId,
      })
    );
    navigation.navigate("Course");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={courseName}
        onChangeText={setCourseName}
      />
      {selectedId?.map((item, index) => {
        const student = students.find((e) => e.id === item);
        return (
          <TextInput
            key={index}
            style={styles.disabled}
            value={student?.Name || item.Name.toString()}
            editable={false}
          />
        );
      })}

      <View style={styles.dropdownButton}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Select Students</Button>}
        >
          {students.map((student, i) => (
            <Menu.Item
              key={student.id}
              onPress={() => handleOptionSelect(student)}
              title={student?.Name}
            />
          ))}
        </Menu>
      </View>
      <ButtonRN title="Submit Course" onPress={handleCourseSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  studentsList: {
    marginTop: 10,
  },
  studentItem: {
    marginBottom: 5,
  },
  disabled: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#c5c5c5",
  },
  dropdownButton: {
    alignSelf: "flex-start",
    marginBottom: 15,
    borderStyle: "solid",
    borderColor: "#919191",
    borderWidth: 1,
  },
});

export default EditCourseForm;
