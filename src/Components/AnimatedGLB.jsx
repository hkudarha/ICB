import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function GLBModel({ url, positionRef }) {
  const ref = useRef()
  
  useFrame(() => {
    // Continuous rotation
    ref.current.rotation.y += 0.01
    ref.current.rotation.x += 0.005
    
    // Apply scroll-based position changes
    if (positionRef.current) {
      ref.current.position.x = positionRef.current.x
      ref.current.position.y = positionRef.current.y
      ref.current.position.z = positionRef.current.z
    }
  })
  
  const { scene } = useGLTF(url)
  return <primitive ref={ref} object={scene} scale={0.02} />
}

export default function AnimatedGLB() {
  const containerRef = useRef()
  const positionRef = useRef({ x: 0, y: 0, z: 0 })
  
  useEffect(() => {
    // Create a timeline for multiple animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          const progress = self.progress
          
          // Horizontal movement (left to right and back)
          positionRef.current.x = Math.sin(progress * Math.PI * 2) * 1.5
          
          // Vertical movement (up and down)
          positionRef.current.y = Math.cos(progress * Math.PI * 3) * 0.8
          
          // Depth movement (forward and backward)
          positionRef.current.z = Math.sin(progress * Math.PI * 1.5) * 0.5
        }
      }
    })
    
    // Additional animation for container opacity and scale
    gsap.fromTo(containerRef.current, 
      { 
        opacity: 0.3,
        scale: 0.8
      },
      {
        opacity: 0.8,
        scale: 1,
        scrollTrigger: {
          trigger: document.body,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        right: '5vw',
        bottom: '5vw',
        width: "90vw",
        height: "100vh",
        pointerEvents: 'none',
        zIndex: 5, // Lower z-index to feel more like background
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7, // Semi-transparent for background feel
        filter: 'blur(0.5px)', // Subtle blur for background effect
        transition: 'all 0.3s ease',
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ 
          background: 'transparent',
          mixBlendMode: 'multiply' // Blend with background
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 2]} intensity={0.8} />
        <pointLight position={[-2, -5, -2]} intensity={0.3} color="#4a90e2" />
        <GLBModel url="/temp/satellite.glb" positionRef={positionRef} />
      </Canvas>
    </div>
  )
}