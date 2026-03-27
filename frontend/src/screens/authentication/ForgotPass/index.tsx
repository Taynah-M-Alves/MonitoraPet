import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import {styles} from './styles'
import { Input } from '../../../components/input';

export function ForgotPassScreen() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../../assets/logo.jpeg')}
        style={styles.image}
        />

        <Text style={styles.esqueciSenha}>Esqueceu a senha?</Text>

        <Input
          labelProp='Email'
          placeholderProp='Digite seu email'
          keyboardTypeProp= 'email-address'
          isPassword= {false}/>            
          
        <TouchableOpacity style={styles.botaoEmail}>
          <Text style={styles.enviarEmail}>Enviar Email</Text>
        </TouchableOpacity>

    </ScrollView>
    </KeyboardAvoidingView>
  );
}