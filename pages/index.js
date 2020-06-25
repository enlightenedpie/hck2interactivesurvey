import { useState } from 'react'
import SVG from '../components/SVG'

var state = {}

export default () => {
  return (
    <section>
      <div className="colorBar"></div>
      <header>
        <SVG.logo/>
      </header>
      <div className="content"></div>
    </section>
  )
}