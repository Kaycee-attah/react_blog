import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop, index }) {
    const style = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` }

    return(
        <a key={index} className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};