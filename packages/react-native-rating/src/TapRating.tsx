import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme, Flex, Text, helpers } from '@td-design/react-native';

import Star from './components/Star';
import { TapRatingProps } from './type';
import useTapRating from './useTapRating';

const { px } = helpers;
const STAR_SIZE = px(40);

const TapRating: FC<TapRatingProps> = ({
  rating = 3,
  reviews = ['非常差', '很差', '一般', '很好', '非常好'],
  count = 5,
  showReview = true,
  reviewSize = px(25),
  onFinishRating,
  size = STAR_SIZE,
  disabled = false,
  starStyle,
  outRangeScale = 1.2,
  ...restProps
}) => {
  const theme = useTheme<Theme>();
  const {
    selectedColor = theme.colors.func200,
    reviewColor = selectedColor,
    unselectedColor = theme.colors.gray100,
  } = restProps;

  const { position, handleSelect } = useTapRating({ rating, onFinishRating });

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="transparent">
      {showReview && (
        <Text style={[styles.reviewText, { fontSize: reviewSize, color: reviewColor }]}>{reviews[position - 1]}</Text>
      )}
      <Flex justifyContent="center" alignItems="center">
        {Array(count)
          .fill('')
          .map((_, index) => (
            <Star
              key={index}
              position={index + 1}
              fill={position >= index + 1}
              onSelectStarInPosition={handleSelect}
              {...{ size, disabled, starStyle, selectedColor, unselectedColor, outRangeScale }}
            />
          ))}
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  reviewText: {
    margin: px(10),
    fontWeight: 'bold',
  },
});

export default TapRating;
