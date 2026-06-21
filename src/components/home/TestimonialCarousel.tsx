'use client'

import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

import styles from './TestimonialCarousel.module.css'

export type TestimonialVideoItem = {
    name: string
    role: string
    src: string
}

type TestimonialCarouselProps = Readonly<{
    items: TestimonialVideoItem[]
}>

const AUTOPLAY_DELAY = 5500

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)
    const [erroredIndexes, setErroredIndexes] = useState<number[]>([])

    const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

    const hasItems = items.length > 0

    const safeIndex = useMemo(() => {
        if (!hasItems) {
            return 0
        }

        return ((activeIndex % items.length) + items.length) % items.length
    }, [activeIndex, hasItems, items.length])

    useEffect(() => {
        if (!hasItems || hovered || playingIndex !== null) {
            return
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % items.length)
        }, AUTOPLAY_DELAY)

        return () => window.clearInterval(intervalId)
    }, [hasItems, hovered, items.length, playingIndex])

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video || index === safeIndex) {
                return
            }

            video.pause()
            video.currentTime = 0
        })
    }, [safeIndex])

    function markVideoError(index: number) {
        setErroredIndexes((current) => {
            if (current.includes(index)) {
                return current
            }

            return [...current, index]
        })
    }

    function goToSlide(index: number) {
        if (!hasItems) {
            return
        }

        setActiveIndex(((index % items.length) + items.length) % items.length)
    }

    function goToPrevious() {
        goToSlide(safeIndex - 1)
    }

    function goToNext() {
        goToSlide(safeIndex + 1)
    }

    if (!hasItems) {
        return null
    }

    return (
        <div
            className={styles.carousel}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className={styles.viewport}>
                <div
                    className={styles.track}
                    style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
                    {items.map((item, index) => {
                        const hasError = erroredIndexes.includes(index)

                        return (
                            <article
                                key={`${item.name}-${index}`}
                                className={styles.slide}>
                                <div className={styles.phoneFrame}>
                                    <span
                                        aria-hidden="true"
                                        className={styles.phoneNotch}
                                    />

                                    <div className={styles.videoShell}>
                                        {hasError ? (
                                            <div className={styles.videoFallback}>
                                                <PlayCircle
                                                    aria-hidden="true"
                                                    className={styles.videoFallbackIcon}
                                                />
                                                <strong className={styles.videoFallbackTitle}>Adicione seu vídeo aqui</strong>
                                                <span className={styles.videoFallbackPath}>{item.src}</span>
                                            </div>
                                        ) : (
                                            <video
                                                ref={(element) => {
                                                    videoRefs.current[index] = element
                                                }}
                                                className={styles.video}
                                                controls
                                                playsInline
                                                preload="metadata"
                                                onPlay={() => setPlayingIndex(index)}
                                                onPause={() =>
                                                    setPlayingIndex((current) => (current === index ? null : current))
                                                }
                                                onEnded={() =>
                                                    setPlayingIndex((current) => (current === index ? null : current))
                                                }
                                                onError={() => markVideoError(index)}>
                                                <source
                                                    src={item.src}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.caption}>
                                    <div className={styles.meta}>
                                        <strong className={styles.name}>{item.name}</strong>
                                        <span className={styles.role}>{item.role}</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

            <button
                type="button"
                className={`${styles.controlButton} ${styles.controlButtonPrev}`}
                aria-label="Depoimento anterior"
                onClick={goToPrevious}>
                <ChevronLeft aria-hidden="true" />
            </button>

            <button
                type="button"
                className={`${styles.controlButton} ${styles.controlButtonNext}`}
                aria-label="Próximo depoimento"
                onClick={goToNext}>
                <ChevronRight aria-hidden="true" />
            </button>

            <div className={styles.controls}>
                <div className={styles.dots}>
                    {items.map((item, index) => (
                        <button
                            key={`${item.name}-dot-${index}`}
                            type="button"
                            className={`${styles.dot}${safeIndex === index ? ` ${styles.dotActive}` : ''}`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                            aria-pressed={safeIndex === index}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
