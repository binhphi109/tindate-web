import axios from "axios";
import Config from "config";
import { LikeUserResponse, SuccessResponse, User } from "../types/users";

const UserApi = {
  async login(): Promise<User> {
    const response = await axios.post(`${Config.ApiUrl}/users/login`);
    return response.data;
  },
  async fetchUsers(): Promise<User[]> {
    const response = await axios.get(`${Config.ApiUrl}/users`);
    return response.data;
  },
  async fetchUser(userId: string): Promise<User> {
    const response = await axios.get(`${Config.ApiUrl}/users/${userId}`);
    return response.data;
  },
  async getDiscover(userId: string): Promise<User[]> {
    const response = await axios.get(`${Config.ApiUrl}/users/discover`, {
      params: {
        userId,
      },
    });
    return response.data;
  },
  async fetchLikes(userId: string): Promise<User[]> {
    const response = await axios.get(`${Config.ApiUrl}/users/${userId}/likes`);
    return response.data;
  },
  async fetchMatches(userId: string): Promise<User[]> {
    const response = await axios.get(`${Config.ApiUrl}/users/${userId}/matches`);
    return response.data;
  },
  async like(userFromId: string, userToId: string): Promise<LikeUserResponse> {
    const response = await axios.post(`${Config.ApiUrl}/users/like`, {
      userFromId,
      userToId,
    });
    return response.data;
  },
  async pass(userFromId: string, userToId: string): Promise<SuccessResponse> {
    const response = await axios.post(`${Config.ApiUrl}/users/pass`, {
      userFromId,
      userToId,
    });
    return response.data;
  },
};

export default UserApi;
