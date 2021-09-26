import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Web3 from 'web3';
import React, {Component} from 'react'
import {first_contract_address, first_contract_abi} from '../config'

class FirstContract extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.requestAccounts()
    this.setState({account: accounts[0]})
    const firstContract = new web3.eth.Contract(first_contract_abi, first_contract_address)
    this.setState({firstContract})
    const getvalue = await firstContract.methods.get().call()
    this.setState({getvalue})
  }

  async valueSet(valuefromrender, firstContract) {
    const value = valuefromrender
    console.log(value)
    const result = await firstContract.methods.set(value).send({from : this.state.account})
    console.log(result)
  }

  updateValue(evt) {
    this.setState({
      newValue: evt.target.value
    })
  }

  refreshPage() {
    window.location.reload(false);
  }

  constructor(props) {
    super(props);
    this.state = {
      firstContract: '',
      account: '',
      getvalue: '',
      newValue: ''
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Frontend to interact with Ethereum Smart contract.
          </p>
          <br></br>
          <br></br>
          <h6>
            Metamask Account: {this.state.account}
          </h6>
          <br></br>
          <h6>
            Current value: {this.state.getvalue}
          </h6>
          <h6>
            Enter new value: <input value = {this.state.newValue} onChange = {evt => this.updateValue(evt)}/>
          </h6>
          <button onClick = {() => this.valueSet(this.state.newValue, this.state.firstContract)}>Submit</button>
          <br></br>
          <button onClick={this.refreshPage}>Refresh</button>
        </header>
      </div>
    );
  }
}

export default FirstContract;
