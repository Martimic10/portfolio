import { useEffect, useRef } from 'react'
import './CircuitBackground.css'

const CircuitBackground = ({ theme }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let nodes = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = []
      const gridSize = 100
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            x: i * gridSize,
            y: j * gridSize,
            connections: []
          })
        }
      }

      // Create random connections
      nodes.forEach((node, index) => {
        const connectionsCount = Math.floor(Math.random() * 3) + 1
        for (let i = 0; i < connectionsCount; i++) {
          const targetIndex = Math.floor(Math.random() * nodes.length)
          if (targetIndex !== index) {
            node.connections.push(targetIndex)
          }
        }
      })
    }

    let pulseOffset = 0

    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const color = theme === 'dark'
        ? 'rgba(0, 217, 255, 0.15)'
        : 'rgba(0, 128, 255, 0.08)'

      const nodeColor = theme === 'dark'
        ? 'rgba(0, 217, 255, 0.3)'
        : 'rgba(0, 128, 255, 0.2)'

      // Draw connections
      ctx.strokeStyle = color
      ctx.lineWidth = 1

      nodes.forEach((node, index) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex]
          if (target) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.stroke()

            // Add animated pulse effect on some lines
            if (Math.random() > 0.97) {
              const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
              const pulsePos = (Math.sin(pulseOffset + index * 0.1) + 1) / 2

              gradient.addColorStop(0, 'transparent')
              gradient.addColorStop(pulsePos, theme === 'dark' ? 'rgba(0, 217, 255, 0.5)' : 'rgba(0, 128, 255, 0.4)')
              gradient.addColorStop(1, 'transparent')

              ctx.strokeStyle = gradient
              ctx.lineWidth = 2
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(target.x, target.y)
              ctx.stroke()
              ctx.strokeStyle = color
              ctx.lineWidth = 1
            }
          }
        })
      })

      // Draw nodes
      ctx.fillStyle = nodeColor
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      pulseOffset += 0.02
      animationFrameId = requestAnimationFrame(drawCircuit)
    }

    resizeCanvas()
    drawCircuit()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="circuit-background" />
}

export default CircuitBackground
