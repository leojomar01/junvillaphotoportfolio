import './album.scss'
import { motion,AnimatePresence } from "framer-motion";

function Album({navShow,index}) {
  const pic = [1,1,1,1,1,1,1,1,1];
  return (
    <AnimatePresence>
      {!navShow&&<motion.div 
        className='album'
        key={'album'}
        exit={{opacity:0,y:300}}
        animate={{opacity:1,y:0}}
        initial={{opacity:0,y:300}}
        transition={{duration:.5}}
      >
        {pic.map((e)=>(
          <div className="pic">
            <img src={"https://picsum.photos/200/300"+index} alt='' />
          </div>
        ))}
      </motion.div>}

    </AnimatePresence>
   
  )
}

export default Album