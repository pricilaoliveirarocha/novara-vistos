'use client'

import { useEffect, useRef } from 'react'

type HeroBackgroundVideoProps = Readonly<{
    className?: string
    src: string
}>

export default function HeroBackgroundVideo({ className, src }: HeroBackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    return (
        <video
            ref={videoRef}
            aria-hidden="true"
            autoPlay
            className={className}
            loop
            muted
            playsInline
            preload="auto">
            <source
                src={src}
                type="video/mp4"
            />
        </video>
    )
}
