import React, { useContext } from 'react'
import { BookContext } from '../Context/Bookcontext'
import BookDetails from './Bookdetail'


const BookList = () => {

    const { Books } = useContext(BookContext)



    return Books.length ? (

        <div className='book-list'>
            <ul>
                {Books.map(Books => { return (<BookDetails Books={Books} key={Books.id} />); })}
            </ul>
        </div>

    )
        :
        (
            <div className='empty'>No Target set ... </div>

        )
}

export default BookList