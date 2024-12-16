import React from 'react'
import { Footer } from '@/components/ui/floating-footer'
import Image from 'next/image'

function FloatingFooterDemo() {
    return (
        <div className='bg-slate-100 dark:bg-gray-800 w-full'>
            <div className='h-[120vh]'>
                <h1 className='text-7xl text-center font-extrabold mt-[40%]'>Scroll Down</h1>
            </div>
            <Footer className='h-[70vh]'>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start p-8 text-white/80">
                    <div className='mb-10 sm:mb-0'>
                        <Image
                            src="/essenceui.png"
                            alt="essenceUI"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="flex-grow" />
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-white transition-colors">home</a>
                            <a href="#" className="hover:text-white transition-colors">product</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-white transition-colors">company</a>
                            <a href="#" className="hover:text-white transition-colors">support</a>
                            <a href="#" className="hover:text-white transition-colors">terms of use</a>
                            <a href="#" className="hover:text-white transition-colors">privacy policy</a>
                            <a href="#" className="hover:text-white transition-colors">law</a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:justify-between items-center text-white/60">
                    <div className="flex gap-2 mb-4 sm:mb-0">
                        <a href="#" className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                            x
                        </a>
                        <a href="#" className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                            yt
                        </a>
                        <a href="#" className="px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                            ig
                        </a>
                    </div>
                    <div>
                        essenceui © 2024
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default FloatingFooterDemo