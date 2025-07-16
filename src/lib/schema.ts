// lib/schemas.ts
import { z } from "zod";

export const searchParamsSchema = z
  .object({
    from: z.string().min(1, "From is required"),
    to: z.string().min(1, "To is required"),
    departure: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Invalid departure date",
    }),
    return: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Invalid return date",
    }),
  })
  .refine((data) => new Date(data.return) >= new Date(data.departure), {
    message: "Return must be after departure",
    path: ["return"],
  });
