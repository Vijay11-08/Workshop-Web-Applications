import React ,{Component} from "react";

export default class LifeCycle extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           Demo : "God is great....!"
        };
    }
    componentWillMount()
    {
        console.log("Component will mount");
    }
    componentDidMount()
    {
        console.log("Component did mount");
    }
    changeState()
    {
        this.setState({Demo : "Time is Money....!"});
    }
    render(){
        return (
            <div>
                <h1>{this.state.Demo}</h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>
                        Click Me to Change The this.state.
                    </a>
                </h2>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("Should component update"); // return true to allow update, otherwise return false
    }

    componentWillUpdate()
    {
        console.log("Component will update");
    }
    componentDidUpdate()
    {
        console.log("Component did update");
    }
    componentWillUnmount()
    {
        console.log("Component will unmount");
    }


}