import { z } from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "title must be at least 3 characters")
    .default("Default Title"),
  description: z
    .string()
    .min(10, "description must be at least 10 characters")
    .max(1000, "description must be less than 1000 characters")
    .default("Default description that is at least 10 characters long."),
  location: z
    .string()
    .min(3, "location must be at least 3 characters")
    .max(1000, "location must be less than 1000 characters")
    .default("Default Location"),
  imageUrl: z.string().default("https://example.com/default-image.jpg"),
  startDateTime: z.date().default(() => new Date()),
  endDateTime: z.date().default(() => new Date()),
  categoryId: z.string().default("default-category-id"),
  price: z.string().default("0.00"),
  isFree: z.boolean().default(true),
  url: z.string().url().default("https://example.com"),
});
