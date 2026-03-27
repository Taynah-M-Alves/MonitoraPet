import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View, Platform, ScrollView } from 'react-native';
import { Input } from '../../../components/input';
import { styles } from './styles';

export function ResetPasswordScreen() {
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
                    labelProp='Nova Senha'
                    placeholderProp='Digite a nova senha'
                    keyboardTypeProp='default'
                    isPassword={true} />

                <Input
                    labelProp='Confirmar Senha'
                    placeholderProp='Digite a mesma senha'
                    keyboardTypeProp='default'
                    isPassword={true} />

                <TouchableOpacity>
                    <Text style={styles.LoginLink}>Lembrei a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonLabel}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </ScrollView>
        </KeyboardAvoidingView>
    );
}
