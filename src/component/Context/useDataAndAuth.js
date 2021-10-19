import { useContext } from "react"
import Contecxt, { myContext } from "./Contecxt"

const useDataAndAuth = () => {
    return useContext(myContext)
}
export default useDataAndAuth;