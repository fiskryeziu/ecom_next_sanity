import { useEffect } from 'react'
const useOnMouseMove = (ref) => {
  useEffect(() => {
    const sliders = document.querySelectorAll('#slider')

    // const updateMousePosition = (e) => {
    //   const valueX = (e.pageX * -0.2) / 12
    //   const valueY = (e.pageY * -0.2) / 12
    //   if (ref.current !== null) {
    //     ref.current.style.transform =
    //       'translate3d(' + valueX + 'px,' + valueY + 'px,0) '
    //   }
    // }
    // anchor.addEventListener('mousemove', updateMousePosition)
    for (let i = 0; i <= sliders.length; i++) {
      if (sliders[i]) {
        sliders[i].addEventListener('mousemove', (e) => {
          if (ref.current !== null) {
            const valueX = (e.pageX * -0.2) / 12
            const valueY = (e.pageY * -0.2) / 12
            ref.current.style.transform =
              'translate3d(' + valueX + 'px,' + valueY + 'px,0) '
          }
        })
      }
    }
    return () => {
      console.log('hehe')
      for (let i = 0; i <= sliders.length; i++) {
        if (sliders[i]) {
          sliders[i].removeEventListener('mousemove', () => {
            console.log('removed')
          })
        }
      }
    }
  }, [])
}
export default useOnMouseMove
