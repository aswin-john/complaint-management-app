import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For input field icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // For social icons
import Feather from 'react-native-vector-icons/Feather'; // For social icons
import AntDesign from 'react-native-vector-icons/AntDesign'; // For social icons


// import CustomInput from '../../../components/CustomInput'; // Adjust the path as necessary


import {Alert} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


// import Styles from '../../../constants/Styles';
import AppButton from '../../../components/AppButton';
// import typography from '../../../constants/Typography';
// import Colors from '../../../constants/Colors';
// import useSignupScreenViewModel from '../viewmodel/SignupScreenViewModel';
import FormInputField from '../../../components/FormInputField';
import Styles from '../../../core/constants/Styles';
import Typography from '../../../core/constants/Typography';
import Colors from '../../../core/constants/Colors';
import useSignupScreenViewModel from './SignupScreenViewModel';
// import Colors from '../../../core/constants/Colors';




import signup1 from '../../../../assets/images/signupscreen/signup1.jpg';
// import CustomSwipeButton from '../../../components/CustomSwipeButton'; // Adjust the path as necessary
// import tablercheckbox from '../../../../assets/images/tablercheckbox.png';

const {width: screenWidth} = Dimensions.get('window');

const SignupScreenView = ({navigation}) => {
  const { form, handleChange } = useSignupScreenViewModel();
  const [termsModalVisible, setTermsModalVisible] = useState(false);

  const handlePress = () => {
    setTermsModalVisible(true);
  };

  // state object for the whole form
  // const [form, setForm] = useState({
  //   username: '',
  //   lastName: '',
  //   mobile: '',
  //   email: '',
  //   password: '',
  //   retypePassword: '',
  // });

  // // generic onChangeText handler
  // const handleChange = key => value =>
  //   setForm(prev => ({...prev, [key]: value}));

  console.log('form', form);

  const handleSignUp = async () => {
    const payload = {
      first_name: form.username,
      last_name: form.lastName,
      email: form.email,
      phone: form.mobile,
      password: form.password,
      confirm_password: form.retypePassword,
    };

    try {
      const response = await axios.post(
        'https://api-urbannest.webknots.com/api/v1/user/register/',
        payload,
        {headers: {'Content-Type': 'application/json'}},
      );

      // console.log('Response', response?.data?.data?.id);

      // assume 2xx → success
      navigation.navigate('AuthenticationScreenView', {
        email: response?.data?.data?.email,
        phone: response?.data?.data?.phone,
        id:response?.data?.data?.id
      });
    } catch (error) {
      // if server responded with error payload
      if (error.response) {
        const msg =
          error.response.data.message || JSON.stringify(error.response.data);
        Alert.alert('Registration failed', msg);
      } else {
        // network / unexpected
        Alert.alert('Error', error.message);
      }
    }
  };

  const headerContainerFunc = () => (
    <View style={Styles.headerImageContainer}>
      {/* <Image source={signup1} style={styles.image} /> */}
      <View style={styles.SignUpTextContainer}>
        <Text style={Typography.poppinsMedium24Primary}>Sign Up</Text>
      </View>
    </View>
  );

  const infoTextContainer = () => (
    <View style={styles.informationContainer}>
      <Text style={Typography.poppinsRegular12Black}>
        using your information's
      </Text>
    </View>
  );

  const TermsConditionFunc = () => (
    <View style={styles.termsContainer}>
      <View style={[styles.checkboxContainer]}>
        {/* <Image
          source={tablercheckbox}
          style={{width: 24, height: 24, marginRight: 10}}
        /> */}
      </View>
      <Text style={Typography.poppinsExtraLight12Black}>
        I have read and agreed to the{' '}
        <Text
          onPress={handlePress}
          style={[
            Typography.poppinsExtraLight12Primary,
            {textDecorationLine: 'underline'},
          ]}>
          Terms & condition and Privacy Policy
        </Text>
      </Text>
    </View>
  );

  const orDivider = () => (
    <View style={styles.orContainer}>
      <Text style={Typography.poppinsRegular8Grey5}>or</Text>
    </View>
  );

  const socialIcons = () => (
    <View style={styles.socialContainer}>
      <TouchableOpacity>
        <AntDesign
          name="google"
          size={25}
          color={Colors.black}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="instagram"
          size={25}
          color={Colors.black}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="facebook"
          size={25}
          color={Colors.black}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
    </View>
  );

  const LoginNavigationFunc = () => (
    <View style={styles.loginNavigationAccountContainer}>
      <Text style={[Typography.poppinsRegular10Black]}>
        Already have an Account?{' '}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreenView')}>
        <Text style={[Typography.poppinsMedium12Primary]}>Login</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      {headerContainerFunc()}
      {infoTextContainer()}
      {/* Login Form with Icons */}
      <View style={styles.formContainer}>
        {/* UserName */}
        <FormInputField
          containerStyle={styles.inputContainer}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={
            <Ionicons name="person-outline" size={15} color="#0659B2" />
          }
          placeholder="User name"
          value={form.username}
          onChangeText={handleChange('username')}
        />
        {/* LastName */}
        <FormInputField
          containerStyle={[styles.inputContainer, {marginTop: 10}]}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={
            <Ionicons name="person-outline" size={15} color="#0659B2" />
          }
          placeholder="Last name"
          value={form.lastName}
          onChangeText={handleChange('lastName')}
        />
        {/* Mobile No */}
        <FormInputField
          containerStyle={[styles.inputContainer, {marginTop: 10}]}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={
            <Ionicons name="person-outline" size={15} color="#0659B2" />
          }
          placeholder="Mobile no"
          value={form.mobile}
          onChangeText={handleChange('mobile')}
        />
        {/* Email */}
        <FormInputField
          containerStyle={[styles.inputContainer, {marginTop: 10}]}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={
            <Ionicons name="person-outline" size={15} color="#0659B2" />
          }
          placeholder="Email"
          value={form.email}
          onChangeText={handleChange('email')}
        />
        {/* Password */}
        <FormInputField
          containerStyle={[styles.inputContainer, {marginTop: 10}]}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={<AntDesign name="lock" size={15} color="#0659B2" />}
          placeholder="Password"
          secureTextEntry
          showEyeIcon
          EyeIcon={<Feather name="eye" size={20} color="#000" />}
          value={form.password}
          onChangeText={handleChange('password')}
        />
        {/* Retype Password */}
        <FormInputField
          containerStyle={[styles.inputContainer, {marginTop: 10}]}
          iconStyle={styles.icon}
          inputStyle={styles.inputWithIcon}
          Starticon={<AntDesign name="lock" size={15} color="#0659B2" />}
          placeholder="Retype Password"
          secureTextEntry
          showEyeIcon
          EyeIcon={<Feather name="eye" size={20} color="#000" />}
          value={form.retypePassword}
          onChangeText={handleChange('retypePassword')}
        />

        {TermsConditionFunc()}

        {/* Sign up Button */}
        <AppButton
          title="Sign Up"
          onPress={handleSignUp}
          style={[
            Styles.buttonContainer1,
            {marginTop: 30, width: 100, height: 30},
          ]}
          textStyle={[Typography.poppinsMedium12White]}
        />
        {orDivider()}
        {socialIcons()}
        {LoginNavigationFunc()}
      </View>

      <Modal
        visible={termsModalVisible}
        animationType="slide"
        transparent={false} // fullscreen by default
        onRequestClose={() => setTermsModalVisible(false)}>
        <View style={styles.fullscreenModal}>
          {/* <Image source={signup1} style={styles.image} /> */}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    borderColor: '#878686',
    borderRadius: 10,
  },
  icon: {
    marginLeft: 15,
  },
  inputWithIcon: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
    paddingRight: 35,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: '#0659B2',
    borderRadius: 3,
    marginRight: 2,
  },

  orContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  socialContainer: {
    width: '35%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },

  termsContainer: {
    paddingRight: 40,
    width: '100%',
    marginTop: 18,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxContainer: {
    justifyContent: 'flex-start',
  },
  fullscreenModal: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },

  formContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },

  loginNavigationAccountContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SignUpTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
  },

  headerImageContainer: {
    position: 'relative',
    width: '100%',
    height: 276,
  },

  informationContainer: {
    paddingLeft: 20,
    alignSelf: 'flex-start',
  },
});

export default SignupScreenView;
