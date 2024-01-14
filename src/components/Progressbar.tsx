"use client"

import NextNProgress from 'nextjs-progressbar'

const Progressbar = () => {
  return (
    <NextNProgress height={1} color="rgb(156, 163, 175, 0.9)" options={{ showSpinner: false }} />
  )
}

export default Progressbar