import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 500,
    height: 300,
  },
  naoTemConta:{
    fontSize:20,
    alignSelf:'center',
    fontWeight:'600',
    marginVertical: 12,
  },
  signUpLink:{
    color:'#d47c2f',
  },
  button:{
    backgroundColor:'#2e6693',
    width: 300,
    alignSelf:'center',
    marginTop:18,
    alignItems:'center',
    padding: 10,
    borderRadius:10,
    elevation: 6,
    shadowColor:'black',
  },
  buttonLabel:{
    fontSize:22,
    color:'#fff'
  }
});
