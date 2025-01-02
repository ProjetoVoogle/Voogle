import { useLocation } from "react-router-dom";

export default function getParam(param: string){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const item = queryParams.get(param)

    return item
}