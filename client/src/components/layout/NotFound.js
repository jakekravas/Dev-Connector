import React, { Fragment } from 'react'

const NotFound = () => {
  if (window.location.pathname !== "/"){
    return (
      <Fragment>
        <h1 className="x-large text-primary">
          <i className="fas fa-exclamation-triangle"/> Page Not Found
        </h1>
        <p className="large">Sorry, this page does not exist</p>
      </Fragment>
    )
  } else {
    return null
  }
}

export default NotFound