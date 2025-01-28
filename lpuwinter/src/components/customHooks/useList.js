import { useState } from "react";

const useList = ()=>{
    const [list, setList] = useState(["HTML","CSS","JS"]);
    const push =(item)=>{
        // setList([...list, item]);
        let newList = list.concat(item)
        setList(newList)
    }
    const pull = (index)=>{
     let newList = list.filter((item,i)=>{
        return i !== index
     })
     setList(newList)
    }
    return {
        list,
        push,
        pull
    }
}
export default useList;