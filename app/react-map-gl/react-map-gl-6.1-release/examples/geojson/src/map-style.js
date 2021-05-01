// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#5FDF4D'],
        [1, '#E97F00'],
        [2, '#d53e4f']
      ]
    },
    'fill-opacity': 0.4
  }
};
