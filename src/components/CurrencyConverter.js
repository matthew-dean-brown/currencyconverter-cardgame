import React from 'react';
import '../App.css'


class CurrencyConverter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rand:0, 
            pound:0, 
            euro:0
        }
    }
    // set values ast the user enters a value
    onChangeMoney = e => {
        this.setState({
            rand: e.target.value * 15.22,
            pound: e.target.value* 0.82,
            euro: e.target.value* 0.90
            
        });
    }
    render(){
        return(
            <React.Fragment id='centre' >
                <h3>Currency Converter</h3>
                <hr/>
                <input type='text' onChange={(e) => this.onChangeMoney(e)}/>
                <br/><br/>
                <h5>Amount in Rands</h5>
                <p>R {(this.state.rand).toFixed(2)} </p>
                <h5>Amount in Pounds</h5>
                <p>$ {(this.state.pound).toFixed(2)} </p>
                <h5>Amount in Euros</h5>
                <p>€ {(this.state.euro).toFixed(2)} </p>
            </React.Fragment>
            
        )
    }
}
export default CurrencyConverter