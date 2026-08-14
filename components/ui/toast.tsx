'use client'

/**
 * 🎭 The Toast - Minimal stub for use-toast compatibility
 * Exports types required by use-toast; no UI rendered (toast not used in app).
 */

import * as React from 'react'

export type ToastProps = React.ComponentPropsWithoutRef<'div'> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement
