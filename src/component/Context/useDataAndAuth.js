import { useContext } from "react"
import  { myContext } from "./Contecxt"

const useDataAndAuth = () => {
    return useContext(myContext)
}
export default useDataAndAuth;