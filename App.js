import React, { Component } from 'react'
import { View, Text, StatusBar, TextInput, StyleSheet, FlatList } from 'react-native';

let data = [
  {todo: 'Organik', check: false},
  {todo: 'Za ', check: false},
  {todo: 'Npk Phonska', check: false},
  {todo: 'sp-36', check: false},
  {todo: 'Kalsium Klorida', check: false},
  {todo: 'Dolomite', check: false},
  {todo: 'Pupuk Kandang', check: false},
  {todo: 'Pupuk Kompos', check: false},
  {todo: 'Pupuk Hijau', check: false},
  {todo: 'Pupuk Hayati', check: false},
  {todo: 'Pupuk Serasah', check: false},
  {todo: 'Humus', check: false},
]


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newTodo: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#32cb00" barStyle="light-content" />
        <View style={{backgroundColor: '#76ff03' , paddingVertical: 15,elevation:11}}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>Farmer Fertilizer</Text>
        </View>

        <FlatList
        data={data}
        renderItem={({item}) =>
        <View style={styles.todo}>
          <Text style={styles.teks}>{item.todo} </Text>
        </View>
        }
        keyExtractor={item => item.todo}
        style={{flex: 1, backgroundColor: '#ede7f6'}}
        />
      
        <TextInput style={styles.input} value={this.state.newTodo} 
        onChangeText={(text) => this.setState({newTodo: text}) }
        placeholder={'Masukkan Todo Baru Disini'}  />

        

      </View>
      
    );
  }
}

export default App

 const styles = StyleSheet.create({
   input:{
    borderColor: '#76ff03',
    height: 65,
    padding: 15,
    borderBottomWidth: 3,
   },
   todo:{
     borderColor: '#76ff03',
     backgroundColor: '#FFFFFF',
     marginHorizontal: 20,
     marginVertical: 7,
     elevation: 1,
     borderWidth: 1,
     paddingVertical: 15,
     borderRadius: 10,
     elevation: 5,
   },
   teks:{
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
   },
 })
      
