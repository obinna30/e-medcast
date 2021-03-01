import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import "./Posts.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Posts = forwardRef( ({ name, description, message, photoUrl }, ref) => {

    const user = useSelector(selectUser)

    return (
        <div ref={ref} className="posts" >
            <div className="posts_header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="posts_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="posts_body">
                <p>{message}</p>
            </div>
            <div className="posts_buttons">

                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />

            </div>
        </div>
    )
}
)
export default Posts
