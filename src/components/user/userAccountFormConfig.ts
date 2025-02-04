export const inputsConfig = [
  {
    label: "First name",
    rules: [
      (v) => v?.length >= 3 || "First name must be at least 3 characters.",
    ],
  },
  {
    label: "Email",
    required: true,
    rules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v,
        ) || "E-mail must be valid",
    ],
  },
  {
    type: "password",
    label: "Password",
    required: true,
    rules: [
      (v) => !!v || "Password is required",
      (v) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        "Password must contain at least one lowercase letter, one number, a special character, and one uppercase letter",
    ],
  },
  {
    type: "phone",
    label: "Phone Number",
    rules: [
      (v) => !!v || "Phone number is required",
      (v) => /^\d{10}$/.test(v) || "Phone number must be 10 digits",
    ],
  },
];
