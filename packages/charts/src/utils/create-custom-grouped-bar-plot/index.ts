/*
 * @文件描述: 分组条形图
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-04-30 14:06:37
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-06-22 10:05:43
 */
import { PlotCreateProps, baseConfig, baseXAxis, baseYAxis } from '../../config';
import CustomGroupedBar, { CustomGroupedBarConfig } from '../../g2components/CustomGroupedBar';
import { createSingleChart } from '../../baseUtils/chart';

const createCustomGroupedBarPlot = ({
  dom,
  data,
  config = {},
}: PlotCreateProps<CustomGroupedBarConfig>) => {
  const plot = new CustomGroupedBar(dom, {
    ...baseConfig,
    xAxis: baseXAxis,
    yAxis: baseYAxis,
    data,
    color: [
      'l(0) 0:rgba(236, 103, 37, 1) 1:rgba(254, 176, 30, 1)',
      'l(0) 0:rgba(24, 137, 243, 1) 1:rgba(0, 210, 255, 1)',
    ],
    ...config,
  });

  plot.render();
  return plot;
};

export default createSingleChart(createCustomGroupedBarPlot);
