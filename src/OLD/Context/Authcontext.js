import React, { createContext, Component } from 'react'

export const Authcontext = createContext();

class Authcontextprovider extends Component {

    state = { isAuthGood: false }

    authtoggle = () => {

        this.setState({ isAuthGood: !this.state.isAuthGood })
    }

    render() {
            
        return (

            <Authcontext.Provider value={{ ...this.state, authtoggle: this.authtoggle }}>

            {this.props.children}

            </Authcontext.Provider>
        )
    }
}

export default Authcontextprovider;