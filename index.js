#!/usr/bin/env node
'use strict'

const importJsx = require('import-jsx')
const { h, render } = require('ink')
const ui = importJsx('./ui')

const main = () => {
  const onError = () => {
    unmount()
    process.exit(1)
  }
  let unmount
  const onExit = () => {
    unmount()
    process.exit()
  }

  unmount = render(h(ui, { onError, onExit }))
}

main()
