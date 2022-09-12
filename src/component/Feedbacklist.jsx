import React from 'react'
import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'

import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function Feedbacklist() {
    const {feedback, isloading} = useContext (FeedbackContext)





if (!isloading && (!feedback || feedback.length === 0)){
    return <p>no feedback yet</p>
}





return (isloading ? <Spinner />
 : (
  <div className='feedback-list'>
  <AnimatePresence>
   {feedback.map((item) =>(
      <motion.div 
      key= {item.id}
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      >
       <Feedbackitem key={item.id} item={item}
        />
       </motion.div>
   ))}
   </AnimatePresence>
</div>
)
)

 // return (
   // <div className='feedback-list'>
    //    {feedback.map((item) =>(
    //        <Feedbackitem key={item.id} item={item}
    //        handleDelete={handleDelete} />
   //     ))}
  //  </div>
//  )
}


export default Feedbacklist