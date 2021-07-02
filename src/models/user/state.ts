export interface UserState {
  name: string;
  age: number;
}

export const initialize: UserState = {
  name: 'SangHan',
  age: 28,
};

export default Object.assign({}, initialize);
