import { useState } from "react"
import {MdFastfood} from 'react-icons/md'
import {categories} from '../../utils/data'
const CreateContainer = () => {
    const [title, setTitle] =useState("");
    const [calories, setCalories] =useState("");
    const [priece, setPriece] =useState("");
    const [category, setCategory] =useState(null);
    const [imageAsset, setImageAsset]=useState(null);
    const [fields, setfields] =useState(true);
    const [alertStatus, setAlertStatus] = useState("danger")
    const [msg, setMsg]=useState(null);
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="w-full h-auto flex items-center justify-center min-h-screen">
            <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                {
                    fields && (<p className={`w-full p-2 rounded-lg text-center ${alertStatus === 'danger'? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}>
                    Something wrong</p>)
                }
                <div className="w-full py-2 boder-b border-gray-300 flex items-center gap-2">
                    <MdFastfood className="text-xl text-gray-700"/>
                    <input type="text" 
                    required value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give me a title..."
                    className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500"
                    />
                </div>
                <div className="w-full">
                    <select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
                        <option value="other" className="bg-white"></option>
                       {categories && categories.map(item => (
                        <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                        value={item.urlParamName}>
                            {item.name}
                        </option>
                       ))}
                    </select>
                </div>
                <div className="group flex justify-center items-center flex-col border-2 border-dotted
                 border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">

                </div>
            </div>
        </div>
    )
}
export default CreateContainer