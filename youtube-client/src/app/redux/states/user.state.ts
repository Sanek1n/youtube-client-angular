import { IUser } from '../state.models';

export interface IUserState {
  user: IUser,
}

export const initialUserState: IUserState = {
  user: { login: '', password: '' },
};
