import React from 'react'
import {cEx} from '@geekagency/gen-classes'

export default props => {
  const {className,organiser,customer} = props

  const isOrganiser= organiser===true || (!organiser && !customer);

  const classes = cEx ([
    "landing-page",
    "flex-column",
    "just-between",
    className,
    {
      "landing-page--customer": _=>isOrganiser !== true,
      "landing-page--organiser":_=>isOrganiser === true,
    }
  ])

  const styles = {
    '--bg-position': (isOrganiser ? 'right': 'left')
  }

  return (
    <div className={classes}>
      <header className="grow-5" style={styles}>
      </header>
      <section className="grow-2 flex-column just-center align-center content-container">
        <h1>Bienvenue</h1>
        {props.children}
      </section>

    </div>
  )
}
