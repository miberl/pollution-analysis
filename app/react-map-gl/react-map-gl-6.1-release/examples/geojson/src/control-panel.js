import * as React from 'react';


function inttoDate(val) {
  let months = { "19": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], "20": [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }
  let year = 19;
  if (val > 365) {
    year++;
    val = val - 365;
  };
  let month = months[year.toString()];
  let tot = 0;
  for (let i = 1; i < 13; i++) {
    for (let j = 1; j < (month[i - 1] + 1); j++) {
      tot++;
      if (tot == val)
        return j + '/' + i + '/' + year;
    }
  }
}

function ControlPanel(props) {
  const { year } = props;
  const date = inttoDate(props.year);
  return (
    <div className="control-panel">
      <h3>Interactive GeoJSON</h3>
      <p>
        Dati relativi al giorno <b>{date}</b>. Hover over a state to
        see details.
      </p>
      <p>
        Data source: <a href="www.census.gov">US Census Bureau</a>
      </p>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/6.1-release/examples/geojson"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
      <hr />

      <div key={'year'} className="input">
        <label>Date</label>
        <input
          type="range"
          value={year}
          min={1}
          max={731}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
