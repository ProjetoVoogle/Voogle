import { useState } from "react";

function useToggle(initialState: boolean = false){
    const [isOpen, setIsOpen] = useState(initialState)

    const toggle = () => {
        setIsOpen(prevState => !prevState)
    }

    return {isOpen, toggle, setIsOpen}
}

export default useToggle