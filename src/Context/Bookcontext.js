import React, { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './localstorage'



export const BookContext = createContext()


const BookContextprovider = (props) => {

    const [Books, setBooks] = useLocalStorage('Books', [])

    // useEffect(() => {
    //     const localdata = localStorage.getItem('Books')
    //     if (localdata) {
    //         JSON.parse(localdata)
    //     }
    // },[])
 
    // useEffect(() => {
    //     localStorage.setItem('Books', JSON.stringify(Books))
    // })



    
    const addBook = (title, author,) => {
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
