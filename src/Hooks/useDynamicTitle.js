import { useEffect } from "react"


const useTitle = (title = 'Game Lab') => {
    useEffect(() => {
        document.title=`${title} | Game Lab`
    },[title])

}

export default useTitle;