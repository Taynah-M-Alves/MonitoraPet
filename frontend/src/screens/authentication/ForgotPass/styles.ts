import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 400,
    height: 200,
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
  },
  esqueciSenha: {
    color: '#2e6693',
    fontSize: 35,
    fontWeight: "bold",
    textTransform: 'uppercase',
    textShadowColor: '#d3d3d3',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
    shadowOpacity: 0.8,
    position: 'absolute',
    top: 275,
    justifyContent: 'center',
  },
  textoEmail: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 60,
    textTransform: 'uppercase',
    position: 'absolute',
    top: 340,
    fontWeight: 'bold',
    color: '#8b8b8b'
  }

 }
)