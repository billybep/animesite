import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function AnimeNav() {

  const signOnClick = () => {
    swal("Upps sorry! this sign in / sign up feature still in dev...", {
      buttons: false,
      timer: 1000,
    });
  }

  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">AnimeDB</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/favorite">Favorite</Link>
          </Nav>
        <Button variant="outline-info" onClick={ _ => signOnClick() } >Sign In / Sign Out</Button>
      </Navbar>
    </>
  )
}

export default AnimeNav