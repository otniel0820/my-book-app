
import { StyleSheet, View } from 'react-native';
import Index from './src/navigation/Index';

const App=()=> {
  return (
  <View style={style.container}>

    <Index/>
  </View>
    )
}
const style =StyleSheet.create({
  container: {
    backgroundColor:'#ffffff',
    flex:1
  }
})
export default App
