import React from 'react';
import './newpost.css';
import { MoreVert } from '@mui/icons-material';

export default function Newpost() {
    return (
        <div className='newPost'>

            <div className="postProfile">
                <img className='postProfilePic' src='asset/profiles.jpg' alt="" />
                <span className="postProfileName">Johnwick</span>
                <span className="postProfileDot"> <MoreVert /> </span>
            </div>
            <div className="postImageText"><span>Good morning...</span></div>

            <div >

                <img className="newPostImage" src='asset/newPostImage.jpg' alt="" />
            </div>



        </div>
    )
}
