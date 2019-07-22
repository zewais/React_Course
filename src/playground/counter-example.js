/*let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const subOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}




const appRoot = document.getElementById("app");



const renderCounterApp = () => {

    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {subOne}>-1</button>
            <button onClick = {reset}>reset</button>
    
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();*/





class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        const count = parseInt(localStorage.getItem("counter"));
        if(!isNaN(count)){
            this.setState(() => ({count}))
            console.log(count);
        
        }
        
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("Updatedddddd");
            localStorage.setItem("counter", this.state.count);  
        }
        
        
    }

    handleAddOne() {

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

    }

    handleSubOne() {

        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })

    }

    handleReset() {

        this.setState(() => {
            return {
                count: 0
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}





ReactDOM.render(<Counter />, document.getElementById("app"));