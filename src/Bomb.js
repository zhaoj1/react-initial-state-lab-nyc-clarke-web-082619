import React, { Component } from 'react'

export default class ImageSlider extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    tick() {
        this.setState(beforeSecLeft => {
            secondsLeft: beforeSecLeft - 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        if(this.state.secondsLeft > 0){
        return(
            <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        )}else{
            return <h1>Boom!</h1>
        }
    }

}