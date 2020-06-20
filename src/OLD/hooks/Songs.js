import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import Addsong from './addsong'


const Songs = () => {

    const [song, setsong] = useState([])

    const addsong = (title) => {
        setsong([...song, { title, id: uuidv4() }])
    }

    return (
        <div>
            <ul>
                {song.map(song => {
                    return <li key={song.id}>{song.title}</li>
                })}

            </ul>
            <Addsong addsong={addsong} />
        </div>
    )

}

export default Songs