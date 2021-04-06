import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Theme from '../../components/Theme';
import SocialLogin from './SocialLogin';

const {width, height} = Dimensions.get('window');

const RegisterSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, 'Nama terlalu pendek')
    .max(50, 'Nama terlalu panjang')
    .required('Tidak boleh kosong'),
  email: Yup.string()
    .email('Format email salah')
    .required('Tidak boleh kosong'),
  password: Yup.string()
    .min(6, 'Password terlalu pendek')
    .max(20, 'Password terlalu panjang')
    .required('Tidak boleh kosong'),
  repassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password tidak cocok')
    .required('Tidak boleh kosong'),
});

const Register = () => {
  const refNext1 = useRef(TextInput);
  const refNext2 = useRef(TextInput);
  const refNext3 = useRef(TextInput);
  const navigation = useNavigation();
  const footer = (
    <>
      <SocialLogin />
      <View style={{alignItems: 'center'}}>
        <Button
          variant="transparent"
          onPress={() => navigation.navigate('Login')}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[Theme.texts.body, {color: Theme.colors.white}]}>
              Sudah punya akun?
            </Text>
            <Text
              style={[
                Theme.texts.body,
                {color: Theme.colors.primary, marginLeft: 5},
              ]}>
              Masuk
            </Text>
          </View>
        </Button>
      </View>
    </>
  );

  return (
    <Container radius="right" {...{footer}}>
      <View syles={styles.container}>
        <Text style={[styles.title, Theme.texts.title1]}>Buat akun baru</Text>
        <Formik
          initialValues={{nama: '', email: '', password: '', repassword: ''}}
          validationSchema={RegisterSchema}
          onSubmit={values => console.log(values)}>
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
                  icon="person"
                  placeholder="Input nama lengkap kamu"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="Next"
                  onChangeText={handleChange('nama')}
                  onBlur={handleBlur('nama')}
                  touched={touched.nama}
                  error={errors.nama}
                  onSubmitEditing={() => refNext1.current?.focus()}
                />
                {errors.nama && touched.nama ? (
                  <Text style={Theme.texts.error}>{errors.nama}</Text>
                ) : null}
              </View>
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
                  ref={refNext1}
                  onSubmitEditing={() => refNext2.current?.focus()}
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
                  returnKeyType="next"
                  returnKeyLabel="Next"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                  ref={refNext2}
                  onSubmitEditing={() => refNext3.current?.focus()}
                />
                {errors.password && touched.password ? (
                  <Text style={Theme.texts.error}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <TextInput
                  icon="lock-clock"
                  placeholder="Ulangi password kamu"
                  autoCompleteType="password"
                  returnKeyType="go"
                  returnKeyLabel="Submit"
                  secureTextEntry={true}
                  onChangeText={handleChange('repassword')}
                  onBlur={handleBlur('repassword')}
                  touched={touched.repassword}
                  error={errors.repassword}
                  ref={refNext3}
                  onSubmitEditing={() => handleSubmit()}
                />
                {errors.repassword && touched.repassword ? (
                  <Text style={Theme.texts.error}>{errors.repassword}</Text>
                ) : null}
              </View>
              <View style={styles.submit}>
                <Button
                  label="Daftar sekarang"
                  variant="primary"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    marginBottom: 10,
  },
  submit: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgot: {
    alignItems: 'center',
  },
});
