import React, { useState } from "react";
import { Button, Menu } from "react-native-paper";

const DropdownMenu = ({ options }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOptionSelect = async (option) => {
    setSelectedOption((prev) => [...prev, option.id]);
    closeMenu();
  };

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Select Students</Button>}
      >
        {options.map((option, i) => (
          <Menu.Item
            key={option.id}
            onPress={() => handleOptionSelect(option)}
            title={option.Name}
          />
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
