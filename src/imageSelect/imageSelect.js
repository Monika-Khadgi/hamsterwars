import react from 'react';
import './imageSelect.scss';
import image1 from '../images/hamster-1.jpg';
import image2 from '../images/hamster-2.jpg';

export default function Example(){

  return (
  
   <div className='imageSelect-wrapper'>
    <div className='wrapperBorder'>
      <div className='image1'><img src={image1} />
      <div>
        Name:
      </div>
      </div>
      <div className='image2'><img src={image2} />
      <div>
        Name:
      </div>
      </div>
    </div>
  </div> 
 
    
  )
}