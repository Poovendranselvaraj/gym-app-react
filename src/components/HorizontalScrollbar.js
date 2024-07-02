import React from 'react'
import { Box } from '@mui/material';
import {ScrollMenu, VisibilityContext} from 
'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
        {data.map((item)=>(
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 40px"
             >
               <BodyPart item={item} bodyPart=
               {BodyPart} setBodyPart=
               {setBodyPart} />
            
             </Box> 
        )
    )}
     </div>
  )
}

export default HorizontalScrollbar