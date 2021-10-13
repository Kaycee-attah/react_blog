import React from "react";
import { categoryColor } from "./styles";

export default function MasonryPost({ post, tagsOnTop, index }) {
    const style = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` }

    return(
        <a key={index} className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div className="tags-container">
                    { post.categories.map((tag, ind) => 
                        <span key={ind} className="tag" style={{ backgroundColor: categoryColor[tag] }}> 
                            {tag.toUpperClass()}
                        </span>
                    ) }
                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
};