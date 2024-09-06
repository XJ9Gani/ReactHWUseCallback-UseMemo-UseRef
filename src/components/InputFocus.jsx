import { useRef } from "react"

export default function InputFocus(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }
    return (
        <>
        <input className="input-ref" ref={inputRef} type="text" placeholder="Нажми на кнопку чтобы произошел фокус"/> 
        <button onClick={handleClick}>focus</button>
        </>
    )
}