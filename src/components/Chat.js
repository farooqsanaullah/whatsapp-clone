import React, { useState } from 'react'
import "../style/chat.css"
import profile from "../assets/farooq.jpg"
import Avatar from "@material-ui/core/Avatar"
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


function Chat() {
    const [input, setInput] = useState("")

    const messageList = [{
        message: "Hey Guys",
        reciever: true,
        timestamp: " 7:10 am"
    }, {
        message: "Hi",
        reciever: false,
        timestamp: " 7:11 am"
    }, {
        message: "How are u?",
        reciever: true,
        timestamp: " 7:11 am"
    },
    {
        message: "fine and u?",
        reciever: false,
        timestamp: " 7:11 am"
    },
    {
        message: "i am also fine?",
        reciever: true,
        timestamp: " 7:11 am"
    },
    ]




    const changeHanlde = () => {

    }

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={profile} />
                <div className="chat__header_info">
                    <h2>farooq</h2>
                    <p>Last message 7:10 am Sunday, 24 January 2021</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat__body">
            {messageList.map((item,index)=>
            (
              
                <p className={item.reciever?"chat_message chat_reciever":"chat_message" }>
                    {/* <span className="chat_name">farooq</span> */}
                  {item.message}
               <span className="chat_timestamp">
                    {item.timestamp}
                </span>
                </p>
        

            ))}
                </div>
            {/* <div className="chat__body">
                <p className="chat_message chat_reciever">
                    <span className="chat_name">farooq</span>
               Hey Guys
               <span className="chat_timestamp">
                        7:10 am Sunday, 24 January 2021
                </span>
                </p>
            </div> */}
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
