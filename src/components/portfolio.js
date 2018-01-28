import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPortfolio } from '../store/action/action';

class Portfolio extends Component {
constructor(props){
    super(props)
    this.state={
        userNameInput: '',
        qualificationInput: '',
        contactInput: '',
    }

}
_userNameonChange(e){
    this.setState({
        userNameInput: e.target.value
    })
    console.log(e.target.value)
}
_qualificatononChange(e){
    this.setState({
        qualificationInput: e.target.value
    })
    console.log(e.target.value)
}
_contactonChange(e){
    this.setState({
        contactInput: e.target.value
    })
    console.log(e.target.value)
}
createPortfolio(){
    let createPortfolio={
        userName: this.state.userNameInput,
        qualification: this.state.qualificationInput,
        contact: this.state.contactInput
    }
    console.log(createPortfolio)
    this.setState({
        userNameInput: '',
        qualificationInput: '',
        contactInput: '',

    })
    let clone = this.props.currentPortfolio;
    clone.push(createPortfolio)
    this.props.pleaseCreateNewPortfolio(clone)
}
    render() {
        return (
            <div>
                <h1>Hello </h1>
                <h2>{this.props.currentPortfolio[0].userName}</h2>
                user Name: <input type='text' value={this.state.userNameInput} onChange={this._userNameonChange.bind(this)} />
                qualification: <input type='text' value={this.state.qualificationInput} onChange={this._qualificatononChange.bind(this)}/>
                contact <input type='text' value={this.state.contactInput} onChange={this._contactonChange.bind(this)}/>
<button onClick={this.createPortfolio.bind(this)}>Add Portfolio</button>
                {/* <Link to='/'>Go to Home</Link> */}
                {/* {this.props.currentPortfolio.map((portfolios,index)=>{
                    return(
                        <div key={index}>
                           <p>{this.props.currentPortfolio.userName}</p>
                           <p>{this.props.currentPortfolio.qualification}</p>
                           <p>{this.props.currentPortfolio.contact}</p>
                        
                        </div>
                    )
                })
                } */}
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        currentPortfolio: state.root.portfolios
    })
}
function mapDispatchToProps(dispatch){
    return({
        pleaseCreateNewPortfolio: (newPortfolio)=>{
            dispatch(createPortfolio(newPortfolio))
        }
    })
}


export default connect(mapStateToProp, mapDispatchToProps)(Portfolio);
