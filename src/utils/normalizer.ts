import type { UserDto, UserModel } from '@/types/userType';

export const normalizeUser = (user: UserDto): UserModel => {
  return {
    _id: user._id,
    phone: user.phone,
  };
};
