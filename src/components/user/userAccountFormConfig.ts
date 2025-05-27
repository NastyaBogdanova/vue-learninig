export const formInputConfig = [
  {
    fieldType: 'text',
    type: 'name',
    label: 'First name',
    rules: [
      (v: string) =>
        v?.length >= 3 || 'First name must be at least 3 characters.',
    ],
  },
  {
    fieldType: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    rules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) =>
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v,
        ) || 'E-mail must be valid',
    ],
  },
  {
    fieldType: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    rules: [
      (v: string) => !!v || 'Password is required',
      (v: string) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        'Password must contain at least one lowercase letter, one number, a special character, and one uppercase letter',
    ],
  },
  {
    fieldType: 'tel',
    type: 'phone',
    label: 'Phone',
    rules: [
      (v: string) => !!v || 'Phone number is required',
      (v: string) => /^\+?\d+$/.test(v) || 'Only digits. For example: +79999999999',
    ],
  },
];
