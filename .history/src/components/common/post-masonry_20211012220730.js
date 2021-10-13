import React from "react";
import { MasonryPost } from "./";

export default function PostMasonry({ posts, columns, tagsOnTop }) {
    return (
        <section className="masonry" >
            { posts.map((post, index) => (
                <MasonryPost {...{post, index, key: index}} />
            )) }
        </section>
    )
}