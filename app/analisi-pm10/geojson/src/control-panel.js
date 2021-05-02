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
      <h3>Dati stazioni di rilevamento</h3>
      <p>
        Dati relativi al giorno <b>{date}</b>
      </p>
      <p>
        Data source: <a href="www.census.gov">US Census Bureau</a>
      </p>
      <hr />

      <div key={'year'} className="input">
        <label>Data</label>
        <input
          type="range"
          value={year}
          min={1}
          max={731}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
      <hr />
      <p>Legenda - qualità dell'aria</p>
      <div>
      <svg name="h" fill="#3aeb34" width="10" height="10"><circle r="5" cx="5" cy="5"></circle></svg>
      <span>&#160; buona - PM10 &#60; 30 </span>
      </div>
      <div>
      <svg name="h" fill="#ffa600" width="10" height="10"><circle r="5" cx="5" cy="5"></circle></svg>
      <span>&#160; media - PM10 30 - 50 </span>
      </div>
      <div>
      <svg name="h" fill="#ff0000" width="10" height="10"><circle r="5" cx="5" cy="5"></circle></svg>
      <span>&#160; bassa - PM10 50 - 70 (Sup. limite di legge) </span>
      </div>
      <div>
      <svg name="h" fill="#de00cf" width="10" height="10"><circle r="5" cx="5" cy="5"></circle></svg>
      <span>&#160; pessima - PM10 &#62; 70 (Sup. limite di legge) </span>
      </div>
      <div>
      <svg name="h" fill="#000000" width="10" height="10"><circle r="5" cx="5" cy="5"></circle></svg>
      <span>&#160; nessuna rilevazione </span>
      </div>
      <div className="source-link">
        <span>&#10;&#13;</span>
        <a href="index.html">
          Torna alla home ↗
        </a>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
