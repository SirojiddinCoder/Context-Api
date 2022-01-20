import React, {useContext} from 'react';

import { Kino } from './context'

const Movie = (props) => {

  const [data,setData] = useContext(Kino)
  console.log(data);


    return(
     <div>
       <h1>{data}</h1>
          <h1>Name:{props.data.name}</h1>
          <h3>Price:{props.data.price}</h3>
          <hr/>
     </div>
                       
    )
}

export default Movie;
