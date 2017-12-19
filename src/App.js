import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);

    const SchoolContract = window.web3.eth.contract ([
    {
        "constant": true,
        "inputs": [
            {
                "name": "_idnum",
                "type": "string"
            }
        ],
        "name": "viewStudent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getSchool",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            },
            {
                "name": "_school_name",
                "type": "string"
            },
            {
                "name": "_school_loc",
                "type": "string"
            }
        ],
        "name": "setSchool",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idno",
                "type": "string"
            },
            {
                "name": "_fname",
                "type": "string"
            },
            {
                "name": "_lname",
                "type": "string"
            },
            {
                "name": "_qual",
                "type": "string"
            },
            {
                "name": "_year",
                "type": "uint256"
            }
        ],
        "name": "setStudent",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idnum",
                "type": "string"
            },
            {
                "name": "_fname",
                "type": "string"
            },
            {
                "name": "_lname",
                "type": "string"
            },
            {
                "name": "_qual",
                "type": "string"
            },
            {
                "name": "_year",
                "type": "uint256"
            },
            {
                "name": "_school",
                "type": "string"
            }
        ],
        "name": "updateStudent",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]);

    this.state = {
      ContractInstance: SchoolContract.at ('0xa370d8966f81f0bc350bf8410415d83308a537e9')
    }
  }

  addSchool(address, name, loc){
    const{ setSchool } = this.state.ContractInstance;

    setSchool(address, name, loc, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result[0]);
    })
  }

  viewSchool(address){
    const{ getSchool } = this.state.ContractInstance;

    getSchool(address, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
    })

  }

 // updateSchool(address){
//    const{ editaddress } = this.state.ContractInstance;

 //   editidno(address, (err, result) => {
 //     if(err) console.error('All fields Required', err);
  //    console.log(result);
 //   })
 // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Verify Your Student</h1>
        </header>
        <p className="App-intro">
          To get started, Log to your metamask and copy address.
        </p>
        <input type="text" ref="address" placeholder="Enter address"/>
        <input type="text" ref="name" placeholder="Enter Name" />
        <input type="text" ref="loc" placeholder="Enter location" />
        <button onClick = {() => this.addSchool(this.refs.address.value, this.refs.name.value, this.refs.loc.value)}>Add School</button>
        <button onClick = {() => this.viewSchool(this.refs.address.value)}> view School </button>
      </div>
    );
  }
}

export default App;
