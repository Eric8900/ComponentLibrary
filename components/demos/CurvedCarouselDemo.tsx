import React from 'react'
import { CurvedCarousel } from '@/components/ui/curved-carousel';

function CurvedCarouselDemo() {
    const images = [
        'https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1732373870219-ac6444949471?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1730386303229-0c921f5690cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    ];
    return (
        <div>
            <CurvedCarousel imageSrcs={images} repeat={3}/>
        </div>
    )
}

export default CurvedCarouselDemo