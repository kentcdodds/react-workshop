import React, {PropTypes, Component} from 'react'
import axios from 'axios'

// WORKSHOP_START
// State and imperative code are two of the things that makes building applications more difficult.
// And we haven't even started talking about context yet!
// The more components we can have that have no state and completely declarative the better.
// Doing this makes things easier to test and maintain.
//
// So we're going to refactor our last component to follow a pattern called "Higher Order Components"
//
// This is essentially a function that accepts a component and returns a new one with that manages
// the state and renders the original component with the state as props. (react-redux follows this
// pattern, as did react-router until recently)
//
// Example:
//
// ```
// // this is the component that people use (so you expose this)
// const UserProfileContainer = fetchDataComponent(UserProfile)
//
// function fetchDataComponent(Comp) {
//   return class FetchUserProfile extends Component {
//     state = {user: {}}
//     static propTypes = {
//       username: PropTypes.number.isRequired,
//       fetch: PropTypes.func,
//     }
//     static defaultProps = { fetch: axios.get } // doing this allows you to pass a mock version as a prop
//
//     componentDidMount() {
//       this.props.fetch(`/users/${this.props.username}`)
//         .then(
//           ({data: user}) => this.setState({user}),
//           // should add an error handler here :)
//         )
//     }
//
//     render() {
//       // we're spreading the state of repos, loading, and error as props to the Comp
//       // we're forwarding the props given to this component to the child Comp
//       return <Comp {...this.state} {...this.props} />
//     }
//   }
// }
//
// function UserProfile({user}) {
//   return (
//     <div>
//       <div>First name: {user.firstName}</div>
//       <div>Last name: {user.lastName}</div>
//       <div>Email address: {user.emailAddress}</div>
//     </div>
//   )
// }
//
// UserProfile.propTypes = {
//   user: PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     emailAddress: PropTypes.string.isRequired,
//   }).isRequired,
// }
// ```
//
// Exercise:
//
//  Refactor the original component to use the render callback pattern
//  Create a function that accepts a component class and returns a new component class
//  put all the state related stuff in this new component
//  and render the given component in the new component's render method

class RepoListContainer extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    fetch: PropTypes.func,
  }
  static defaultProps = { fetch: axios.get }
  state = {repos: null, loading: false, error: null}
  
  componentDidMount() {
    this.fetchRepos()
  }
  
  fetchRepos() {
    this.setState({repos: null, loading: true, error: null})
    this.props.fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=100&sort=pushed`)
      .then(
        ({data: repos}) => this.setState({repos, error: null, loading: false}),
        error => this.setState({repos: null, error, loading: false})
      )
  }
  
  render() {
    const {repos, loading, error} = this.state
    const {username} = this.props
    return (
      <div>
        {!loading ? null : <div>Loading...</div>}
        {!error ? null : (
          <div>
            Error loading info for <code>{username}</code>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
        {!repos ? null : <RepoList username={username} repos={repos} />}
      </div>
    )
  }
}
// WORKSHOP_END
// FINAL_START
const WrappedRepoListContainer = fetchDataComponent(RepoListContainer)

function fetchDataComponent(Comp) {
  return class FetchData extends Component {
    static propTypes = {
      username: PropTypes.string,
      fetch: PropTypes.func,
    }
    static defaultProps = {
      fetch: axios.get,
    }
    state = {repos: null, loading: false, error: null}
    
    componentDidMount() {
      this.fetchRepos()
    }
    
    fetchRepos() {
      this.setState({repos: null, loading: true, error: null})
      this.props.fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=100&sort=pushed`)
        .then(
          ({data: repos}) => this.setState({repos, error: null, loading: false}),
          error => this.setState({repos: null, error, loading: false})
        )
    }
    render() {
      // we're spreading the state of repos, loading, and error as props to the Comp
      // we're forwarding the props given to this component to the child Comp
      return <Comp {...this.state} {...this.props} />
    }
  }
}

function RepoListContainer({username, repos, loading, error}) {
  return (
    <div>
      {!loading ? null : <div>Loading...</div>}
      {!error ? null : (
        <div>
          Error loading info for <code>{username}</code>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      {!repos ? null : <RepoList username={username} repos={repos} />}
    </div>
  )
}

RepoListContainer.propTypes = {
  username: PropTypes.string.isRequired,
  // honestly, I'm short-cutting here because it's a little wild. Ask me if you're curious.
  repos: PropTypes.any,
  error: PropTypes.any,
  loading: PropTypes.bool,
}
// FINAL_END

function RepoList({username, repos}) {
  return (
    <div>
      <h1>{username}'s repos</h1>
      <ul style={{textAlign: 'left'}}>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>
        })}
      </ul>
    </div>
  )
}
RepoList.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

export const example = () => (
  // WORKSHOP_START
  <RepoListContainer username="kentcdodds" fetch={mockFetch} />
  // WORKSHOP_END
  // FINAL_START
  <WrappedRepoListContainer username="kentcdodds" fetch={mockFetch} />
  // FINAL_END
)

// This is for you. Merry Christmas 🎅 🎄 🎁
function mockFetch() {
  const delay = 0 // set this to `Number.MAX_VALUE` test the loading state
  const sendError = false // set this to `true` to test out the error state
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sendError) {
        reject({
          message: 'Something went wrong',
          status: 500,
        })
      } else {
        resolve({
          data: [
            {id: 12345, name: 'turbo-sniffle'},
            {id: 54321, name: 'ubiquitous-succotash'},
            {id: 43234, name: 'solid-waffle'},
          ]
        })
      }
    }, delay)
  })
}

// WORKSHOP_START
export default RepoListContainer
// WORKSHOP_END
// FINAL_START
export default WrappedRepoListContainer
// FINAL_END
