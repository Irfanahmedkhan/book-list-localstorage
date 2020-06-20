import React, { useState, createContext } from 'react'


export const Addbookcontext = createContext();

   const Addbookcontextprovider = (props) => {
      const [book, setBook] = useState([
         { title: 'name of the wind', id: 1 },
         { title: 'the way of kings', id: 2 },
         { title: 'the final empire', id: 3 },
         { title: 'the hero of ages', id: 4 }
      ]);
      return (
         <Addbookcontext.Provider value={{ book }}>
            
{props.children}

         </Addbookcontext.Provider>
      )
   }

   export default Addbookcontextprovider