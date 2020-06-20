import React, {useContext } from 'react'
import { Themecontext } from '../Context/Themecontext';
import { Authcontext } from '../Context/Authcontext';



const Navbar = () => {
    
    const {isAuthGood, authtoggle } = useContext(Authcontext)
    const {isLightTheme, light, dark, changetheme } = useContext(Themecontext)
    
    const theme = isLightTheme ? light : dark;
    

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1> Context App </h1>
    <div onClick = {authtoggle}>{isAuthGood ? 'Looged in' : 'Logged Out'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button onClick={changetheme}> change theme</button>

        </nav>

    )


}

export default Navbar;
