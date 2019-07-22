console.log("App.js is running");

//JSX - JavaScript XML

let app = {
    title: "Indecision App",
    subtitle: "First React App!",
    options: []
};

let getOptions = (options) => {
    if(options.length > 0){
        return <p>Here are your options:</p>
    }
    else{
        return <p>Your options don't exsist!</p>
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";

        renderAgain();
    }
}

const resetArray = () => { 
    app.options = [];
    renderAgain();
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
}

const appRoot = document.getElementById("app");

const renderAgain = () => {

    let template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            {getOptions(app.options)}
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick = {resetArray}>Clear</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol> 
    
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );


    ReactDOM.render(template, appRoot);

}

renderAgain();







