import { useEffect } from 'react'
const useMove = (ref) => {
  useEffect(() => {
    const anchor = document.getElementById('anchor')

    const updateMousePosition = (e) => {
      const valueX = (e.pageX * -0.2) / 12
      const valueY = (e.pageY * -0.2) / 12

      if (ref) {
        ref.current.style.transform =
          'translate3d(' + valueX + 'px,' + valueY + 'px,0) '
      }
    }

    anchor.addEventListener('mousemove', updateMousePosition)
    return () => {
      anchor.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
}
export default useMove
