import React, { Component, useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './AddHamsterForm.css';

class AddHamsterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      wins: '',
      defeats: '',
      age: '',
      games: '',
      loves: '',
      favFood: '',
      imgName: '',
    };
  };


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, wins, defeats, age, games, loves, favFood, imgName } = this.state;

    const hamsterInfo = {
      name,
      wins,
      defeats,
      age,
      games,
      loves,
      favFood,
      imgName
    };

    axios.post('https://safe-harbor-15583.herokuapp.com/api/hamsters', JSON.stringify(hamsterInfo), {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      //.then(() => console.log(hamsterInfo, 'Hamster added successfully !!'))
      .then(() => window.location = "/gallery")

      .catch(err => {
        console.error(err);
      });

  };
  render() {
    return (
      <div className="container">
        <Container component="main" maxWidth="xs" className="page-wrapper">
          <CssBaseline />
          <div className="paper">
            <Typography component="h4" variant="h4" className="page-title centered">
              Add new hamster
                  </Typography>
            <form className="signup-form" onSubmit={this.handleSubmit} >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    autoFocus
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    type="number"
                    required
                    fullWidth
                    id="wins"
                    label="wins"
                    name="wins"
                    autoComplete="wins"
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    type="number"
                    required
                    fullWidth
                    name="defeats"
                    label="defeats"
                    id="defeats"
                    autoComplete="defeats"
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    type="number"
                    required
                    fullWidth
                    id="age"
                    label="age"
                    name="age"
                    autoComplete="age"
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    type="number"
                    required
                    fullWidth
                    id="games"
                    label="games"
                    name="games"
                    autoComplete="games"
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="loves"
                    name="loves"
                    variant="outlined"
                    required
                    fullWidth
                    id="loves"
                    label="loves"
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="favFood"
                    label="favourite food"
                    name="favFood"
                    autoComplete="favFood"
                    onChange={this.handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Add
          </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  };
};

export default AddHamsterForm;

