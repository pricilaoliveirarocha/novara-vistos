import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

const ROUTE_DOT_COUNT = 9

function FlightPlane() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <defs>
        <linearGradient
          id="plane-premium-gold"
          x1="18"
          y1="12"
          x2="76"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff0c7" />
          <stop offset=".32" stopColor="#d69b3e" />
          <stop offset=".58" stopColor="#f4d28d" />
          <stop offset="1" stopColor="#a96820" />
        </linearGradient>
        <linearGradient
          id="plane-premium-wing"
          x1="7"
          y1="43"
          x2="89"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#b97929" />
          <stop offset=".48" stopColor="#f5d38d" />
          <stop offset="1" stopColor="#b97929" />
        </linearGradient>
      </defs>
      <path
        className="plane-wings"
        d="M43 53 7 42c-3 2-3 5 0 7l35 17h12l35-17c3-2 3-5 0-7L53 53Z"
      />
      <path className="plane-tail" d="m42 22-12-9V8l18 5 18-5v5l-12 9Z" />
      <path
        className="plane-body"
        d="M48 93c-4 0-6-11-6-27V27c0-13 2-24 6-24s6 11 6 24v39c0 16-2 27-6 27Z"
      />
      <path className="plane-cabin" d="M44.8 19Q48 15 51.2 19l-.7 5Q48 22 45.5 24Z" />
      <path className="plane-detail" d="M48 30v48M17 47l25 10M79 47 54 57M36 15l6 4M60 15l-6 4" />
    </svg>
  )
}

export default function FlightRoute() {
  const planeRef = useRef(null)
  const pathRef = useRef(null)
  const glowRef = useRef(null)
  const svgRef = useRef(null)
  const dotsRef = useRef(null)

  useLayoutEffect(() => {
    const plane = planeRef.current
    const path = pathRef.current
    const glow = glowRef.current
    const svg = svgRef.current
    const dots = [...dotsRef.current.children]
    const destination = document.querySelector('[data-flight-destination]')

    if (!plane || !path || !glow || !svg || !destination) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let flightTimeline
    let glowTween
    let resizeFrame

    const updateGeometry = () => {
      const viewportWidth = document.documentElement.clientWidth
      const pageHeight = document.documentElement.scrollHeight
      const destinationBox = destination.getBoundingClientRect()
      const endX = destinationBox.left + destinationBox.width / 2
      const endY = destinationBox.top + window.scrollY + destinationBox.height / 2
      const startX = Math.min(viewportWidth * 0.36, 520)
      const startY = 74
      const middleX = viewportWidth < 760 ? viewportWidth * 0.78 : viewportWidth * 0.53

      const routeData = [
        `M${startX},${startY}`,
        `C${startX},${startY + 175}`,
        `${middleX},${endY * 0.22}`,
        `${viewportWidth * 0.49},${endY * 0.37}`,
        `S${viewportWidth * 0.34},${endY * 0.56}`,
        `${viewportWidth * 0.52},${endY * 0.69}`,
        `S${viewportWidth * 0.68},${endY * 0.83}`,
        `${endX},${endY}`,
      ].join(' ')

      svg.setAttribute('viewBox', `0 0 ${viewportWidth} ${pageHeight}`)
      svg.setAttribute('height', pageHeight)
      path.setAttribute('d', routeData)
      glow.setAttribute('d', routeData)

      const pathLength = path.getTotalLength()
      dots.forEach((dot, index) => {
        const progress = (index + 1) / (dots.length + 1)
        const point = path.getPointAtLength(pathLength * progress)
        dot.setAttribute('cx', point.x)
        dot.setAttribute('cy', point.y)
      })

      if (!flightTimeline || flightTimeline.progress() === 0) {
        gsap.set(plane, { x: startX, y: startY })
      }
    }

    updateGeometry()
    gsap.set(plane, { xPercent: -50, yPercent: -50, autoAlpha: 1 })

    if (prefersReducedMotion) {
      gsap.set(plane, { opacity: 0 })
    } else {
      flightTimeline = gsap.timeline({
        scrollTrigger: {
          id: 'home-flight',
          start: 0,
          end: () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
          scrub: 0.85,
          invalidateOnRefresh: true,
          onRefreshInit: updateGeometry,
        },
      })

      flightTimeline.to(plane, {
        ease: 'none',
        motionPath: {
          path,
          autoRotate: -90,
          alignOrigin: [0.5, 0.5],
        },
      })

      glowTween = gsap.to(glow, {
        strokeDashoffset: -36,
        repeat: -1,
        duration: 2.2,
        ease: 'none',
      })
    }

    const handleResize = () => {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(() => {
        updateGeometry()
        ScrollTrigger.refresh()
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(resizeFrame)
      flightTimeline?.scrollTrigger?.kill()
      flightTimeline?.kill()
      glowTween?.kill()
      ScrollTrigger.getById('home-flight')?.kill()
    }
  }, [])

  return createPortal(
    <div className="home-flight-layer" aria-hidden="true">
      <svg ref={svgRef} className="home-flight-route" preserveAspectRatio="none">
        <path ref={pathRef} className="route-base" />
        <path ref={glowRef} className="route-glow" />
        <g ref={dotsRef}>
          {Array.from({ length: ROUTE_DOT_COUNT }, (_, index) => (
            <circle key={index} r={index % 3 === 0 ? 5 : 3} />
          ))}
        </g>
      </svg>
      <div ref={planeRef} className="home-flight-plane">
        <span className="plane-smoke">
          <i />
          <i />
          <i />
        </span>
        <FlightPlane />
      </div>
    </div>,
    document.body,
  )
}
