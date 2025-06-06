import { z } from 'zod'

export const ConsultationSchema = z.object({
	name: z.string().min(1, {
		message: 'Ім`я повинно містити як мінімум 1 символ'
	}),
    lastName: z.string().min(1, {
		message: 'Прізвище повинно містити як мінімум 1 символ'
	}),
	phone: z
    .string()
    .min(1, {
      message: 'Номер телефону повинен містити як мінімум 1 символ',
    })
    .regex(/^\+38\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/, {
      message:
        'Номер повинен відповідати формату +380508888182',
    }),
    from: z.string().optional(),
    description: z.string().min(1, {
		message: 'Опис повинен містити як мінімум 1 символ'
	}),
})

export type TypeConsultationSchema = z.infer<typeof ConsultationSchema>