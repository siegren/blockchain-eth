import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import $ from 'jquery';

class AddSchool extends Component {
   constructor (props) {
    super (props);

//     const SchoolContract = window.web3.eth.contract ([
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_idnum",
//                 "type": "string"
//             }
//         ],
//         "name": "viewStudent",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "_address",
//                 "type": "address"
//             }
//         ],
//         "name": "getSchool",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "name": "isSaved",
//                 "type": "bool"
//             }
//         ],
//         "name": "savedSchool",
//         "type": "event"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_address",
//                 "type": "address"
//             },
//             {
//                 "name": "_school_name",
//                 "type": "string"
//             },
//             {
//                 "name": "_school_loc",
//                 "type": "string"
//             }
//         ],
//         "name": "setSchool",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_idno",
//                 "type": "string"
//             },
//             {
//                 "name": "_fname",
//                 "type": "string"
//             },
//             {
//                 "name": "_lname",
//                 "type": "string"
//             },
//             {
//                 "name": "_qual",
//                 "type": "string"
//             },
//             {
//                 "name": "_year",
//                 "type": "uint256"
//             }
//         ],
//         "name": "setStudent",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_idnum",
//                 "type": "string"
//             },
//             {
//                 "name": "_fname",
//                 "type": "string"
//             },
//             {
//                 "name": "_lname",
//                 "type": "string"
//             },
//             {
//                 "name": "_qual",
//                 "type": "string"
//             },
//             {
//                 "name": "_year",
//                 "type": "uint256"
//             }
//         ],
//         "name": "updateStudent",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     }
// ]);

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
      // ContractInstance: SchoolContract.at ('0x2dbbe3c16b088e332cdbe5cc9a2f88503bcff582')
           ContractInstance: SchoolContract.at ('0x8b3c3586e0f2f39d0197ec068c019704d1f3cdf8')
           // ContractInstance: SchoolContract.at ('0xe6364f68f1fb8fae1e8bde7d9638593fd17e0bec')
    }
  }

  addSchool(address, name, loc){
    const{ setSchool } = this.state.ContractInstance;

    setSchool(address, name, loc, (err, result) => {
      if(err) console.error('Error', err);
      console.log(String(result));
    })
  }

  viewSchool(address){
    const{ getSchool } = this.state.ContractInstance;

    getSchool(address, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
    })

  }

  // hideB(){
  //     $("#loading").hide();
  // }
  render() {
    //     const { savedSchool } = this.state.ContractInstance;
    // savedSchool().watch((err, result) => {
    //     if (!err){
    //         $("#loading").hide();
    //         console.log(result);
    //         console.log("hahaha");
    //     }else{
    //         $("#loading").hide();
    //         console.log(err);
    //           console.log("hohoho");
    //     }
    // });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qualification Ledger</h1>
        </header>
        <Nav />
        <p className="App-intro">
          Add New School<br />
        </p>
        <p id="loading">Loading</p>
        <input type="text" ref="address" placeholder="Enter address"/>
        <input type="text" ref="name" placeholder="Enter Name" />
        <input type="text" ref="loc" placeholder="Enter location" />
        <button onClick = {() => this.addSchool(this.refs.address.value, this.refs.name.value, this.refs.loc.value)}>Add School</button>
        <button onClick = {() => this.hideB()}>Hide</button>
      </div>
    );
  }
}

export default AddSchool;
