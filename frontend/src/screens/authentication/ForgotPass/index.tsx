import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { Input } from '../../../components/input';

export function ForgotPassScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/logo.jpeg')}
        style={styles.image}
        />

        <Text style={styles.esqueciSenha}>Esqueceu a senha?</Text>

        <Text style={styles.textoEmail}>Digite seu email para receber um email de redefinição de senha </Text>

        <View>
            <Input
                labelProp='Email'
                placeholderProp='Digite seu email'
                keyboardTypeProp= 'email-address'
                isPassword= {false}/>            
          
          <TouchableOpacity style={styles.botaoEmail}>
            <Text style={styles.enviarEmail}>Enviar Email</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}