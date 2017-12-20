import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';

class SearchStudent extends Component {
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

    this.state = {
    ContractInstance: SchoolContract.at ('0x8b3c3586e0f2f39d0197ec068c019704d1f3cdf8'),
      fname: '',
      lname: '',
      qual: '',
      year: '',
      school: ''
    }
  }

  searchStudent(idnum){
    const{ viewStudent } = this.state.ContractInstance;

    viewStudent(idnum, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
      this.setState({fname: result[1], lname: result[2], qual: result[3], year: result[4].toString(), school: result[5]});
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
        <p>First Name: {this.state.fname}</p>
        <p>Last Name: {this.state.lname}</p>
        <p>Qualification: {this.state.qual}</p>
        <p>Year Graduated: {this.state.year}</p>
        <p>Year Graduated: {this.state.school}</p>



      </div>
    );
  }
}

export default SearchStudent;
