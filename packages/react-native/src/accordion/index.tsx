import React, { ReactNode, FC } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { useTheme } from '@shopify/restyle';
import Panel, { Section } from './Panel';
import helpers from '../helpers';
import useAccordion from './useAccordion';
import { Theme } from '../theme';

const { ONE_PIXEL, px } = helpers;
export interface AccordionProps {
  /** 当前展开的选项卡 */
  activeSections?: number[];
  /** 修改事件 */
  onChange?: (activeSections: number[]) => void;
  /** 手风琴选项卡列表 */
  sections: Section[];
  /** 是否允许展开多个 */
  multiple?: boolean;
  /** 展开选项卡高度 */
  expandedHeight?: number;
  /** 点击透明度 */
  activeOpacity?: number;
  /** 自定义渲染标题 */
  renderTitle?: (item: Section) => ReactNode;
  /** 自定义渲染内容 */
  renderContent?: (item: Section) => ReactNode;
  /** 容器样式 */
  containerStyle?: StyleProp<ViewStyle>;
  /** 选项卡样式 */
  sectionContainerStyle?: StyleProp<ViewStyle>;
}

const Accordion: FC<AccordionProps> = ({
  sections = [],
  multiple = false,
  expandedHeight = px(120),
  activeOpacity = 0.8,
  activeSections = [],
  onChange,
  renderTitle,
  renderContent,
  containerStyle,
  sectionContainerStyle,
}) => {
  const theme = useTheme<Theme>();
  const { currentSections, handleChange } = useAccordion({ multiple, activeSections, onChange });

  return (
    <View
      style={[
        {
          borderWidth: ONE_PIXEL,
          borderBottomWidth: 0,
          borderColor: theme.colors.border,
        },
        containerStyle,
      ]}
    >
      {sections.map((item, index) => {
        const expanded = currentSections.includes(index);
        return (
          <Panel
            key={index}
            {...{
              index,
              item,
              expanded,
              renderTitle,
              renderContent,
              expandedHeight,
              activeOpacity,
              sectionContainerStyle,
            }}
            onChange={handleChange}
          />
        );
      })}
    </View>
  );
};
export type { Section };
export default Accordion;
