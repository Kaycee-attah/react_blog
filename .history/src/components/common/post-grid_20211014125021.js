import React, { useEffect, useMemo, useState } from 'react';
import { link } from 'react-router-dom';
import { Pagination } from 'antd';

export default function PostGrid({posts}) {
    const [pageSize, setPageSize] = useState(9);
    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">

            </section>
            <Pagination 
                simple 
                showSizeChanger 
                onShowSizeChange={setPageSize} 
                pageSize={pageSize} 
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}