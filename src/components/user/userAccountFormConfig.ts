export const formInputConfig = [
  {
    fieldType: "text",
    type: "name",
    label: "First name",
    rules: [
      (v: string) =>
        v?.length >= 3 || "First name must be at least 3 characters.",
    ],
  },
  {
    fieldType: "text",
    type: "email",
    label: "Email",
    required: true,
    rules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v,
        ) || "E-mail must be valid",
    ],
  },
  {
    fieldType: "text",
    type: "password",
    label: "Password",
    required: true,
    rules: [
      (v: string) => !!v || "Password is required",
      (v: string) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        "Password must contain at least one lowercase letter, one number, a special character, and one uppercase letter",
    ],
  },
  {
    fieldType: "number",
    type: "phone",
    label: "Phone Number",
    rules: [
      (v: number) => !!v || "Phone number is required",
      //(v: number) => /^\d{10}$/.test(v) || "Phone number must be 10 digits",
    ],
  },
];
