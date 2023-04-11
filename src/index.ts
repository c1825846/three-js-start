import * as THREE from 'three'

const canvas = document.querySelector('#canvas')
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5)
camera.position.z = 2

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xcdf0ff)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(-1, 2, 4)
scene.add(light)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhongMaterial({ color: 0x2411d4 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const animate = (time: number) => {
    time *= 0.001

    const speed = 0.1

    cube.rotation.y = time * speed
    cube.rotation.x = time * speed
    cube.rotation.z = time * speed

    const canvas = renderer.domElement
    if (
        canvas.width !== canvas.clientWidth ||
        canvas.height !== canvas.clientWidth
    ) {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
    }
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
