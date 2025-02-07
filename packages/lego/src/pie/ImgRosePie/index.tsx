import React, { CSSProperties, forwardRef, useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { TooltipComponent, TooltipComponentOption, GraphicComponent, GraphicComponentOption } from 'echarts/components';
import { merge } from 'lodash-es';

import createLinearGradient from '../../utils/createLinearGradient';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';
import useBasePieConfig from '../../hooks/useBasePieConfig';

import imgPieGraphic from '../../assets/img_pie_graphic.png';
import imgRosePieGraphic from '../../assets/img_rose_pie_graphic.png';
import imgRosePieBg from '../../assets/img_rose_pie_bg.webp';
import useStyle from '../../hooks/useStyle';

type ECOption = echarts.ComposeOption<PieSeriesOption | TooltipComponentOption | GraphicComponentOption>;

echarts.use([TooltipComponent, PieChart, GraphicComponent]);

/** 带图片的玫瑰图-对应Figma饼图5 */
export default forwardRef<
  ReactEcharts,
  {
    seriesData: { name: string; value: string; percent?: number }[];
    style?: CSSProperties;
    imgStyle?: CSSProperties;
    config?: ECOption;
    onEvents?: Record<string, (params?: any) => void>;
  }
>(({ seriesData, style, imgStyle, config, onEvents }, ref) => {
  const theme = useTheme();
  const baseChartConfig = useBaseChartConfig();
  const basePieConfig = useBasePieConfig();
  const { style: modifiedStyle } = useStyle(style);
  const option = useMemo(() => {
    return merge(
      {
        color: [
          createLinearGradient(theme.colors.primary50),
          createLinearGradient(theme.colors.primary100),
          createLinearGradient(theme.colors.primary200),
          createLinearGradient(theme.colors.primary300),
          createLinearGradient(theme.colors.primary400),
          createLinearGradient(theme.colors.primary500),
        ],
        legend: {
          ...baseChartConfig.legend,
        },
        graphic: {
          elements: [
            {
              type: 'image',
              left: 'center',
              style: {
                image: imgPieGraphic,
                width: 99,
                height: 99,
              },
              top: 'center',
              zlevel: 2,
            },
            {
              type: 'image',
              left: 'center',
              style: {
                image: imgRosePieGraphic,
                width: 50,
                height: 50,
              },
              top: 'center',
              zlevel: 3,
            },
          ],
        },
        series: {
          ...basePieConfig,
          left: 0,
          right: 0,
          radius: ['33%', '62%'],
          hoverAnimation: false,
          silent: true,
          data: seriesData,
          roseType: 'radius',
          legendHoverLink: false,
          zlevel: 3,
          label: {
            position: 'outside',
            padding: [10, -50, 50, -40],
            formatter: '{a|{b}}\n{a|{d}%}',
            rich: {
              a: {
                ...theme.typography.p2,
                color: theme.colors.gray50,
              },
            },
          },
          labelLine: {
            ...basePieConfig.labelLine,
            show: true,
            length2: 40,
            minTurnAngle: 45,
          },
        },
      },
      config
    ) as ECOption;
  }, [
    baseChartConfig.legend,
    basePieConfig,
    seriesData,
    theme.colors.gray50,
    theme.colors.primary100,
    theme.colors.primary200,
    theme.colors.primary300,
    theme.colors.primary400,
    theme.colors.primary50,
    theme.colors.primary500,
    theme.typography.p2,
    config,
  ]);

  return (
    <div style={modifiedStyle}>
      <img src={imgRosePieBg} style={{ position: 'absolute', top: 44, left: 60, ...imgStyle }} />
      <ReactEcharts
        ref={ref}
        style={{ width: modifiedStyle.width, height: modifiedStyle.height }}
        echarts={echarts}
        option={option}
        onEvents={onEvents}
      />
    </div>
  );
});
