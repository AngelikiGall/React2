import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Movie.css';

const AddMovie = () => {
  
    return (
      <div class="movie-container">
        <Form>
            <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" placeholder="Enter a title" />
          </FormGroup>
          <FormGroup>
            <Label for="tagline">Tagline</Label>
            <Input type="tagline" placeholder="Enter a tagline" />
          </FormGroup>
          <FormGroup>
            <Label for="overview">Overview</Label>
            <Input type="overview" placeholder="Enter an overview" />
          </FormGroup>
          <FormGroup>
            <Label for="vote_average">Vote average</Label>
            <Input type="vote_average" placeholder="Enter a vote average" />
          </FormGroup>
          <FormGroup>
            <Label for="homepage">Home page</Label>
            <Input type="homepage" placeholder="Enter a homepage" />
          </FormGroup>
          <FormGroup>
            <Label for="poster_path">Poster Path</Label>
            <Input type="poster_path" placeholder="Enter a poster path" />
          </FormGroup>
          <Button>Submit</Button>
      </Form>
      </div>
    );
  };
  
  export default AddMovie;
  