import React, { useState, useEffect, useCallback, useRef} from 'react';
import axios from 'axios';
import './battle.scss';

const Competition = () => {
  const [hamsterRight, setHamsterRight] = useState('');
  const [hamsterLeft, setHamsterLeft] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState({});
  const hamsterRightRef = useRef('');
  const hamsterLeftRef = useRef('');
  
  const fetchRightHamster = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters/random"
    })
    .then((response) => {
      setHamsterRight(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);
  
  const fetchLeftHamster = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters/random"
    })
    .then((response) => {
      setHamsterLeft(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);
  
  useEffect(() => {
    fetchRightHamster();
    hamsterRightRef.current = hamsterRight;
  }, [fetchRightHamster, winner]);
  
  useEffect(() => {
    fetchLeftHamster();
    hamsterLeftRef.current = hamsterLeft;
  }, [fetchLeftHamster, winner]);
  
  const hamsterClick = (clicked) => {
    const headers = {'Content-type': 'application/json'};
    if (clicked === 'left') {
       const newWinData = { wins: hamsterLeft.wins + 1, games: hamsterLeft.games + 1};
       const newLostData = { defeats: hamsterRight.defeats + 1, games: hamsterRight.games + 1};
       
       const numberOfWinsLeftHamster = hamsterLeft.wins + 1;
       const numberOfWinsRightHamster = hamsterRight.wins;
       if (numberOfWinsLeftHamster > numberOfWinsRightHamster) {
          setWinner(hamsterLeft);
        } else {
           setWinner(hamsterRight);
        }
       
      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterLeft.id}`, newWinData, {headers})
      .then((response) => {
        console.log('Match updated')
      })
      .catch((error) => {
        console.log(error)
      });
      
      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterRight.id}`, newLostData, {headers})
        .then((response) => {
          console.log('Match updated');
          setShowResult(true);
        })
        .catch((error) => {
          console.log(error)
        })
      }
      else if (clicked === 'right') {
        
        const newWinData = { wins: hamsterRight.wins + 1, games: hamsterRight.games + 1};
        const newLostData = { defeats: hamsterLeft.defeats + 1, games: hamsterLeft.games + 1};
        
        const numberOfWinsLeftHamster = hamsterLeft.wins;
        const numberOfWinsRightHamster = hamsterRight.wins + 1;
        if (numberOfWinsLeftHamster > numberOfWinsRightHamster) {
          setWinner(hamsterLeft);
        } else {
           setWinner(hamsterRight);
        }
        
       
        axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterLeft.id}`, newLostData, {headers})
        .then((response) => {
          console.log('Match updated');
          setShowResult(true);
        })
        .catch((error) => {
          console.log(error)
        });
      
        axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterRight.id}`, newWinData, {headers})
          .then((response) => {
            console.log('Match updated')
          })
          .catch((error) => {
            console.log(error)
        });
      
      }
    } 
  const renderResult = () => {
    
    return(
      <div className='imageSelect-wrapper'>
      <div>Which is the cuttes?</div>
      <div className='wrapperBorder'>
        <img className='result-image' src={`img/${hamsterLeftRef.current.imgName}`} alt="Results" />
        <div className="hamster-name-battle">{hamsterLeftRef.current.name}</div>
        <img className='result-image right' src={`img/${hamsterRightRef.current.imgName}`} alt="Results" />
        <div className="hamster-name-battle">{hamsterRightRef.current.name}</div>
      </div>
      <div className='winner'>{winner.name} is the winner for current battle</div>
      <div className='percentage-win'>Total win for {winner.name}: {(winner.wins/winner.games)*100}%</div>
    </div>
    )								
  }
  
  return (
    <div className='battle-wrapper'>
      {showResult && renderResult()}
      {/* <h2 className='battle-title'>{hamsterLeft && hamsterLeft.name} vs {hamsterRight && hamsterRight.name}</h2> */}
      <div className='imageSelect-wrapper'>
      
        <div className='wrapperBorder'>
        { hamsterLeft &&
          <div className='image1' onClick={() => hamsterClick('left')}><img src={`img/${hamsterLeft.imgName}`} />
            <div className="hamster-name-battle">{hamsterLeft.name}</div>
          </div>
        }
        { hamsterRight && 
          <div className='image1' onClick={() => hamsterClick('right')}><img src={`img/${hamsterRight.imgName}`} />
            <div className="hamster-name-battle">{hamsterRight.name}</div>
          </div>
        }
        </div>
      </div> 
  </div>
  )
};

export default Competition;