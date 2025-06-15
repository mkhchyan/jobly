import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const Hero = ({ className, ...rest }: React.ComponentProps<'section'>) => {
  return (
    <section
      className={twMerge(
        'h-64 w-full bg-gradient-to-tr from-primary-800 to-primary-400 2xl:h-[30rem]',
        className
      )}
      {...rest}
    />
  )
}

export default Hero
