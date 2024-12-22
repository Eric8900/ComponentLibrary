import React from 'react'
import { LineScroll } from '@/components/ui/line-scroll'

function LineScrollDemo() {
  return (
    <div>
      <div className='h-[50vh]'></div>
      <LineScroll from='#8B5CF6' to='#3B82F6'>
        <div className='font-black xl:text-9xl md:text-5xl sm:text-7xl text-4xl w-full flex justify-between'>
          <div>Keep</div> <div>Scrolling</div>
        </div>
      </LineScroll>
    </div>
  )
}

export default LineScrollDemo