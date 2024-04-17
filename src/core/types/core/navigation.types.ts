import { Breakpoint } from "@mui/material"

interface NavigationItem {
  label: string
  route: string
  breackpoint: Breakpoint
  items?: NavigationItem[]
}

export type { NavigationItem }
