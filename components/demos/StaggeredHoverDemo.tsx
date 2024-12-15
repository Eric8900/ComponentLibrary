import React from 'react'
import { StaggeredFlip } from '@/components/ui/staggered-hover'

function StaggeredHoverDemo() {
    return (
        <div>
            <section className="grid place-content-center gap-2 px-8 py-24">
                <StaggeredFlip href="#">
                    <span className="text-red-500">H</span>
                    <span className="text-blue-500">o</span>
                    <span className="text-green-500">v</span>
                    <span className="text-yellow-500">e</span>
                    <span className="text-purple-500">r</span>
                </StaggeredFlip>
            </section>
        </div>
    )
}

export default StaggeredHoverDemo