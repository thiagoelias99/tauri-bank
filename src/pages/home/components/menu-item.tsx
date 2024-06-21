import { ClassNameValue } from 'tailwind-merge'
import { cn } from '../../../lib/utils'

interface MenuItemProps {
  children: React.ReactNode;
  className?: ClassNameValue
  onClick?: () => void
}

export default function MenuItem({ children, className, onClick }: MenuItemProps) {
  return (
    <li
      onClick={onClick}
      className={cn('w-full p-4 text-center text-base font-semibold hover:bg-slate-600 hover:shadow rounded cursor-pointer', className)}>{children}</li>
  )
}
