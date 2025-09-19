import * as React from "react"
import { Switch as HeadlessSwitch } from '@headlessui/react'
import { cn } from "../../@utils/cn"

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onChange, ...props }, ref) => (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={cn(
        "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary" : "bg-input",
        className
      )}
      ref={ref}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </HeadlessSwitch>
  )
)
Switch.displayName = "Switch"

export { Switch }
