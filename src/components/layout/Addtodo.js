import React, { Component } from 'react'

export default class Addtodo extends Component {

    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""})
    }

    changeform= (e) => {
        this.setState({title : e.target.value});
        console.log(this.state)

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex : '10', padding: '10px'}} value={this.state.title} onChange={this.changeform}/>
                <input type="submit" value="submit" className="btn" style={{flex: '1'}}/>

            </form>
        )
    }
}
