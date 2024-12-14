'use-client';
import React from 'react'
import { GradientButton } from '@/components/ui/animated-gradient-button'

function GradientButtonDemo() {
  return (
    <div className='flex'>
      <GradientButton
        initialGradient="bg-gradient-to-t from-red-400 to-violet-400"
        hoverGradient="bg-gradient-to-r from-red-400 to-violet-600"
        duration={1}
      >
        <span className="relative text-white font-semibold">
          Hover
        </span>
      </GradientButton>
    </div>
  )
}

export default GradientButtonDemo