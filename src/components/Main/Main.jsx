import React, { useEffect } from 'react'
import './main.scss'
function Main({index}) {
    
      useEffect(()=>{
        const mainBGs = [
            'rgba(0, 0, 0, 0.8)',
            'rgba(80, 3, 3, 0.8)',
            'rgba(16, 77, 4, 0.8)',
            'rgba(77, 66, 4, 0.8)',
            'rgba(155, 153, 141, 0.8)',
            'rgba(11, 138, 177, 0.8)',
            'rgba(77, 4, 67, 0.8)'
          ];
        document.documentElement.style.setProperty('--background', mainBGs[index]);
      },[index])
  return (
    <div id='main'>
    </div>
  )
}

export default Main