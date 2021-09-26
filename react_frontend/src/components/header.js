import { Component } from "react";
import './header.css';
import '../App.css';
import FirstContract from './first_contract'
import Home from './home'

class Header extends Component {

    callFirstContract() {
        this.setState({
            home: false,
            fcontract : true,
            scontract : false,
            tcontract : false,
            focontract : false,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            home: true,
            fcontract : false,
            scontract : false,
            tcontract : false,
            focontract : false
        }
        this.callFirstContract = this.callFirstContract.bind(this)
    }

    render() {
        let rendering;
        if(this.state.fcontract) {
            rendering = <FirstContract></FirstContract>
        }
        else if (this.state.home) {
            rendering = <Home></Home>
        }
        return(
            <div>
            <header>
            <h1>Solidity</h1>
            <nav>
                <a href="#" onClick={this.callFirstContract}>First Contract</a>
                <a href=" ">Second Contract</a>
                <a href=" ">Third tab</a>
                <a href=" ">Fourth tab</a>
            </nav>
        </header>
        {rendering}
        </div>
        );
    }
}

export default Header;