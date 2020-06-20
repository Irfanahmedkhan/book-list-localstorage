import React, {useContext} from 'react'
import { BookContext } from '../Context/Bookcontext'


const BookDetails = ({Books}) => {

    const {removeBook} = useContext(BookContext)

    return (
        <li onClick={() => removeBook(Books.id) }>
        <div className='title'> {Books.title} </div>
        <div className='author'> {Books.author} </div>
        </li>
    )
}

export default BookDetails

