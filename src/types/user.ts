import { UserTypes } from '@/enums/user.ts';

export interface User {
  id: number,
  name: string,
  imgUrl: string,
  type: UserTypes,
  menu: UserMenu[],
}
export interface Account {
  id: number,
  name: string,
  email: string,
  password: string,
}

interface UserMenu {
  url: string,
  title: string,
  icon: string,
  value: string,
}