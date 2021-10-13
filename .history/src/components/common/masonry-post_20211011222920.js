import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${TimePic}")` }

    return(
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div>
                <img src={TimePic} alt="" />
            </div>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};