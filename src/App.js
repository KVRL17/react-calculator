import React, { Component } from "react";
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class App extends Component {
  constructor(){
    super()
    this.state={
        value : ''
    }
}
 clear = () => {
    this.setState({
        value : ''
    })
}
percent = () => {
    this.setState({
        value : this.state.value + '%'
    })
}
divide = () => {
    this.setState({
        value : this.state.value + '/'
    })
}
seven = () => {
    this.setState({
        value : this.state.value + '7'
    })
}
eight = () => {
    this.setState({
        value : this.state.value + '8'
    })
}
nine = () => {
    this.setState({
        value : this.state.value + '9'
    })
}
multify = () => {
    this.setState({
        value : this.state.value + '*'
    })
}
four = () => {
    this.setState({
        value : this.state.value + '4'
    })
}
five = () => {
    this.setState({
        value : this.state.value + '5'
    })
}
six = () => {
    this.setState({
        value : this.state.value + '6'
    })
}
minus = () => {
    this.setState({
        value : this.state.value + '-'
    })
}
one = () => {
    this.setState({
        value : this.state.value + '1'
    })
}
two = () => {
    this.setState({
        value : this.state.value + '2'
    })
}
three = () => {
    this.setState({
        value : this.state.value + '3'
    })
}
plus = () => {
    this.setState({
        value : this.state.value + '+'
    })
}
dzero = () => {
    this.setState({
        value : this.state.value + '00'
    })
}
zero = () => {
    this.setState({
        value : this.state.value + '0'
    })
}
exp = () => {
    this.setState({
        value : this.state.value + '.'
    })
}
equals = () => {
        try {
         const  result = eval(this.state.value);
            this.setState({
                value: result.toString(),
            });
        } catch (error) {
            this.setState({
                value: "Error",
            });
        }
}
remove = () => {
  const  remo = this.state.value
  const  len = remo.length
    let a=remo.substring(0,len-1)
    this.setState({
       value : a,
    }
)}
render(){
  return (
    <div className="App">
      <table border={2} className="table">
        <tr>
        <td colspan='4'>
        <TextField id="outlined-basic" label="" variant="outlined" value={this.state.value}/>
        </td>
        </tr>
        <tr>
          <td><Button variant="outlined" onClick={this.clear}>C</Button></td>
          <td><Button variant="outlined" onClick={this.percent}>%</Button></td>
          <td><Button variant="outlined" onClick={this.remove}>R</Button></td>
          <td><Button variant="outlined" onClick={this.divide}>/</Button></td>
        </tr>
        <tr>
          <td><Button variant="outlined" onClick={this.seven}>7</Button></td>
          <td><Button variant="outlined" onClick={this.eight}>8</Button></td>
          <td><Button variant="outlined" onClick={this.nine}>9</Button></td>
          <td><Button variant="outlined" onClick={this.multify}>*</Button></td>
        </tr>
        <tr>
          <td><Button variant="outlined" onClick={this.four}>4</Button></td>
          <td><Button variant="outlined" onClick={this.five}>5</Button></td>
          <td><Button variant="outlined" onClick={this.six}>6</Button></td>
          <td><Button variant="outlined">-</Button></td>
        </tr>
        <tr>
          <td><Button variant="outlined" onClick={this.one}>1</Button></td>
          <td><Button variant="outlined" onClick={this.two}>2</Button></td>
          <td><Button variant="outlined" onClick={this.three}>3</Button></td>
          <td><Button variant="outlined" onClick={this.plus}>+</Button></td>
        </tr>
        <tr>
          <td><Button variant="outlined" onClick={this.dzero}>00</Button></td>
          <td><Button variant="outlined" onClick={this.zero}>0</Button></td>
          <td><Button variant="outlined" onClick={this.exp}>.</Button></td>
          <td><Button variant="outlined" onClick={this.equals}>=</Button></td>
        </tr>
      </table>
    </div>
  );
}
}

export default App;
