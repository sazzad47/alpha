import { Reducer } from 'react';
import { sidebarAction } from './actions';
import { DeltaProps } from './props';
import { sidebarTypes } from './types';

const sidebarReducer: Reducer<DeltaProps, sidebarAction> = (
    state,
    action
  ) => {
    const { type, payload } = action;

    switch (type) {
      case sidebarTypes.CHANGE_SIDEBAR_STATE:
        return {
          ...state,
          ...payload
        };
      default:
        return state;
    }
  };

  export default sidebarReducer