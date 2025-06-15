import { zodResolver } from '@hookform/resolvers/zod'
import { useConfig } from '@unics/hooks'
import { useLocale } from '@unics/i18n'
import { getPathname } from '@unics/i18n/routing'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { revalidateProtectedPath } from '../../../shared/actions'
import { type ValidationSchema, validationSchema } from './validation'

const useLoginForm = (csrfToken?: string) => {
  const locale = useLocale()
  const router = useRouter()
  const { host } = useConfig()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { csrfToken },
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    reset()

    setIsLoading(true)
    const response = await signIn('users', { redirect: false, ...data })
    setIsLoading(false)

    if (!response?.ok || response.error) {
      setError('root', {
        message: 'Le login ou le mot de passe est incorrect !',
      })
      return false
    }

    // clear client router cache, wait for nextjs to allow option to clear client router cache from useRouter
    revalidateProtectedPath('/user')

    const callbackUrl = searchParams.get('callbackUrl')
    if (
      callbackUrl &&
      (callbackUrl.startsWith('/') || new URL(callbackUrl).origin === host)
    ) {
      // redirecting to next auth callbackUrl url if path within domain
      router.replace(callbackUrl)
      return
    }

    router.replace(getPathname({ locale, href: '/user' }))
  }

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isLoading,
  }
}

export default useLoginForm
