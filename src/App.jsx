import {motion,useScroll} from 'motion/react'



function App() {
  const {scrollYProgress}=useScroll()
 
  return (
    <>
    <motion.div
    style={{
      scaleX:scrollYProgress,
      position:'fixed',
      top:0,
      left:0,
      right:0,
      height:10,
      originX:0,
      backgroundColor:"beige"
    }}
    />

    

    </>
  
  )
}

export default App
