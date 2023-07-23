
import { useEffect , useState } from "react"
import {useNavigate} from "react-router-dom"
import io from "socket.io-client"
import img from "../images/img.jpg"
const Members = ()=>{
    const [socket,setSocket] = useState(null)
    const navigateTo = useNavigate()

    useEffect(()=>{
        const socketInstance = io("http://localhost:4000");
        setSocket(socketInstance)
        return()=>{
            socketInstance.disconnect()
        }
    },[])

    useEffect(()=>{
        if(socket){
           socket.on("nftsUpdated",(data)=>{
             if(data.userNFTs < 1){
                navigateTo("/")
                alert("You Are Not Member of My Gang!")
             }
           })
        }
    },[socket,navigateTo])
    return (
            <div>
            <h1>hey! Welcome In My Gang</h1>
            <img style={{height:500,width:500}}  src={img} alt="" />
            </div>
       
         )
}
export default Members