import React from 'react';
import { Map } from '@td-design/lego';

export default () => (
  <Map
    style={{ width: 486, height: 454 }}
    zoom={0.8}
    mapSeriesConfig={{
      label: {
        show: true,
        color: 'red',
        fontSize: 10,
      },
    }}
  />
);
