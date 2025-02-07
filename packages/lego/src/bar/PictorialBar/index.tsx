import React, { CSSProperties, forwardRef, useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  PictorialBarChart,
  // 系列类型的定义后缀都为 SeriesOption
  PictorialBarSeriesOption,
} from 'echarts/charts';
import {
  TooltipComponent,
  TooltipComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SingleAxisComponentOption } from 'echarts';
import { merge } from 'lodash-es';

import createLinearGradient from '../../utils/createLinearGradient';
import useTheme from '../../hooks/useTheme';
import useBaseChartConfig from '../../hooks/useBaseChartConfig';
import useChartLoop from '../../hooks/useChartLoop';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<PictorialBarSeriesOption | TooltipComponentOption | GridComponentOption>;

// 注册必须的组件
echarts.use([TooltipComponent, GridComponent, PictorialBarChart, CanvasRenderer]);

/**
 * 象形柱状图，对应figma柱状图7
 */
export default forwardRef<
  ReactEcharts,
  {
    xAxisData: SingleAxisComponentOption['data'];
    name: string;
    unit?: string;
    data: (string | number | { name: string; value: string | number; unit: string })[];
    style?: CSSProperties;
    /** 控制是否自动轮播 */
    autoLoop?: boolean;
    /** 自动轮播的时长，默认为2s */
    duration?: number;
    config?: ECOption;
    inModal?: boolean;
    onEvents?: Record<string, (params?: any) => void>;
  }
>(({ name, data, unit, xAxisData, style, autoLoop, duration = 2000, config, inModal = false, onEvents }, ref) => {
  const theme = useTheme();
  const baseChartConfig = useBaseChartConfig(inModal);
  const echartsRef = useChartLoop(ref, xAxisData, autoLoop, duration);

  const option = useMemo(() => {
    const colors = [
      createLinearGradient(theme.colors.primary50),
      createLinearGradient(theme.colors.primary100),
      createLinearGradient(theme.colors.primary200),
      createLinearGradient(theme.colors.primary300),
      createLinearGradient(theme.colors.primary400),
      createLinearGradient(theme.colors.primary500),
    ];
    return merge(
      {
        color: [createLinearGradient(theme.colors.primary300)],
        grid: {
          ...baseChartConfig.grid,
        },
        tooltip: { ...baseChartConfig.tooltip },
        xAxis: {
          type: 'category',
          data: xAxisData,
          ...baseChartConfig.xAxis,
        },
        yAxis: {
          name: unit,
          ...baseChartConfig.yAxis,
        },
        series: [
          {
            name,
            type: 'pictorialBar',
            barCategoryGap: '-100%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            data: data.map((item, index) => ({
              ...(typeof item === 'object' ? item : { value: item, unit }),
              itemStyle: {
                opacity: 0.5,
                color: colors[index],
              },
            })),
          },
        ],
      },
      config
    ) as ECOption;
  }, [
    theme.colors.primary50,
    theme.colors.primary100,
    theme.colors.primary200,
    theme.colors.primary300,
    theme.colors.primary400,
    theme.colors.primary500,
    baseChartConfig.grid,
    baseChartConfig.tooltip,
    baseChartConfig.xAxis,
    baseChartConfig.yAxis,
    xAxisData,
    unit,
    name,
    data,
    config,
  ]);

  return <ReactEcharts ref={echartsRef} echarts={echarts} option={option} style={style} onEvents={onEvents} />;
});
