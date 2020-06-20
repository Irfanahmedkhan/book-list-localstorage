import React, { useState,useContext } from 'react';
import { Themecontext } from '../Context/Themecontext';
import { v4 as uuidv4 } from 'uuid';
import { Addbookcontext } from '../Context/Addbookcontext';

const Booklist =()=> {
    const { isLightTheme, light, dark } = useContext(Themecontext);
    const { book } = useContext(Addbookcontext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {book.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Booklist;

