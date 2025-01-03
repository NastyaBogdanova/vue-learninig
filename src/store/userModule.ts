import { computed, reactive } from 'vue';
import { Account, User } from '@/types/user.ts';
import { UserTypes } from '@/enums/user.ts';
import { getAccount, getUser } from '@/api/user.ts';

export const state: {user: User, account: Account, activeUserType: UserTypes} = reactive({
  user: {} as User,
  account: {} as Account,
  activeUserType: UserTypes.ADMIN,
});

export default function useUserModule () {
  const loginUser = async () => {
    state.user = await getUser(state.activeUserType);
  };
  const logoutUser = () => {
    state.user = {} as User;
  };
  const loadAccountInfo = async () => {
    state.account = await getAccount(state.activeUserType)
  };
  return {
    getUser: computed(() => state.user),
    getAccount: computed(() => state.account),
    loginUser,
    logoutUser,
    loadAccountInfo,
  };
}
