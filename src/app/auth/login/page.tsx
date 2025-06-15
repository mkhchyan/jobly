'use client'
import useLoginForm from '@/hooks/login/useLogin'

function LoginForm() {
  const { register, onSubmit, handleSubmit, errors, isLoading } = useLoginForm()

  return (
    <form
      className="mt-4 w-full space-y-6 py-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {errors?.root && (
        <p className="mx-auto p-4 text-center text-red-600">
          {errors.root.message}
        </p>
      )}
      <div className="flex w-full flex-col justify-between gap-2 text-neutral-800 md:flex-row md:items-center">
        <label className="md:text-lg">Login :</label>
        <input {...register('email', { required: true })} type="email" />
        {/* <div.Error
          errors={errors}
          field="email"
          className="absolute right-1 top-2"
        /> */}
      </div>
      <div className="flex w-full flex-col justify-between gap-2 text-neutral-800 md:flex-row md:items-center">
        <label className="md:text-lg">Password :</label>
        <input {...register('password', { required: true })} type="password" />
        {/* <div.Error
          errors={errors}
          field="password"
          className="absolute right-1 top-2"
        /> */}
      </div>
      <footer className="py-8">
        <button
          className="mx-auto block bg-secondary-600 px-6 font-bold uppercase text-white disabled:opacity-80"
          disabled={isLoading}
          type="submit"
        >
          Login
        </button>
      </footer>
    </form>
  )
}
LoginForm.displayName = 'LoginForm'

export default LoginForm
