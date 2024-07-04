import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/Body-Part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDeatil }) => {
    const { BodyPart, gifUrl, name, target, Equipment }= exerciseDeatil;

  return (
    <Stack gap="60px" sx={{flexDirection: { lg:'row'},p:'20px', alignItems:
'center'}}>
    <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
</Stack>
  )
}

export default Detail