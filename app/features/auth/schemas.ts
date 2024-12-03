import * as z from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "min" }).regex(/[A-Z]/, { message: "uppercase" }).regex(/[a-z]/, { message: "lowercase" }).regex(/[0-9]/, { message: "number" }),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "min" }),
});
