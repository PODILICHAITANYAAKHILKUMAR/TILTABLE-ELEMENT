const box = document.querySelector('.container')
const boxRect = box.getBoundingClientRect()

box.addEventListener('mousemove', e => {
  const xPosition = (e.clientX - boxRect.left) / boxRect.width
  const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.6
  const xOffset = -(xPosition - 0.6)
  const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6)
  box.style.transform = `perspective(1000px) rotateY(${dxNorm *
    45}deg) rotateX(${yPosition * 45}deg) `
})

box.addEventListener('mouseleave', () => {
  box.style.transform = 'none'
})