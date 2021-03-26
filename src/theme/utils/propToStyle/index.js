import { breakpointsMedia } from '../breakpointsMedia';

export function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return function reString(props) {
    const propValue = props[propName];
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.sm) breakpoints.sm = { [propName]: propValue.sm };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.lg };

      return breakpointsMedia(breakpoints);
    }
  };
}
