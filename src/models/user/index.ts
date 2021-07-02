import { createModel } from '@rematch/core';
import { RootModel } from '..';
import state, { initialize, UserState } from './state';

const user = createModel<RootModel>()({
  state: state as UserState,
  reducers: {
    setState(state, payload: Partial<UserState>) {
      return {
        ...state,
        ...payload,
      };
    },
    initialize() {
      return initialize;
    },
  },
  effects: (dispatch) => ({
    async changeUserName(name: string) {
      try {
        dispatch.user.setState({ name });
      } catch (err) {
        console.log('err');
      }
    },
  }),
});

export default user;
