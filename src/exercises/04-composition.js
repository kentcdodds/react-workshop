import React, {PropTypes} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './04-composition.css'

function Person(props) {
  // compose the <Avatar /> and <Icon /> components together to create this <Person /> component
  // - <div className="Person"> is your root element
  // - render props.name (in <b>), props.title (in <em>)
  // - render two <Icon /> components (one each for twitter and github) as <li> in a <ul>
}

// Here are your propTypes :)
Person.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

function Avatar(props) {
  return (
    <img
      src={props.url}
      className="Avatar"
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2
      }}
    />
  )
}

// We didn't really talk about defaultProps,
// but this is what the `size` will be set to
// if it's not provided. Use these sparingly.
Avatar.defaultProps = {
  size: 200,
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
}

function Icon(props) {
  return (
    <a href={props.href} target="_blank" className="Icon">
      <i className={`fa fa-${props.type}`}/>
    </a>
  )
}

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export const example = () => (
  <div>
    Render a {`<Person />`} component here
    with all the required props (specify your own info if you want).
  </div>
)

export default Person
