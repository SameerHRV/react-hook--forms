import { z as zod } from "zod";
import { RegexPatterns } from "../../constants";

export const schema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters" }),
  email: zod
    .string()
    .email({ message: "Email is invalid" })
    .refine((val) => RegexPatterns.email.test(val), {
      message: "Email is invalid",
    }),
  states: zod.array(zod.string()).max(3),
});

export type Schema = zod.infer<typeof schema>;

export const defaultValues: Schema = {
  email: "",
  name: "",
  states: [],
};
