import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDeatil }) => {
    const { bodypart, gifUrl, name, target, Equipment }= exerciseDeatil;

    console.log(gifUrl)
  return (
    <Stack gap="60px" sx={{flexDirection: { lg:'row'},p:'20px', alignItems:
'center'}}>
    <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
</Stack>
  )
}

export default Detail