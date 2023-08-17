import * as React from "react";
import { Button, DataTable } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../store/actions/actionStudents";
const editIcon = <Icon name="edit" size={20} color="#900" />;
const addIcon = <Icon name="plus" size={12} color="#000000" />;

const TableComp = ({ navigation }) => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([8, 16]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, students?.length);

  const students = useSelector((state) => state.students.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getStudents());
  }, []);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <Button>Add Student {addIcon}</Button>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Student Name</DataTable.Title>
          <DataTable.Title numeric>Date Of Birth</DataTable.Title>
          <DataTable.Title numeric>Actions</DataTable.Title>
        </DataTable.Header>

        {students.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.Name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.DoB}</DataTable.Cell>
            <DataTable.Cell numeric>
              <View style={styles.hstack}>
                <Button
                  onPress={() => {
                    navigation.navigate("EditStudent", {
                      student: item,
                    });
                  }}
                >
                  {editIcon}
                </Button>
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  hstack: {},
});

export default TableComp;
