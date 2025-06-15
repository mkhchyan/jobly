'use client'

import { useViewportSize } from '@mantine/hooks'
import DesktopNav from './partials/DesktopNav'
import MobileNav from './partials/MobileNav'

const Header = () => {
  const { width } = useViewportSize()

  return width > 1535 ? <DesktopNav /> : <MobileNav />
}
export default Header
