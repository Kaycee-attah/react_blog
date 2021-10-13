import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` }

    return(
        <a className="masonry-post overlay" style={style} href={post.link}>
            {/* <div style={{
                    position: "relative",
                    borderRadius: "5px",
                    overFlow: "hidden",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "100px",
                    width: "100px",
                    textDecoration: "none",
                    margin: "0 auto"
                }}>
                
            </div> */}
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};