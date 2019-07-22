/*console.log("App.js is running");

let app = {
    title: "Visibility Toggle",
    toggle: false
}


const onToggle = () => {
    app.toggle = !app.toggle
    render()
}

const showDetails = (toggle) => {
    if(toggle){
        return <p>Here is some detials for you!!</p>
    }
}

const appRoot = document.getElementById("app");


const render = () => {

    let template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggle}>{app.toggle ? "Hide Detials" : "Show Details"}</button>
            {showDetails(app.toggle)}
        </div>
    )
        
    ReactDOM.render(template, appRoot);

}

render();*/


class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            toggle: false
        }

    }

    onToggle(){
        this.setState((prevState) => {        
            return {
                toggle: !prevState.toggle
            };
        });
    }

 

    render(){
        return(
        <div>
        
            <h1>Visibility Toggle</h1>
            <button onClick={this.onToggle}> {this.state.toggle ? "Hide Details" : "Show Details"}</button>
            <p>{this.state.toggle && "Here are some detials hidden from you"}</p>
        </div>
        )
    }

}

ReactDOM.render(<Visibility />, document.getElementById("app"));





