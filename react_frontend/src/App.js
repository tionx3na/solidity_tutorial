import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Web3 from 'web3';
import React, {Component} from 'react'

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.requestAccounts()
    this.setState({account: accounts[0]})
    console.log("account", accounts[0]) 
  }

  constructor(props) {
    super(props);
    this.state = {account: ''}
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Frontend to interact with Ethereum Smart contract.
          </p>
          <h6>
            Metamask Account: {this.state.account}
          </h6>
        </header>
      </div>
    );
  }
}

export default App;
