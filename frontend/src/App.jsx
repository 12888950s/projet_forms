import "./App.css";
import ReactRoutes from "./Routes";
import { history } from "./store/config";
import Navbar from "./pages/FormListingPage/navbar/Navbar"

function App() {
	return (
		<div className="app">
			<Navbar />
			<ReactRoutes history={history} />
		</div>
	);
}

export default App;
