/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


class Botao extends Component{
  constructor(props){
    super(props);
    this.state = {}

    let c = 1;
    if(props.c){
      c = parseInt(props.c);
    }

    let bg = "#E0E0E0";
    if(props.bg){
      bg = props.bg;
    }

    this.style = StyleSheet.create({
      area:{
        flex:c,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#999999',
        backgroundColor:bg
      },
      text:{
        fontSize:18
      }
    })
  }
  render(){
    return(
      <TouchableOpacity style={this.style.area} onPress={this.props.onPress}>
        <Text style={this.style.text}>{this.props.n}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props){
    super(props);

    

    this.state = {"resultado":'0',"anterior":''}

    this.btn = this.btn.bind(this);
  }

  btn(b){
    let s =  this.state;
    
   

    if(b == 'C'){
      s.resultado = '0';
    }else{
      if(b == '=' && (s.anterior != '.' && s.anterior != '/' && s.anterior != '*' && s.anterior != '+' && s.anterior != '-')){
        s.resultado = eval(s.resultado);
      }else{
        if(s.resultado == '0'){
          if(b != '.' && b != '/' && b != '*' && b != '+' && b != '-' && b != 'C' && b != '='){
            s.resultado = b;
            s.anterior = b;
          }
          
        }else{
          if(s.anterior == '.' || s.anterior == '/' || s.anterior == '*' || s.anterior == '+' || s.anterior == '-'){
            if(b != '.' && b != '/' && b != '*' && b != '+' && b != '-' && b != 'C' && b != '='){
              s.resultado += b;
              s.anterior = b;
            }
          }else{
            if(b == '.' || b == '/' || b == '*' || b == '+' || b == '-' || b == 'C' || b == '='){
              if(s.anterior == '1' || s.anterior == '2' || s.anterior == '3' || s.anterior == '4' || s.anterior == '5' || s.anterior == '6' || s.anterior == '7' || s.anterior == '8' || s.anterior == '9'){
                s.resultado += b;
                s.anterior = b;
              }
              
            }else{
              s.resultado += b;
              s.anterior = b;
            }

            
          }
        }
      }
    }

    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
          <View style={styles.linha}>
              <Text style={styles.res}>{this.state.resultado}</Text>      
          </View>
          <View style={styles.linha}>
            <Botao c="3" n="C" bg="#CCCCCC" onPress={() => {this.btn("C")}} />
            <Botao n="/" bg="#FD9536" onPress={() => {this.btn("/")}}/>
          </View>

          <View style={styles.linha}>
            <Botao n="7" onPress={() => {this.btn("7")}}/>
            <Botao n="8" onPress={() => {this.btn("8")}}/>
            <Botao n="9" onPress={() => {this.btn("9")}}/>
            <Botao n="*" bg="#FD9536" onPress={() => {this.btn("*")}}/>
          </View>

          <View style={styles.linha}>
            <Botao n="4" onPress={() => {this.btn("4")}}/>
            <Botao n="5" onPress={() => {this.btn("5")}}/>
            <Botao n="6" onPress={() => {this.btn("6")}}/>
            <Botao n="-" bg="#FD9536" onPress={() => {this.btn("-")}}/>
          </View>

          <View style={styles.linha}>
            <Botao n="1" onPress={() => {this.btn("1")}}/>
            <Botao n="2" onPress={() => {this.btn("2")}}/>
            <Botao n="3" onPress={() => {this.btn("3")}}/>
            <Botao n="+" bg="#FD9536" onPress={() => {this.btn("+")}}/>
          </View>

          <View style={styles.linha}>
            <Botao c="2"  n="0" onPress={() => {this.btn("0")}}/>
            <Botao n="." onPress={() => {this.btn(".")}}/>
            <Botao n="=" bg="#FD9536" onPress={() => {this.btn("=")}}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  linha:{
    flex:1,
    flexDirection:'row'
  },
  res:{
    backgroundColor:"#000000",
    color:"#FFFFFF",
    fontSize:50,
    flex:1,
    textAlign:"right",
    padding:10
  }
});
