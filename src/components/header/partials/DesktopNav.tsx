import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import Image from 'next/image'

const DesktopNav = ({ className }: React.ComponentProps<'header'>) => {
  return (
    <header
      className={twMerge(
        'flex w-full items-center justify-between border p-4',
        className
      )}
    >
      <Link href="/" prefetch={false}>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="h-14 w-16 object-center"
        />
      </Link>
      <div className="flex items-center justify-end gap-8 3xl:gap-14 4xl:gap-16">
        <Link href="/" prefetch={false}>
          Home
        </Link>
        <Link href="/jobs" prefetch={false}>
          Jobs
        </Link>
        <Link href="/" prefetch={false}>
          Saved
        </Link>
        <Link href="/" prefetch={false}>
          About
        </Link>
      </div>
      <div className="flex gap-4 max-xl:flex-col">
        <Link
          href="/auth/login"
          prefetch={false}
          className="rounded-full bg-primary-700 px-6 py-2 text-primary-700 text-white hover:bg-primary-800"
        >
          Register
        </Link>
        <Link
          href="/auth/login"
          prefetch={false}
          className="rounded-full border border-primary-700 px-6 py-2 text-primary-700 hover:bg-primary-700 hover:text-white"
        >
          Login
        </Link>
      </div>
    </header>
  )
}
export default DesktopNav
