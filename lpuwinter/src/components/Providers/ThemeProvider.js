import React, { createContext } from 'react'
let myContextt = createContext()
function ThemeProvider({children}) {
  return (
    <div>
      <myContextt.Provider value={{}}>
         {children}
      </myContextt.Provider>
    </div>
  )
}

export default ThemeProvider
export {myContextt}