<template>
  <div class="container">
    <div class="controls">
      <canvas></canvas>
      <svg viewBox="0 0 600 552">
        <path d="M300,107.77C284.68,55.67,239.76,0,162.31,0,64.83,0,0,82.08,0,171.71c0,.48,0,.95,0,1.43-.52,19.5,0,217.94,299.87,379.69v0l0,0,.05,0,0,0,0,0v0C600,391.08,600.48,192.64,600,173.14c0-.48,0-.95,0-1.43C600,82.08,535.17,0,437.69,0,360.24,0,315.32,55.67,300,107.77" fill="#ee5282" />
      </svg>
    </div>
  </div>
</template>
<script setup name="particle-heart">
import * as THREE from 'three'
import gsap from 'gsap'

console.clear()

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
)
camera.position.z = 500

const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
renderer.setSize(window.innerWidth, window.innerHeight)


// const controlsWebGL = new THREE.OrbitControls(camera, renderer.domElement)

onMounted(() => {
    const controls = document.getElementsByClassName('controls')
    controls[0].append(renderer.domElement)
})

const tl = gsap.timeline({
  repeat: -1,
  yoyo: true
})

const path = document.querySelector('path')
const length = path.getTotalLength()
const vertices = []
for (let i = 0; i < length; i += 0.2) {
  const point = path.getPointAtLength(i)
  const vector = new THREE.Vector3(point.x, -point.y, 0)
  vector.x += (Math.random() - 0.5) * 30
  vector.y += (Math.random() - 0.5) * 30
  vector.z += (Math.random() - 0.5) * 70

  vertices.push(vector)
  tl.from(vector, {
    x: 600 / 2,
    y: -552 / 2,
    z: 0,
    ease: 'power2.inOut',
    duration: 'random(2, 5)'
  })
}

const geometry = new THREE.BufferGeometry().setFromPoints(vertices)
const material = new THREE.PointsMaterial( { color: 0xee5282, blending: THREE.AdditiveBlending, size: 3 } )
const particles = new THREE.Points(geometry, material)
particles.position.x -= 600 / 2
particles.position.y += 552 / 2
scene.add(particles)

gsap.fromTo(scene.rotation, {
  y: -0.3
}, {
  y: 0.3,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut',
  duration: 3
})

const render = () => {
  requestAnimationFrame(render)
  // geometry.setFromPoints(vertices)
  renderer.render(scene, camera)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)
requestAnimationFrame(render)
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    position: relative;
  }
  .controls {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  canvas {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  svg {
    position: absolute;
    display: none;
  }
</style>