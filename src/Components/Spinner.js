import React, { Component } from 'react'
import spinner from "../giphy.gif"

export default class Spinner extends Component {
    render() {
        return (
            <div className='container text-center'>
                <img src={spinner} alt="logo" height="50px" />
            </div>
        )
    }
}
