import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `${JSON.stringify(TimePic)}` };
    console.log(JSON.stringify(TimePic))

    return(
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <img src={TimePic} alt="" />
                </div>
            </div>
        </a>
    )
};