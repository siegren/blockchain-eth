import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';

class UpdateStudent extends Component {
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
// 0x8b3c3586e0f2f39d0197ec068c019704d1f3cdf8

    this.state = {
      // ContractInstance: SchoolContract.at ('0x2dbbe3c16b088e332cdbe5cc9a2f88503bcff582')
       ContractInstance: SchoolContract.at ('0x8b3c3586e0f2f39d0197ec068c019704d1f3cdf8')
    }
  }

  editStudent(idnum, fname, lname, qual, year){
    const{ updateStudent } = this.state.ContractInstance;

    updateStudent(idnum, fname, lname, qual, year, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
    })

  }

  searchStudent(idnum){
    const{ viewStudent } = this.state.ContractInstance;

    viewStudent(idnum, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
      this.txtFname.value = result[1];
      this.txtLname.value = result[2];
      this.txtQual.value = result[3];
      this.txtYear.value = result[4].toString();
      
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qualification Ledger</h1>
        </header>
        <Nav />
        <p className="App-intro">
          Add New Student<br />
        </p>
        <input type="text" ref="idnum" placeholder="ID Number"/>
        <button onClick = {() => this.searchStudent(this.refs.idnum.value)}>Search Student</button>
        <input type="text" ref={(input) => { this.txtFname = input; }} placeholder="First Name"/>
        <input type="text" ref={(input) => { this.txtLname = input; }} placeholder="Last Name"/>
        <input type="text" ref={(input) => { this.txtQual = input; }} placeholder="Qualification"/>
        <input type="text" ref={(input) => { this.txtYear = input; }} placeholder="Year Graduated"/>
        <button onClick = {() => this.editStudent(this.refs.idnum.value, this.txtFname.value, this.txtLname.value, this.txtQual.value, this.txtYear.value)}>Update Student</button>
      </div>
    );
  }
}

export default UpdateStudent;
