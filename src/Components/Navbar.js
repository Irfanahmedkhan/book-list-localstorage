import React, { useContext } from 'react'
import {BookContext} from '../Context/Bookcontext'

const Navbar = () => {

    const { Books } = useContext(BookContext)

    return (
        <div className='navbar'>
            <h1>React reading list</h1>
            <p>Learning Target : {Books.length}</p>

        </div>

    )
}

export default Navbar
