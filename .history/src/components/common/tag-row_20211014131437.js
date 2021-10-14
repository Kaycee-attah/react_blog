import React from 'react';
import { categoryColors } from './'

export default function TagRow({ tags }) {
    return (
        <div>
            <div className="tags-container">
                { tags.map((tag, ind) => 
                    <span key={ind} className="tag" style={{ backgroundColor: categoryColors[tag] }}> 
                        {tag.toUpperCase()}
                    </span>
                ) }
            </div>
        </div>
    )
}
