"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const mouse = { x: 0, y: 0 }
    const ring = { x: 0, y: 0 }
    const speed = 0.15

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (!isVisible) setIsVisible(true)

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer"
      setIsHovering(!!isInteractive)
    }

    // Smooth ring follow with requestAnimationFrame
    let animFrame: number
    const animate = () => {
      ring.x += (mouse.x - ring.x) * speed
      ring.y += (mouse.y - ring.y) * speed

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }

      animFrame = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
    document.addEventListener("mouseover", onMouseOver)

    animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseover", onMouseOver)
      cancelAnimationFrame(animFrame)
    }
  }, [isVisible])

  return (
    <>
      {/* Inner dot - follows mouse instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? "6px" : "8px",
          height: isHovering ? "6px" : "8px",
        }}
      />

      {/* Outer ring - follows with smooth lag */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? "52px" : isClicking ? "28px" : "36px",
          height: isHovering ? "52px" : isClicking ? "28px" : "36px",
          borderColor: isHovering
            ? "oklch(0.75 0.18 145)"
            : "oklch(0.13 0 0 / 0.4)",
          borderWidth: isHovering ? "2px" : "1.5px",
          backgroundColor: isClicking
            ? "oklch(0.75 0.18 145 / 0.08)"
            : "transparent",
        }}
      />
    </>
  )
}
