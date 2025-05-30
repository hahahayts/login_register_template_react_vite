import { z } from "zod";

import { useForm } from "react-hook-form";
import { registerSchema } from "../../zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return <div></div>;
};
