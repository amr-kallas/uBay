import { z } from "zod";
import { regPassword } from "../constant/passwordRegex";

export const emailSchema=z.string().trim().min(1).email()
export const passwordSchema=z.string().trim().min(6).regex(regPassword)