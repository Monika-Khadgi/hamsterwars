import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import ReactTooltip from "react-tooltip";

import { Form } from "../Form/Form";
import { getHamsterIndex } from '../../util/util.js';

import './gallery.css';

const Gallery = () => {
  const [hamsters, setHamsters] = useState();

  console.log('data: ', hamsters)
  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters"
    })
      .then((response) => {
        setHamsters(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const handleDeleteHamster = (id) => {

    axios({
      "method": "DELETE",
      "url": `https://safe-harbor-15583.herokuapp.com/api/hamsters/${id}`
    })
      .then((response) => {
        const deletedHamsterIndex = getHamsterIndex(hamsters, id);
        const hamsterListAfterDelete = hamsters.filter((_, index) => index !== deletedHamsterIndex);
        setHamsters(hamsterListAfterDelete);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const renderHamster = () => {
    const hamstersList = hamsters.map((hamster, index) => {
      //console.log('hamster: ', require(`img/${hamster.imgName}`))     
      return (
        <div className='image-wrapper centered' key={index}>
          <img
            className="hamster-img" alt="hampsters"
            src={`img/${hamster.imgName}`} />
            <div className="hamster-info-box hamster-img--primary">
              <p>Name: {`${hamster.name}`}</p>
              <p>Age: {`${hamster.age}`}</p>
              <p>Fav food: {`${hamster.favFood}`}</p>
              <p>Loves: {`${hamster.loves}`}</p>
              <p>Games: {`${hamster.games}`}</p>
              <p>Wins: {`${hamster.wins}`}</p>
              <p>Defeats: {`${hamster.defeats}`}</p>
            </div>

          <FontAwesomeIcon data-tip data-for="deleteTip" className="btn-del centered" icon={faTrashAlt} onClick={() => handleDeleteHamster(hamster.id)} />
          <ReactTooltip id="deleteTip" place="bottom" effect="solid">
            Delete
          </ReactTooltip>
        </div>
      );
    });
    return hamstersList;
  }

  const handleAddHamster = () => {
    return (
      <div className="form-panel">
        <Form />
      </div>
    );
  }

  return (
    <div className="container">
      <div className='add-hamster-div'>
        < button className='form-input-btn'><Link to='/add-hamster'>Add Hamster</Link></button>
      </div>
      <div className="row">
        <div className="list">
          {hamsters && renderHamster()}
        </div>
      </div>
    </div>
  );

}

export default Gallery;