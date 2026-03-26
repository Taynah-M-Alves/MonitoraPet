import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../../components/input'
import { styles } from './styles'

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/logo.jpeg')}
        style={styles.image}
      />

      <View>
        <Input
          labelProp='Email'
          placeholderProp='Digite seu email'
          keyboardTypeProp='email-address'
          isPassword={false} />

        <Input
          labelProp='Senha'
          placeholderProp='Digite sua senha'
          keyboardTypeProp='default'
          isPassword={true} />

        <Text style={styles.naoTemConta}>Não tem uma conta? <Text style={styles.signUpLink}>Cadastre-se</Text></Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
