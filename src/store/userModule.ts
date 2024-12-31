import { computed, reactive } from 'vue';
import { User } from '@/types/user.ts';
import { UserTypes } from '@/enums/user.ts';
import { getUser } from '@/api/user.ts';

export const state: {user: User} = reactive({
  user: {} as User,
});

export default function useUserModule () {
  const setUser = (val: User) => {
    state.user = val;
  };
  const loginUser = async () => {
    setUser(await getUser(UserTypes.ADMIN));
  };
  const logoutUser = () => {
    state.user = {} as User;
  };
  return {
    getUser: computed(() => state.user),
    loginUser,
    logoutUser,
    setUser,
  };
}
