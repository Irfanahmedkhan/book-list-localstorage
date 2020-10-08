import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/Bookcontext'


const Form = () => {

    const { addBook } = useContext(BookContext)

    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    console.log(title);

    const submitbook = (e) => {
        e.preventDefault()
        settitle('')
        setauthor('')
        addBook(title, author)
    }



    return (
<form onSubmit={submitbook}>
            <input type='text' required placeholder='Book Subject' value={title} onChange={(e) => settitle(e.target.value)} />
            <input type='text' required placeholder='Author Name' value={author} onChange={(e) => setauthor(e.target.value)} />
            <input type='submit' value='Add Book' />
</form>


    )
}

export default Form

