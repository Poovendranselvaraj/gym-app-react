import React, {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';



const Home = () => {
  const [bodyPart, setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([]);

  console.log(bodyPart)
  

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
      SetExercises={setExercises} bodyPart={bodyPart} setBodypart={setBodyPart} />
      <Exercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      exercises={exercises}
      />
    </Box>
  )
}

export default Home