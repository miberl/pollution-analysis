// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      type: 'interval',
      stops: [
        [0, '#000000'],
        [1, '#3aeb34'],
        [30, '#ffa600'],
        [50, '#ff0000'],
        [70, '#de00cf']
      ], default: "#000000"
    },
    'fill-opacity': 0.40
  }
};
