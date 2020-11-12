import React from 'react';
import {legendi} from './data/legendi';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';

class App extends React.Component {

    constructor(){
        super()
        this.state={
            legendi:legendi,
            searchfield:''
        }
    }

    onSearchChange=(event)=> {
        this.setState({searchfield: event.target.value})
    }


    render() {
        const filteredLegendi=this.state.legendi.filter(legenda=>{
            return legenda.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        return(

            <div className="tc">
            <h1 className="f1">Arsenal Legends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll >
            <CardList legendi={filteredLegendi}/>
            </Scroll>


            </div>
            );

        }
    }


export default App;
