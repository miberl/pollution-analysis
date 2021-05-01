// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      type: 'interval',
      stops: [
        [0, '#5FDF4D'],
        [40, '#E97F00'],
        [60, '#d53e4f']
      ], default: "#ffffff"
    },
    'fill-opacity': 0.4
  }
};
