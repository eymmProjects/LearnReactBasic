import React, {Component} from 'react';
import { PureComponent } from 'react/cjs/react.development';

class PureComp extends PureComponent {
    state ={
        name:'Lisa'
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.name === this.state.name){
    //         return false;
    //     }
    //     return true;
    // }

    render(){
        console.log('Render');
        return(
            <>
                <h3>{this.state.name}</h3>
                <button
                    onClick={
                        ()=> this.setState({name:'Steve'})
                    }
                >
                    Click to change 
                </button>
            </>
        

        )

        
    }

}


export default PureComp;