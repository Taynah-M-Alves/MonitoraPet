import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    textShadowColor: '#d3d3d3',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
    shadowOpacity: 0.8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  botaoEmail:{
    backgroundColor:'#2e6693',
    width: 300,
    alignSelf:'center',
    marginTop:20,
    padding: 15,
    borderRadius:10,
    elevation: 6,
    shadowColor:'black',
  },
  enviarEmail:{
    fontSize: 17,
    color: '#fff',
    fontWeight:'bold',
    textTransform: 'uppercase',
    textShadowColor: '#21384b',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
    shadowOpacity: 0.8,
    textAlign: 'center',
  },
 }
)