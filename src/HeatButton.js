import { useState } from 'react';

function HeatButton({name}) {
  const [heat, setHeat] = useState(1);

  const style = {
    boxShadow: `0px 4px 40px 15px var(--heat-map-${heat})`,
  };
  return (
    <button
      className="btn"
      id="btn-2"
      style={style}
      onClick={() => {
        setHeat(heat > 9 ? 1 : heat + 1);
      }}
    >
      {name}
    </button>
  );
}

export default HeatButton;
