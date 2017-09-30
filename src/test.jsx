import React, {Component} from 'react';

class DumbComponent extends Component {
    handleClick() {
        this
            .props
            .onClick();
    }
    render() {
        console.log(`render dumb`);
        return (
            <div onClick={this.handleClick}>
                I am dumb
            </div>
        );
    }
}

class SmartComponent extends Component {
    render() {
        let onClick = () => {
            console.log(`nothing happened`)
        };
        return (
            <div>
                <DumbComponent onClick={onClick}/>
                Click count: {this.props.count}
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    onAdd() {
        alert(10);
        const temp = this.state.count+1;
        this.setState({
            count: temp,
        });
    }
    render() {
        return (
            <div>
                
                <br/>
                <p>{this.state.count}</p>
                <button onClick={()=>this.onAdd()}>Add</button>
            </div>
        );
    }
}

export default App;
