import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

export function updatePercentiles(featureCollection, accessor) {
  const {features} = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const value = accessor(f);
      console.log(value);
      const properties = {
        ...f.properties,
        value,
        percentile: value
      };
      return {...f, properties};
    })
  };
}
