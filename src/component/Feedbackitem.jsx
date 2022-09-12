import {FaTimes, FaEdit} from 'react-icons/fa'

import React, { useContext } from 'react';
import Card from "./shared/Card";
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function Feedbackitem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card key={item.id}>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() =>deleteFeedback(item.id)} className="close">
            <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">
            {item.text}
        </div>
        
    </Card>
  )
}

Feedbackitem.prototypes ={
    item: PropTypes.object.isRequired
}



export default Feedbackitem