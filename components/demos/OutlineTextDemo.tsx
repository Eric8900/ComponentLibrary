import React from 'react'
import { OutlineText } from '@/components/ui/outline-text'

function OutlineTextDemo() {
    return (
        <div>
            <div className="grid place-content-center px-4 py-24">
                <h1 className="max-w-2xl text-center text-5xl leading-snug font-semibold">
                    Check out this cool{" "}
                    <OutlineText from='#8B5CF6' to='#3B82F6'>
                        outline
                    </OutlineText>
                </h1>
            </div>
        </div>
    )
}

export default OutlineTextDemo