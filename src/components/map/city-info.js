import * as React from 'react';

const CityInfo = ({info}) => {
  const { title, country, city} = info
  return (
    <div>
      <div>
        <h3 className="title is-size-6 has-text-black pt-5 pb-0 mb-0">{title}</h3>
        <p className="pt-1 mt-0 is-italic">{city} - {country}</p>
      </div>
    </div>
  );
}

export default React.memo(CityInfo);