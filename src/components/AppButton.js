import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const AppButton = ({
  title,
  onPress,
  style = [],      // expect an array: [ baseContainerStyle, overrides ]
  textStyle = [],  // expect an array: [ baseTextStyle, overrides ]
  addIcon = null,  // optional icon component
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={textStyle}>{title}</Text>
      {addIcon && 
      <View style={{ marginLeft: 3 }}>
        {addIcon}
        </View>
        }
    </View>
  </TouchableOpacity>
);

export default AppButton;
