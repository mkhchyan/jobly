import { z } from 'zod'

export const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Le champ "Login" est obligatoire.' })
    .email({
      message: `Vous devez indiquer une adresse e-mail valide.`,
    }),
  password: z
    .string()
    .min(1, {
      message: 'Le champ "Mot de passe" est obligatoire.',
    })
    .min(8, {
      message: 'Le mot de passe doit contenir au minimum 8 caractères.',
    })
    .regex(
      /[A-Z]/,
      'Le mot de passe doit contenir au moins une lettre majuscule.'
    )
    .regex(/\d/, 'Le mot de passe doit contenir au moins un chiffre.')
    .regex(
      /[@#$%&]/,
      'Le mot de passe doit contenir au moins un caractère spécial (@, #, $, %, &).'
    ),
  csrfToken: z.string().optional(),
})

export type ValidationSchema = z.infer<typeof validationSchema>
