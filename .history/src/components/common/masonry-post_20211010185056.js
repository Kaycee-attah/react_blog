import React from "react";

export default function MasonryPost({ post, tagsOnTop }) {
    const style = { backgroundImage: `url("${post.image}")` }

    return(
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
};