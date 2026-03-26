import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../../components/input';
import { styles } from './styles';

export function ResetPasswordScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/logo.jpeg')}
                style={styles.image}
            />

            <View>
                <Input
                    labelProp='Nova Senha'
                    placeholderProp='Digite a nova senha'
                    keyboardTypeProp='default'
                    isPassword={true} />

                <Input
                    labelProp='Confirmar Senha'
                    placeholderProp='Digite a mesma senha'
                    keyboardTypeProp='default'
                    isPassword={true} />

                <Text style={styles.voltarLogin}>Lembrei a senha? <Text style={styles.LoginLink}>Entrar</Text></Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonLabel}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
