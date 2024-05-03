import React from 'react'

export const myContext = React.createContext() ;

const MyContext = ({children}) => {
    const myobj = {
        myName : "Sambit" ,
        myparent : function(){
            console.log("parent func")
        } , 
        myChild : function(){
            console.log("child func") ;
        },
        myGrandChild : function(){
            console.log("Grandchild func") ;
        }
    }
  return (
    <myContext.Provider value={{myobj}}>{children}</myContext.Provider>
  )
}

export default MyContext ;