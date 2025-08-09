import React from 'react';
import { View, TextInput, Text } from 'react-native';

const FormInputField = ({
  containerStyle,
  iconStyle,
  inputStyle,
  Starticon,
  placeholder,
  placeholderTextColor = '#B5B5B5',
  secureTextEntry = false,
  showEyeIcon = false,
  EyeIcon,
  value,
  onChangeText,
  // new props:
  text,
  textStyle,
}) => {
  return (
    <View style={containerStyle}>
      {Starticon && <View style={iconStyle}>{Starticon}</View>}

      {text != null ? (
        <Text style={textStyle}>{text}</Text>
      ) : (
        <TextInput
          style={inputStyle}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      {showEyeIcon && EyeIcon && (
        <View style={{ position: 'absolute', right: 10, top: 10, bottom: 10 }}>
          {EyeIcon}
        </View>
      )}
    </View>
  );
};

export default FormInputField;
