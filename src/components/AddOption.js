import React from "react";



export default class AddOption extends React.Component {

    state = {
        error: undefined
    }



    handleAddOption = (e) => {
        e.preventDefault();

        
        const option = e.target.optionEntered.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))
        
        if(!error){

            e.target.optionEntered.value = "";
            
        }
    } 

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name ="optionEntered"/>
                    <button>-+-Submit-+-</button>
                </form>
            </div>
        )
    }

}