import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartModal from "../../components/cartBtn/CartModal";

function MyNavbar() {
	return (
		<Navbar className="bg-main" variant="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand className="h1 fs-3">
					React Meals
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link>
							<CartModal />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
