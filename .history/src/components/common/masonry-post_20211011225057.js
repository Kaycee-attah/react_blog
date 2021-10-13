import React from "react";
import TimePic from "../../assets/images/Time.jpg";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${TimePic}")` }

    return(
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div style={{
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
                <img style={{
                    position: "relative",
                    borderRadius: "5px",
                    overFlow: "hidden",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "100%",
                    width: "100%",
                    textDecoration: "none",
                    margin: "0 auto"
                }} src={TimePic} alt="" />
            </div>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};