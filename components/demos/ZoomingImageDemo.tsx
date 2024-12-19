import React from 'react'
import { ZoomingImage } from '@/components/ui/zooming-image'

function ZoomingImageDemo() {
  return (
    <div>
        <ZoomingImage 
              src='https://cdn.prod.website-files.com/672b527122f8cda3897b9d71/672b527122f8cda3897b9efc_Solutions.avif'
        >
            <div className='h-[70vh] w-full lg:w-[50%] md:w-[70%] sm:w-[85%] bg-sky-300 flex items-center justify-center text-5xl font-black'>
                Zoooooom
            </div>
        </ZoomingImage>
    </div>
  )
}

export default ZoomingImageDemo