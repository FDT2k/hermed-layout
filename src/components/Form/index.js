import React from 'react'


export default props => {

  return (
    <div>
      <form className="basic-form" action="">

        {props.children}
      </form>
    </div>
  )
}
