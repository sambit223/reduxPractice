import React  , {useContext} from 'react'
import { myContext } from './MyContext'

const Parent = () => {
    const info = useContext(myContext) ;
    console.log(info.myobj.myName) ;
  return (
    <div>{info?.myobj?.myName}</div>

  )
}

export default Parent