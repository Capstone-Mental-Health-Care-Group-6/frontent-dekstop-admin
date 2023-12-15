import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function KonselingLoader() {
    return (
        <div className="konseling-skleton ">
            <Skeleton count={1} height={160} borderRadius={20} />
        </div>
    )
}

export default KonselingLoader