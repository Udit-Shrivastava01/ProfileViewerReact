import Button from "./Button"
import { FaYoutube,FaLinkedin,FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Info from "./Info";

function Card(props){
  return(
    <>
    <div className="flex flex-col h-100 w-80 shadow-lg shadow-blue-500 mb-5 ml-4 mt-5">
        <div className="bg-blue-400 h-1/3 w-full ">
          <div className="relative rounded-full h-full w-full ">
            <img className="aspect-square rounded-full object-cover
              h-35 w-35 absolute left-1/2 -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white" src={props.imgUrl} alt="Error processi image"/>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-center">
            <Info name={props.name} role={props.role}/>
          </div>
          <div className="flex gap-10 justify-center mb-10 mt-10">
            <FaYoutube className="text-2xl"/>
            <CiInstagram className="text-2xl" />
            <FaLinkedin className="text-2xl"/>
            <FaGithub className="text-2xl"/>
          </div>
          <div className="flex justify-center gap-10 ml-2 mr-2 mb-2">
            <Button title="View"/>
            <Button title="Connect"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;