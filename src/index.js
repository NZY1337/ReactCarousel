import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.scss";

import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import InteriorDesign from "./components/Pages/InteriorDesign/InteriorDesign";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Header from "./components/Navigation/Header";
import AdminCarousel from "./admin/components/AdminCarousel";
import AdminLogin from "./admin/components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Provider store={store}>
					<Router>
						<>
							<Header />
							<Switch>
								<Route path='/' exact component={Home} />
								<Route path='/Portfolio' exact component={Portfolio} />
								<Route path='/blog' exact component={Blog} />
								<Route path='/about' exact component={About} />
								<Route path='/interior-design' exact component={InteriorDesign} />
								<Route path='/contact' exact component={Contact} />
								<Route path='/admin-carousel' exact component={AdminCarousel} />
								<Route path='/login' exact component={AdminLogin} />
							</Switch>
						</>
					</Router>
				</Provider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
