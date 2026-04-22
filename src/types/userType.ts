export type UserDto = {
  _id: string;
  phone: string;
  city?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
};

export type UserModel = {
  _id: string;
  phone: string;
};
