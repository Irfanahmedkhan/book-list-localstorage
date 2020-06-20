import React, { createContext, Component } from 'react';




export const Themecontext = createContext()

class Themecontextprovider extends Component {

    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    }

    changetheme = () => { 
        this.setState({isLightTheme : !this.state.isLightTheme})
    }


    render() {


        return (
            <Themecontext.Provider 
            value={{ ...this.state, changetheme: this.changetheme }}>

                {this.props.children}

            </Themecontext.Provider>
        )



    }
}






export default Themecontextprovider;