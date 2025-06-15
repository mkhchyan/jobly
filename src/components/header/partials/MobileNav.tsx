import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const MobileNav = () => {
  return (
    <Menu as="header" className="flex justify-between p-2">
      {({ open }) => (
        <>
          <Link href="/" prefetch={false}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="h-14 w-16 object-center"
            />
          </Link>
          <MenuButton>
            {open ? (
              <IconX className="size-8 text-primary-700" />
            ) : (
              <IconMenu2 className="size-8 text-primary-700" />
            )}
          </MenuButton>
          {open && (
            <MenuItems
              static
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              anchor="bottom"
              className="flex size-full origin-top flex-col gap-2 bg-white bg-origin-content p-4 font-cormorantGaramond font-medium text-primary-800 outline-none"
            >
              <MenuItem>
                <Link href="/" prefetch={false}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/jobs" prefetch={false}>
                  Jobs
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/" prefetch={false}>
                  Saved
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/" prefetch={false}>
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/auth/login"
                  prefetch={false}
                  className="w-max rounded-full border border-primary-700 px-4 py-1 text-primary-700 hover:bg-primary-700 hover:text-white"
                >
                  Login
                </Link>
              </MenuItem>
            </MenuItems>
          )}
        </>
      )}
    </Menu>
  )
}
export default MobileNav
