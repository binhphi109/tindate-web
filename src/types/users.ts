export type User = {
  _id: string;
  name: string;
  birthDate: Date;
  avatar: string;
};

export type UserAction = {
  userFromId: string;
  userToId: string;
};

export type SuccessResponse = {
  success: boolean;
};

export type LikeUserResponse = {
  matched: boolean;
  success: boolean;
};
