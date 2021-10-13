import React from "react";
import { MasonryPost } from "./";

export default function PostMasonry({ posts, Columns, tagsOnTop }) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${Columns}, minmax(275px, 1fr))`}}>
            { posts.map((post, index) => (
                <MasonryPost {...{post, index, key: index}} />
            )) }
        </section>
    )
}