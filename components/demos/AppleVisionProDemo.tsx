import React from 'react'
import { MediaHero } from '@/components/ui/media-hero'

function AppleVisionProDemo() {
    return (
        <div>
            <MediaHero
                mediaType="video"
                src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment-a/large.mp4"
            >
                <span className="text-2xl font-bold mb-4">Entertainment</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">The ultimate theater.<br />Wherever you are.</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold text-8xl h-screen'>This is cool.</h1>
            <MediaHero
                mediaType="video"
                src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity-a/large.mp4"
            >
                <span className="text-2xl font-bold mb-4">Productivity</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">A workspace with<br />infinite space.</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold text-8xl h-screen'>Your own text.</h1>
            <MediaHero
                mediaType="video"
                src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/large.mp4"
            >
                <span className="text-2xl font-bold mb-4">Photos and Videos</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">Be in the moment.<br />All over again.</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold text-5xl md:text-8xl h-screen'>Whatever you want.</h1>
        </div>
    )
}

export default AppleVisionProDemo