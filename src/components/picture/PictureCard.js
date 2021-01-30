import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './styles.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 1.7, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 + 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 7 - 50}px,${y / 7 + 10}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 80}px,${y / 6 - 90}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

export default function PictureCard() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const [flip, toggleImage] = useState(false)
  const { x } = useSpring({ from: { x: 0 }, x: flip ? 1 : 0, config: { duration: 1000 } })

  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4"
                    style={{ transform: props.xy.interpolate(trans4)}}
                    onClick={() => toggleImage (!flip)}/>
      <animated.div class="card5"
                    style={{ transform: props.xy.interpolate(trans4),
                      opacity: x.interpolate({ range: [0, 1], output: [0, 1] }), }}
                    onClick={() => toggleImage (!flip)}/>
    </div>
  )
}