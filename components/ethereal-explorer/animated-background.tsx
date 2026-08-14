"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = window.innerWidth
    let height = document.documentElement.scrollHeight

    const resize = () => {
      width = window.innerWidth
      height = document.documentElement.scrollHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener("resize", resize)

    // Constellation dots
    const dots: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.5,
      })
    }

    // Grid lines
    const gridLines: { y: number; opacity: number; phase: number }[] = []
    for (let i = 0; i < 8; i++) {
      gridLines.push({
        y: (height / 8) * i,
        opacity: 0.02 + Math.random() * 0.03,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.003

      // Draw grid lines with pulsing
      ctx.strokeStyle = "rgba(148, 163, 184, 0.03)"
      ctx.lineWidth = 0.5
      gridLines.forEach((line) => {
        const opacity = line.opacity * (0.5 + 0.5 * Math.sin(time * 2 + line.phase))
        ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(0, line.y)
        ctx.lineTo(width, line.y)
        ctx.stroke()
      })

      // Draw and connect nearby dots
      dots.forEach((dot, i) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > width) dot.vx *= -1
        if (dot.y < 0 || dot.y > height) dot.vy *= -1

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56, 189, 248, 0.15)"
        ctx.fill()

        // Connect nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x
          const dy = dots[j].y - dot.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.04 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      // Orbital paths
      const cx = width * 0.5
      const cy = height * 0.2
      for (let i = 0; i < 3; i++) {
        const radius = 200 + i * 100
        ctx.beginPath()
        ctx.ellipse(cx, cy, radius, radius * 0.3, 0, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(56, 189, 248, 0.03)"
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Moving point on orbit
        const angle = time * (0.5 + i * 0.2)
        const px = cx + Math.cos(angle) * radius
        const py = cy + Math.sin(angle) * radius * 0.3
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(56, 189, 248, 0.2)"
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
