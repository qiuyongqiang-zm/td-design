import React, { CSSProperties, useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
} from 'echarts/charts';
import {
  TooltipComponent,
  TooltipComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  GridComponent,
  GridComponentOption,
  SingleAxisComponent,
  SingleAxisComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { YAXisOption } from 'echarts/types/dist/shared';
import { merge } from 'lodash-es';

import createLinearGradient from '../../utils/createLinearGradient';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';
import useBaseBarConfig from '../../hooks/useBaseBarConfig';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | TooltipComponentOption | GridComponentOption | SingleAxisComponentOption
>;

// 注册必须的组件
echarts.use([TooltipComponent, GridComponent, SingleAxisComponent, BarChart, CanvasRenderer]);

/**
 * 进度条图，对应Figma其他图6
 */
export default ({
  name,
  data,
  style,
  config,
}: {
  name: string;
  data: { name: string; value: number }[];
  style?: CSSProperties;
  config?: ECOption;
}) => {
  const theme = useTheme();
  const baseChartConfig = useBaseChartConfig();
  const baseBarConfig = useBaseBarConfig();
  const option = useMemo(() => {
    return merge(
      {
        legend: {
          ...baseChartConfig.legend,
        },
        grid: {
          ...baseChartConfig.grid,
          left: '8%',
          right: '4%',
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: 'category',
            data,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            inverse: true,
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: data.map(item => item.value),
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              margin: 0,
              align: 'right',
              verticalAlign: 'bottom',
              formatter: '{value}%',
              ...(baseChartConfig.yAxis as YAXisOption).axisLabel,
              color: theme.colors.gray100,
            },
          },
        ],
        series: [
          {
            name,
            type: 'bar',
            barWidth: 6,
            yAxisIndex: 0,
            data: data,
            z: 3,
            label: {
              ...baseBarConfig.label,
              position: [0, -18],
              formatter: '{b}',
            },
            itemStyle: {
              color: createLinearGradient(theme.colors.primary50, false),
              barBorderRadius: 11,
            },
          },
          {
            type: 'bar',
            barWidth: 6,
            yAxisIndex: 0,
            barGap: '-100%',
            z: 2,
            silent: true,
            data: data.map(() => 100),
            itemStyle: {
              color: createLinearGradient(theme.colors.primary100, false),
              opacity: 0.54,
              barBorderRadius: 11,
            },
          },
          {
            type: 'scatter',
            data,
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
              color: theme.colors.assist1000,
              opacity: 1,
              borderWidth: 1,
              borderColor: theme.colors.gray50,
            },
            z: 4,
          },
        ],
      },
      config
    ) as ECOption;
  }, [
    baseBarConfig.label,
    baseChartConfig.grid,
    baseChartConfig.legend,
    baseChartConfig.yAxis,
    data,
    name,
    theme.colors.assist1000,
    theme.colors.gray100,
    theme.colors.gray50,
    theme.colors.primary100,
    theme.colors.primary50,
    config,
  ]);

  return <ReactEcharts echarts={echarts} option={option} style={style} />;
};
