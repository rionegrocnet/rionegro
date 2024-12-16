'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { InteractiveMap } from './InteractiveMap'

export default function SmoothHorizontalScrollPanorama() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageSize, setImageSize] = useState({ width: 5760, height: 1080 })
  const [isDesktop, setIsDesktop] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const updateImageSize = () => {
      const viewportHeight = window.innerHeight
      const imageAspectRatio = 5760 / 1080
      const calculatedWidth = Math.ceil(viewportHeight * imageAspectRatio)
      setImageSize({ width: calculatedWidth, height: viewportHeight })
      
      // Detect if the viewport width is for desktop or mobile
      setIsDesktop(window.innerWidth >= 1024) // Por ejemplo, 1024px como tamaño de escritorio
    }

    updateImageSize()
    window.addEventListener('resize', updateImageSize)
    return () => window.removeEventListener('resize', updateImageSize)
  }, [])

  const xRange = useTransform(scrollYProgress, [0, 1], [0, -(imageSize.width - window.innerWidth)])
  const x = useSpring(xRange, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      <div ref={containerRef} style={{ height: `${(imageSize.width / window.innerWidth) * 100}vh` }} />
      <motion.div 
        className="fixed top-0 left-0 h-screen overflow-hidden"
        style={{
          x,
          width: `${imageSize.width}px`,
          willChange: 'transform',
        }}
      >
        <div className="relative h-full w-full -ml-[0.3%]">
<InteractiveMap />
        </div>
      </motion.div>
    </>
  )
}
