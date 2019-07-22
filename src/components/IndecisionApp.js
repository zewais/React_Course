import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"


class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }


    handleClearSelected = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    
    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}))

    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }


    handlePick = () => {
        
        const randIndex = Math.floor(Math.random()*this.state.options.length);
        const pick = this.state.options[randIndex];
        this.setState(() => ({
            selectedOption: pick
        }))

    }


    handleAddOption = (option) => {

        if(!option){
            return "Enter valid value to add item"
        }
        else if(this.state.options.indexOf(option) > -1){
            return "This option already exsists!!"
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    componentDidMount(){
        
        try {

        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if(options){
            this.setState(() => ({options})); 
        }
            
        } catch (error) {
            
        }

        
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        
    }
    



    render(){
        
        
        const subtitle = " Put your live in the hands of a computer!"
        //const options = ["ThingOne", "ThingTwo", "ThingFour"]
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick={this.handlePick}
                />
                <Options 
                options= {this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />

                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelected={this.handleClearSelected}
                />
            </div>
        )
    }
}

export default IndecisionApp;