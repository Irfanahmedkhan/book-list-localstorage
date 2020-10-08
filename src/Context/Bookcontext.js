import React, { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './localstorage'



export const BookContext = createContext()

const BookContextprovider = (props) => {
console.log(props);


    const [Books, setBooks] = useLocalStorage('Books', [])



    
    const addBook = (title, author,) => {
        console.log('contxt', title, author);
        setBooks([...Books, { title, author, id: uuidv4() }])
    }

    const removeBook = (id) => {
        setBooks(Books.filter(book => book.id !== id))

    }


    return (

        <BookContext.Provider value={{ Books, addBook, removeBook }}>

            {props.children}

        </BookContext.Provider>

    )
}

export default BookContextprovider
