import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const SearchBarComp = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: -30,
  },
  searchBar: {
    borderRadius: 8,
    elevation: 2,
  },
});

export default SearchBarComp;
