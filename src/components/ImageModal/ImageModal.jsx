import React from 'react'
import './imageModal.scss'

import { motion } from "framer-motion";

function ImageModal({imageUrl,onClose}) {
  console.log(imageUrl)
  return (
    <motion.div 
      className="imageModal"
      initial={{ opacity: 0,scale:0 }}
      animate={{ opacity: 1, scale:1 }}
      exit={{ opacity: 0, scale:0 }}
      transition={{duration:.5}}
    >
      
      <div className="modalTop">
        <button onClick={onClose}>Close</button>
      </div>
      <div className="modalContent">
        <img src={imageUrl} alt="Modal Image" />
      </div>
    </motion.div>
  )
}

export default ImageModal