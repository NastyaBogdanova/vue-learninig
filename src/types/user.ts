import { UserTypes } from '@/enums/user.ts';

export interface User {
  id: number,
  name: string,
  imgUrl: string,
  type: UserTypes,
  menu: UserMenu[],
}

interface UserMenu {
  url: string,
  title: string,
  icon: string,
  value: string,
}