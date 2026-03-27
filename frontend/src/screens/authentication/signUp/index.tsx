import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View, ScrollView,KeyboardAvoidingView, Platform } from 'react-native';
import {Input} from '../../../components/input'
import {styles} from './styles'

export function SignUpScreen() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image 
          source={require('../../../../assets/logo.jpeg')}
          style={styles.image}
        />

        <View>
          <Input
          labelProp='Nome'
          placeholderProp='Digite seu nome completo'
          keyboardTypeProp= 'default'
          isPassword= {false} />

          <Input
          labelProp='CPF'
          placeholderProp='Digite seu CPF'
          keyboardTypeProp= 'numeric'
          isPassword= {false}/>

          <Input
          labelProp='Email'
          placeholderProp='Digite seu email'
          keyboardTypeProp= 'email-address'
          isPassword= {false}/>

          <Input
          labelProp='Senha'
          placeholderProp='Digite uma senha'
          keyboardTypeProp= 'default'
          isPassword= {true}/>

          <Input
          labelProp='Confirmar Senha'
          placeholderProp='Digite a mesma senha'
          keyboardTypeProp= 'default'
          isPassword= {true}/>

          <Text style={styles.tenhoLogin}>Já tem uma conta? <Text style={styles.LoginLink}>Login</Text></Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
        

      <StatusBar style="auto" />
    </ScrollView >
    </KeyboardAvoidingView>
  );
}


