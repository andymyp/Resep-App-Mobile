import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Theme from '../../components/Theme';
import CloseButton from './CloseButton';

const {width, height} = Dimensions.get('window');

const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email('Format email salah')
    .required('Tidak boleh kosong'),
});

const ForgotPassword = () => {
  const navigation = useNavigation();
  const footer = (
    <>
      <CloseButton to="Welcome" />
    </>
  );

  return (
    <Container radius="center" {...{footer}}>
      <View syles={styles.container}>
        <Text style={[styles.title, Theme.texts.title1]}>Lupa password?</Text>
        <Text style={[styles.subtitle, Theme.texts.body]}>
          Masukan email anda untuk mendapatkan link reset passsword
        </Text>
        <Formik
          initialValues={{email: ''}}
          validationSchema={ForgotSchema}
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
                  icon="email"
                  placeholder="Input email kamu"
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="Submit"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                  error={errors.email}
                  onSubmitEditing={() => handleSubmit()}
                />
                {errors.email && touched.email ? (
                  <Text style={Theme.texts.error}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={styles.submit}>
                <Button
                  label="Reset password"
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

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 21,
  },
  forgot: {
    alignItems: 'center',
  },
});
