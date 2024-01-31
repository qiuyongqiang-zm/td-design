import React, { FC, useMemo } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

import { useTheme } from '@shopify/restyle';
import { useSafeState } from '@td-design/rn-hooks';

import Box from '../box';
import helpers from '../helpers';
import Pressable from '../pressable';
import SvgIcon from '../svg-icon';
import Text from '../text';
import { Theme } from '../theme';
import { AccordionProps, Section } from './type';
import useAccordion from './useAccordion';

const Accordion: FC<AccordionProps> = ({
  sections = [],
  multiple = true,
  activeOpacity = 0.6,
  customIcon,
  accordionStyle,
  headerStyle,
  contentStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useSafeState<number>();

  return (
    <FlatList
      data={sections}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => (
        <AccordionItem
          {...item}
          multiple={multiple}
          customIcon={customIcon}
          currentIndex={currentIndex}
          index={index}
          activeOpacity={activeOpacity}
          onPress={setCurrentIndex}
          headerStyle={headerStyle}
          contentStyle={contentStyle}
        />
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      decelerationRate={'fast'}
      contentContainerStyle={accordionStyle}
      style={{ flexGrow: 0 }}
    />
  );
};

const AccordionItem: FC<
  Section &
    Pick<AccordionProps, 'customIcon' | 'contentStyle' | 'headerStyle'> &
    Required<Pick<AccordionProps, 'multiple' | 'activeOpacity'>> & {
      currentIndex?: number;
      index: number;
      onPress: (index: number) => void;
    }
> = ({
  title,
  content,
  customIcon,
  multiple,
  currentIndex,
  index,
  activeOpacity,
  onPress,
  contentStyle,
  headerStyle,
}) => {
  const theme = useTheme<Theme>();

  const { iconStyle, heightStyle, progress, contentRef, handlePress } = useAccordion({
    multiple,
    currentIndex,
    index,
    onPress,
  });

  const Title = useMemo(() => {
    if (typeof title === 'string') {
      return (
        <Text variant="p0" color="text">
          {title}
        </Text>
      );
    }
    return title;
  }, [title]);

  const Content = useMemo(() => {
    if (typeof content === 'string') {
      return (
        <Text variant="p1" selectable color="text">
          {content}
        </Text>
      );
    }
    return content;
  }, [content]);

  return (
    <Box backgroundColor={'white'} overflow={'hidden'}>
      <Pressable
        activeOpacity={activeOpacity}
        onPress={handlePress}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: theme.spacing.x2,
            paddingVertical: theme.spacing.x2,
            borderBottomWidth: helpers.ONE_PIXEL,
            borderBottomColor: theme.colors.border,
            backgroundColor: theme.colors.white,
          },
          headerStyle,
        ]}
      >
        {Title}
        {customIcon ? (
          customIcon({ progress })
        ) : (
          <Animated.View style={iconStyle}>
            <SvgIcon name="down" color={theme.colors.icon} size={helpers.px(20)} />
          </Animated.View>
        )}
      </Pressable>
      <Animated.View style={heightStyle}>
        <Animated.View
          ref={contentRef}
          collapsable={false}
          style={[
            contentStyle,
            {
              position: 'absolute',
              width: '100%',
              top: 0,
            },
          ]}
        >
          {Content}
        </Animated.View>
      </Animated.View>
    </Box>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
