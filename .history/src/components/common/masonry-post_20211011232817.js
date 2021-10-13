import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` }

    return(
        <a className="masonry-post overlay"  href={post.link}>
            <img style={{
                position: "relative",
                borderRadius: "5px",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "100%",
                maxWidth: "100%",
                width: "100%",
                textDecoration: "none",
                margin: "0 auto",
            }} src={TimePic} alt="" />
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};