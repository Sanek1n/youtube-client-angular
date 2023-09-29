import { IUserState, initialUserState } from './user.state';
import { IDataState, initialDataState } from './data.state';

export interface IAppState {
  user: IUserState,
  data: IDataState,
}

export const appInitialState: IAppState = {
  user: initialUserState,
  data: initialDataState,
};

export function getInitialState(): IAppState {
  return appInitialState;
}
