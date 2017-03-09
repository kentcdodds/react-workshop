import React, {PropTypes} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './04-composition.css'

function Person(props) {
  // WORKSHOP_START
  // compose the <Avatar /> and <Icon /> components together to create this <Person /> component
  // - <div className="Person"> is your root element
  // - render props.name (in <b>), props.title (in <em>)
  // - render two <Icon /> components (one each for twitter and github) as <li> in a <ul>
  // WORKSHOP_END
  // FINAL_START
  return (
    <div className="Person">
      <Avatar url={props.avatar} />
      <b>{props.name}</b>
      <em>{props.title}</em>
      <ul>
        <li>
          <Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/>
        </li>
        <li>
          <Icon href={`https://github.com/${props.github}`} type="github"/>
        </li>
      </ul>
    </div>
  )
  // FINAL_END
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

// WORKSHOP_START
export const example = () => (
  <div>
    Render a {`<Person />`} component here
    with all the required props (specify your own info if you want).
  </div>
)
// WORKSHOP_END
// FINAL_START
export const example = () => (
  <Person
    name="Kent C. Dodds"
    title="JavaScript Developer"
    avatar="http://kentcdodds.com/photo-512.png"
    twitter="kentcdodds"
    github="kentcdodds"
  />
)
// FINAL_END

export default Person
