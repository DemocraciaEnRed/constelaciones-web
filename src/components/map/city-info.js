
   
import * as React from 'react';

const CityInfo = ({info}) => {
  const displayName = info[0];

  return (
    <div>
      <div>
        <h3>{displayName}</h3>
        </div>
    </div>
  );
}

export default React.memo(CityInfo);