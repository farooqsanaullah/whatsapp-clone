import React,{useEffect,useState} from 'react'
import "../style/sidebarchat.css"

import Avatar from "@material-ui/core/Avatar"
function SidebarChat({addNewChat,name,image,lastMessage}) {
    const [seed,setSeed] = useState("")
    useEffect(()=>
    {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

    const createChat = ()=>
    {

    }

    return !addNewChat?(
        <div className="sidebarchat">
          <Avatar src={image}/>
          <div className="sidebarchat_info">
             <h2>{name}</h2>
             <p>Last message {lastMessage}</p>   
          </div>
        </div>
    ):(<div onClick={createChat} className="sidebarchat">
        <h3>Add new chat</h3>
    </div>)
}

export default SidebarChat
