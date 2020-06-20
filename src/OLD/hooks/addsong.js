import React, { useState } from 'react'


const Addsong = ({ addsong }) => {
    const [title, settitle] = useState('')

    const handlesubmit = (e) => { e.preventDefault()
        addsong(title)
        settitle('')


    }
    
    return (
        <form onSubmit={handlesubmit}>
            <label>Song name</label>
            <input type='text' value={title} required onChange={(e) => settitle(e.target.value)} />
            <input type='submit' value='Add song'/>
        </form>
    )
}

export default Addsong