import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {connect} from 'react-redux';

import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Theme from '../../components/Theme';
import SocialLogin from './SocialLogin';

import Api from '../../service/Api';

const {width, height} = Dimensions.get('window');

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Format email salah')
    .required('Tidak boleh kosong'),
  password: Yup.string()
    .min(6, 'Password terlalu pendek')
    .max(20, 'Password terlalu panjang')
    .required('Tidak boleh kosong'),
});

const Login = props => {
  const refPassword = useRef(TextInput);
  const navigation = useNavigation();

  this.state = null;

  const login = values => {
    this.state = values;

    if (!props.network.isConnected) {
      alert('No Internet!');
    } else {
      const {email, password} = this.state;

      Api.login(email, password).then(result => {
        if (result.status == 'warning' || result.status == 'error') {
          alert(result.data.message);
        } else if (result.status == 'success') {
          props.login(result);

          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Main'}],
            }),
          );
        } else {
          alert('NETWORK ERROR');
        }
      });
    }
  };

  const footer = (
    <>
      <SocialLogin />
      <View style={{alignItems: 'center'}}>
        <Button
          variant="transparent"
          onPress={() => navigation.navigate('Register')}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[Theme.texts.body, {color: Theme.colors.white}]}>
              Belum punya akun?
            </Text>
            <Text
              style={[
                Theme.texts.body,
                {color: Theme.colors.primary, marginLeft: 5},
              ]}>
              Daftar
            </Text>
          </View>
        </Button>
      </View>
    </>
  );

  return (
    <Container radius="left" {...{footer}}>
      <View syles={styles.container}>
        <Text style={[styles.title, Theme.texts.title1]}>Selamat datang</Text>
        <Text style={[styles.subtitle, Theme.texts.body]}>
          Masukan email dan password kamu untuk masuk ke akun kamu
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={values => login(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.input}>
                <TextInput
                  icon="email"
                  placeholder="Input email kamu"
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="Next"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                  error={errors.email}
                  onSubmitEditing={() => refPassword.current?.focus()}
                />
                {errors.email && touched.email ? (
                  <Text style={Theme.texts.error}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <TextInput
                  icon="lock"
                  placeholder="Input password kamu"
                  autoCompleteType="password"
                  returnKeyType="go"
                  returnKeyLabel="Submit"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                  ref={refPassword}
                  onSubmitEditing={() => handleSubmit()}
                />
                {errors.password && touched.password ? (
                  <Text style={Theme.texts.error}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={styles.submit}>
                <Button
                  label="Masuk"
                  variant="primary"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.forgot}>
          <Button
            variant="transparent"
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: Theme.colors.blackLight08}}>
              Lupa password?
            </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
  },
  submit: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  forgot: {
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    network: state.network,
  };
};

const mapDispatchToProps = dispatch => {
  const {actions} = require('../../store/reducer/auth');

  return {
    login: user => dispatch(actions.login(user)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
