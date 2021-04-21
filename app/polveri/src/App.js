/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {IconLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
const coordinates = require('./data/coord.json')


// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWliZXJsIiwiYSI6ImNrbnI0YnNmMDBsNWcydXF3end5bnJvMnYifQ.-iTvckAzIPYilCLo9G14sA';

const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
};

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 11.0,
  latitude: 45.455,
  zoom: 9.5,
  pitch: 0,
  bearing: 0
};

console.log(coordinates)

function App ({viewState}) {
  const layer = new IconLayer({
    id: 'icon-layer',
    data: coordinates,
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',

    sizeScale: 15,
    getPosition: d => d.coordinates,
    getSize: d => 5,
    getColor: d => [Math.sqrt(d.exits), 140, 0]
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}
export default App;