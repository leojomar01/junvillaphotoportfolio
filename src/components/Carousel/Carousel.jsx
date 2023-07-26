import React, { useEffect } from 'react';
import './carousel.scss';
import { motion,AnimatePresence } from "framer-motion";

function Carousel({index,viewToggle,navShow,getIndex}) {
    useEffect(()=>{
        const container = document.querySelector('.carousel .container');
        if(!navShow){
            container.classList.add('show')
        }
        else{
            container.classList.remove('show')
        }
    },[navShow])

    useEffect(()=>{
        if(navShow){
            const slides = document.querySelectorAll('.slide');
            const container = document.querySelector('.container')
            const maxSlide = slides.length - 1;
            const handleNextSlide = () => {
                const tempSlide = slides[0];
                slides[0].remove();
                container.appendChild(tempSlide)
                if (index === maxSlide) {
                    getIndex(0);
                } else {
                    getIndex(index + 1 );
                }
            };
            const handlePrevSlide = () => {
                const tempSlide = slides[maxSlide];
                slides[maxSlide].remove();
                container.prepend(tempSlide)
                if (index === 0) {
                    getIndex(maxSlide);
                } else {
                    getIndex(index - 1);
                }
            };

            const nextBtn = document.querySelector('.next-btn')
            const prevBtn = document.querySelector('.prev-btn')

            nextBtn.addEventListener('click', handleNextSlide);
            prevBtn.addEventListener('click', handlePrevSlide);

            return () => {
                nextBtn.removeEventListener('click', handleNextSlide);
                prevBtn.removeEventListener('click', handlePrevSlide);
            };
        }
    },[index,navShow,getIndex])

    const slides = [7,1,2,3,4,5,6];

  return (
    <div className='carousel'>
            <div className="container">
                {slides.map((e,i)=>(
                    <div className="slide">
                        <img src={"https://picsum.photos/200/300"+i} alt={i} />
                        <div className="titleContainer"><div className="title">TITLE TEST{i}</div></div>


                        {navShow&&<div className="numberIndicator"
                            key='numberIndicator'
                            exit={{opacity:0,x:-50}}
                            animate={{opacity:1,x:0}}
                            initial={{opacity:0,x:-50}}
                            transition={{duration:.5}}>
                                <span>{'0' + i}</span>
                            </div>}
                    </div>
                ))}
            </div>
        

           
            
            <div className='navigation'>
                <AnimatePresence>
                    {navShow&&<motion.div 
                        className="btn prev-btn" 
                        key='prev-btn'
                        exit={{opacity:0,x:-100}}
                        animate={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:.5}}
                    >Prev
                    </motion.div>}

                    



                    

                    {navShow&&<div className="view-btn" >
                            <span onClick={viewToggle}>View</span>
                    </div>}

                    {navShow&&<motion.div 
                        className="btn next-btn" 
                        key='next-btn'
                        exit={{opacity:0,x:100}}
                        animate={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:.5}}
                    >
                            <span>Next</span>
                    </motion.div>}

                    {!navShow&&<motion.div     
                        className="btn back-btn"
                        key='back-btn'
                        exit={{opacity:0,y:100}}
                        animate={{opacity:1,y:0}}
                        initial={{opacity:0,y:100}}
                        transition={{duration:.5}}
                        onClick={viewToggle}
                    >Back
                    </motion.div>}
                </AnimatePresence>
            </div>
    </div>
  )
}

export default Carousel