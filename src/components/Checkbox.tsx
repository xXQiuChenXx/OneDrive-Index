"use client"
import { FC, MouseEventHandler, useEffect, useRef } from "react"

export const Checkbox: FC<{
    checked: 0 | 1 | 2
    onChange: () => void
    title: string
    indeterminate?: boolean
  }> = ({ checked, onChange, title, indeterminate }) => {
    const ref = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      if (ref.current) {
        ref.current.checked = Boolean(checked)
        if (indeterminate) {
          ref.current.indeterminate = checked == 1
        }
      }
    }, [ref, checked, indeterminate])
  
    const handleClick: MouseEventHandler = e => {
      if (ref.current) {
        if (e.target === ref.current) {
          e.stopPropagation()
        } else {
          ref.current.click()
        }
      }
    }
  
    return (
      <span
        title={title}
        className="inline-flex cursor-pointer items-center rounded  hover:bg-gray-300 dark:hover:bg-gray-600"
        onClick={handleClick}
      >
        <input
          className="form-check-input cursor-pointer"
          type="checkbox"
          value={checked ? '1' : ''}
          ref={ref}
          aria-label={title}
          onChange={onChange}
        />
      </span>
    )
  }