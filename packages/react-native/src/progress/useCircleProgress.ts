import { useEffect } from 'react';
import { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

import { ProgressProps } from './type';

export default function useCircleProgress({
  width = 0,
  strokeWidth = 0,
  value = 0,
  unit,
}: Pick<ProgressProps, 'width' | 'strokeWidth' | 'value' | 'unit'>) {
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(0);
  const textLabel = useSharedValue('');

  useEffect(() => {
    progress.value = withTiming(value, { duration: 600 });
    textLabel.value = unit ? `${value}${unit}` : `${value}`;
  }, [value, unit]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference - (progress.value * circumference) / 100,
  }));

  return { radius, textLabel, circumference, animatedProps };
}
