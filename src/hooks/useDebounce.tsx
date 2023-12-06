import { useEffect, useState } from "react"

const useDebounce = (value:string,delay=1000) => {
    const[debounce,setDebounce]=useState(value)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebounce(value)
        },delay)
        return ()=>clearTimeout(timer)
    },[value,delay])
  return debounce
}

export default useDebounce