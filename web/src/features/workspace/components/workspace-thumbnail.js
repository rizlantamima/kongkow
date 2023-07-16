import { InitialTitle } from "../../../utils/helper";

export default function WorkspaceThumbnail(props) {
    const { name, selected, notified } = props.workspace

    let tailwindClass = "w-10 h-10 block rounded-lg bg-gray-400 font-jakarta font-semibold";
    if (selected){
        tailwindClass = tailwindClass.concat(" ", "outline outline-blue-300 outline-offset-4 outline-3 border-gray-200")
    } else {
        tailwindClass = tailwindClass.concat(" ", "hover:bg-gray-500")
        if (notified) {
            tailwindClass = tailwindClass.concat(" ", "relative")
        }
    }
    
    const notifiedFlag = (notified && !selected) ? <span className="absolute w-3 h-3 rounded-full bg-red-600 top-0 right-0 -mt-1 -mr-1"></span> : "" ;
    return (
        <button className={tailwindClass} href="#">{InitialTitle(name)} {notifiedFlag}</button>
    )
}   