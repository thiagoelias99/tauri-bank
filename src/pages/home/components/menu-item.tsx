import { ClassNameValue } from 'tailwind-merge'
import { cn } from '../../../lib/utils'

interface MenuItemProps {
  children: React.ReactNode;
  className?: ClassNameValue
}

export default function MenuItem({ children, className }: MenuItemProps) {
  return (
    <li className={cn('w-full p-4 text-center text-base font-semibold hover:bg-slate-600 hover:shadow rounded cursor-pointer', className)}>{children}</li>
  )
}
