import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import './battle.css';

const Competition = () => {
  const [hamsterRight, setHamsterRight] = useState('');
  const [hamsterLeft, setHamsterLeft] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState({});
  const [winnerColor, setWinnerClass] = useState('');
  const hamsterRightRef = useRef('');
  const hamsterLeftRef = useRef('');

  const fetchRightHamster = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters/random"
      //"url": "http://localhost:8080/api/hamsters/random"
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
      //"url": "http://localhost:8080/api/hamsters/random"
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
    const headers = { 'Content-type': 'application/json' };
    
    if (clicked === 'left') {
      setWinnerClass('result-image-winner');
      const newWinData = { wins: hamsterLeft.wins + 1, games: hamsterLeft.games + 1 };
      const newLostData = { defeats: hamsterRight.defeats + 1, games: hamsterRight.games + 1 };

      const numberOfWinsLeftHamster = hamsterLeft.wins + 1;
      const numberOfWinsRightHamster = hamsterRight.wins;
      if (numberOfWinsLeftHamster > numberOfWinsRightHamster) {
        setWinner(hamsterLeft);
      } else {
        setWinner(hamsterRight);
      }

      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterLeft.id}`, newWinData, { headers })
      //axios.put(`http://localhost:8080/api/hamsters/${hamsterLeft.id}`, newWinData, { headers })
        .then((response) => {
          console.log('Match updated')
        })
        .catch((error) => {
          console.log(error)
        });

      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterRight.id}`, newLostData, { headers })
      //axios.put(`http://localhost:8080/api/hamsters/${hamsterRight.id}`, newLostData, { headers })
        .then((response) => {
          console.log('Match updated');
          setShowResult(true);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else if (clicked === 'right') {
      setWinnerClass('result-image-winner');
      const newWinData = { wins: hamsterRight.wins + 1, games: hamsterRight.games + 1 };
      const newLostData = { defeats: hamsterLeft.defeats + 1, games: hamsterLeft.games + 1 };

      const numberOfWinsLeftHamster = hamsterLeft.wins;
      const numberOfWinsRightHamster = hamsterRight.wins + 1;
      if (numberOfWinsLeftHamster > numberOfWinsRightHamster) {
        setWinner(hamsterLeft);
      } else {
        setWinner(hamsterRight);
      }


      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterLeft.id}`, newLostData, { headers })
      //axios.put(`http://localhost:8080/api/hamsters/${hamsterLeft.id}`, newLostData, { headers })
        .then((response) => {
          console.log('Match updated');
          setShowResult(true);
        })
        .catch((error) => {
          console.log(error)
        });

      axios.put(`https://safe-harbor-15583.herokuapp.com/api/hamsters/${hamsterRight.id}`, newWinData, { headers })
      //axios.put(`http://localhost:8080/api/hamsters/${hamsterRight.id}`, newWinData, { headers })
        .then((response) => {
          console.log('Match updated')
        })
        .catch((error) => {
          console.log(error)
        });

    }
  }
  const renderResult = () => {
    return (
        <div className='result-wrapperBorder'>
          <div className="result-img-left">
            <img className={`result-image ${winnerColor}`} src={`img/${hamsterLeftRef.current.imgName}`} alt="Results" />
            <p className="hamster-name-battle centered">{hamsterLeftRef.current.name}</p>
          </div>
          <div className="result-img-right">
            <img className={`result-image ${winnerColor}`} src={`img/${hamsterRightRef.current.imgName}`} alt="Results" />
            <p className="hamster-name-battle centered">{hamsterRightRef.current.name}</p>
          </div>
          <div className="winner-info">
            <h3 className='winner'>{winner.name} is the cutest for current battle</h3>
            <p className='percentage-win'>Total win for {winner.name}: {((winner.wins / winner.games) * 100).toFixed(2)}%</p>
          </div>
        </div>
    )
  }

  return (
    <div className="container">
      <div className='battle-wrapper'>
        <h1 className="title-battle centered">Which is the cutest?</h1>
        {showResult && renderResult()}
        {/*<h2 className='battle-title'>{hamsterLeft && hamsterLeft.name} vs {hamsterRight && hamsterRight.name}</h2>*/}
        
          <div className='select-image-wrapperBorder'>
            {hamsterLeft &&
              <div className="hamster-img-left" onClick={() => hamsterClick('left')}><img className="hamster-img" src={`img/${hamsterLeft.imgName}`} />
                <p className="hamster-name-battle centered">{hamsterLeft.name}</p>
              </div>
            }
            {hamsterRight &&
              <div className="hamster-img-right" onClick={() => hamsterClick('right')}><img className="hamster-img" src={`img/${hamsterRight.imgName}`} />
                <p className="hamster-name-battle centered">{hamsterRight.name}</p>
              </div>
            }
          
        </div>
      </div>
    </div>
  )
};

export default Competition;