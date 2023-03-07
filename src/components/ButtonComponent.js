import React, { Component } from 'react'
import {fetchPosts} from '../actions/postAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import "./home.css"

 class ButtonComponent extends Component {
    render() {
        return (
            <div >
                <button className='button' onClick={()=>this.props.fetchPosts()}>Click Me</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch){
 return bindActionCreators({fetchPosts: fetchPosts},dispatch)
}   

export default connect(null,matchDispatchToProps)(ButtonComponent)
