import * as z from 'zod';

const characteristicSchema = z.object({
  name: z.string()
    .min(1, { message: "Обязательное поле" })
    .min(3, { message: "Минимум 3 символа" })
    .regex(/^[а-яА-ЯёЁ\s]+$/, { message: "Используйте только кириллицу" }),
  type: z.string()
    .min(1, { message: "Обязательное поле" })
    .min(3, { message: "Минимум 3 символа" })
    .regex(/^[а-яА-ЯёЁ\s]+$/, { message: "Используйте только кириллицу" }),
});

export const productFormSchema = z.object({
  productName: z.string()
    .min(1, { message: "Обязательное поле" })
    .max(20, { message: "Не более 20 символов" })
    .regex(/^[а-яА-ЯёЁ\s]+$/, { message: "Используйте только кириллицу" }),
  productCode: z.string()
    .min(1, { message: "Обязательное поле" })
    .min(3, { message: "Минимум 3 символа" })
    .max(10, { message: "Максимум 10 символов" })
    .regex(/^\d+$/, { message: "Только цифры" }),
  characteristics: z.array(characteristicSchema)
    .min(1, { message: "Добавьте хотя бы одну характеристику" })
    .refine(
      (characteristics) => new Set(characteristics.map(c => c.name)).size === characteristics.length,
      { message: "Характеристики должны быть уникальными" }
    ),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;