import React, { Component } from 'react';
import Column from '../Column';

export default function isColumn(propDefaults) {
  return function decorator(LowerOrderComponent) {
    return function ColumnContainer({ columns = {}, ...props }) {

      return (
        <Column {...columns} {...propDefaults}>
          <LowerOrderComponent {...props} />
        </Column>
      );
    }
  }
}
