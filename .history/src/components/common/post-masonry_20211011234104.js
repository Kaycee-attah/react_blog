import React from "react";
import { MasonryPost } from "./";

export default function PostMasonry({ posts, columns, tagsOnTop }) {
    return (
        <section className="masonry" style={{
            
            breakInside: "avoid",
            columns: "4",
            columnGap: "40px",
            margin: "20px auto"
            }}>
            { posts.map((post, index) => (
                <MasonryPost {...{post, index, key: index}} />
            )) }
        </section>
    )
}