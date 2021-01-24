import React from 'react'
import profile from "../assets/farooq.jpg"
import "../style/sidebar.css"
import Avatar from "@material-ui/core/Avatar"
import IconButton from '@material-ui/core/IconButton';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Chat from "@material-ui/icons/Chat"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat"
function Sidebar() {

    const chatlist = [
        {
            name: "Sir Umair",
            lastMessage: "7:10 am Sunday, 24 January 2021",
            image: "https://i.pinimg.com/736x/47/d0/ce/47d0ce72d1c72cfab4affc6b7b89b1a6.jpg"
        },
        {
            name: "Sir Tassadduq",
            lastMessage: "6:10 am Sunday, 24 January 2021",
            image: "https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Arslan-Asad-Butt-Model-Actor-351.jpg"
        }
        ,
        {
            name: "Asif",
            lastMessage: "10:10 pm Sunday, 24 January 2021",
            image: "https://cdn.pixabay.com/photo/2019/08/16/12/38/pakistani-boy-4410195_960_720.jpg"
        }
        ,
        {
            name: "Mubashbar",
            lastMessage: "10:50 am Sunday, 24 January 2021",
            image: "https://cdn.pixabay.com/photo/2020/05/04/01/37/photoshoot-5127418_960_720.jpg"
        }, {
            name: "nadeem",
            lastMessage: "4:10 am Sunday, 24 January 2021",
            image: "https://st.depositphotos.com/1550494/1373/i/600/depositphotos_13735339-stock-photo-man-winter-fashion.jpg"
        }
        , {
            name: "Zeeshan",
            lastMessage: "3:10 pm Sunday, 24 January 2021",
            image: "https://i.mdel.net/i/db/2019/10/1204910/1204910-800w.jpg"
        }, {
            name: "Sheryar",
            lastMessage: "5:10 pm Sunday, 24 January 2021",
            image: "https://wallpapercave.com/wp/wp2521768.jpg"
        }
        , {
            name: "Rao Ammar",
            lastMessage: "1:43 pm Sunday, 24 January 2021",
            image: "https://wi.wallpapertip.com/wsimgs/178-1785110_indian-model-pic-boy.jpg"
        },
                        {
            name: "Rao Hamza",
            lastMessage: "3:10 pm Sunday, 24 January 2021",
            image: "https://assets.vogue.com/photos/5876fe0cdb0d9b0b1741e643/master/w_834,h_1200,c_limit/jon-kortajarena.jpg"
        },
        {
            name: "Sir Umair",
            lastMessage: "7:10 am Sunday, 24 January 2021",
            image: "https://i.pinimg.com/736x/47/d0/ce/47d0ce72d1c72cfab4affc6b7b89b1a6.jpg"
        },
        {
            name: "Sir Tassadduq",
            lastMessage: "6:10 am Sunday, 24 January 2021",
            image: "https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Arslan-Asad-Butt-Model-Actor-351.jpg"
        }
        ,
        {
            name: "Asif",
            lastMessage: "10:10 pm Sunday, 24 January 2021",
            image: "https://cdn.pixabay.com/photo/2019/08/16/12/38/pakistani-boy-4410195_960_720.jpg"
        }
        ,
        {
            name: "Mubashbar",
            lastMessage: "10:50 am Sunday, 24 January 2021",
            image: "https://cdn.pixabay.com/photo/2020/05/04/01/37/photoshoot-5127418_960_720.jpg"
        }, {
            name: "nadeem",
            lastMessage: "4:10 am Sunday, 24 January 2021",
            image: "https://st.depositphotos.com/1550494/1373/i/600/depositphotos_13735339-stock-photo-man-winter-fashion.jpg"
        }
        , {
            name: "Zeeshan",
            lastMessage: "3:10 pm Sunday, 24 January 2021",
            image: "https://i.mdel.net/i/db/2019/10/1204910/1204910-800w.jpg"
        }, {
            name: "Sheryar",
            lastMessage: "5:10 pm Sunday, 24 January 2021",
            image: "https://wallpapercave.com/wp/wp2521768.jpg"
        }
        , {
            name: "Rao Ammar",
            lastMessage: "1:43 pm Sunday, 24 January 2021",
            image: "https://wi.wallpapertip.com/wsimgs/178-1785110_indian-model-pic-boy.jpg"
        },
                        {
            name: "Rao Hamza",
            lastMessage: "3:10 pm Sunday, 24 January 2021",
            image: "https://assets.vogue.com/photos/5876fe0cdb0d9b0b1741e643/master/w_834,h_1200,c_limit/jon-kortajarena.jpg"
        }

    ]


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={profile}/>
                {/* <img src={profile} className="profile_image" /> */}
                <div className="sidebar__header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text" />

                </div>
            </div>
            <div className="sidebar_chats scrollable-element">
                <SidebarChat addNewChat />
                {chatlist.map((item,index)=>(
                    <SidebarChat key={index} name={item.name} image={item.image} lastMessage= {item.lastMessage} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
