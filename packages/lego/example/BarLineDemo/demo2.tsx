import React from 'react';
import { BarLine } from '@td-design/lego';

export default () => (
  <BarLine
    xAxisData={['03月', '04月', '05月', '06月', '07月', '08月']}
    yAxis={[{ name: '万元' }, { name: '%' }]}
    lineData={{ name: '同比增长率', data: [12, 11, 19, 23, 32, 45] }}
    style={{ width: 486, height: 254 }}
    barType="cylinderBar"
    barData={[
      { name: '月高速车辆总数', data: [2012, 2555, 1234, 1899, 1986, 2100] },
      { name: '月空车数量', data: [1222, 1333, 899, 1234, 1500, 900] },
    ]}
  />
);
