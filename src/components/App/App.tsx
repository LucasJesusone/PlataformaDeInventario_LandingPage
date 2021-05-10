import React from 'react';
import Header from '../Header';
import Main from '../Main'
import About from '../About';
import Services from '../Services';
import Footer from '../Footer';

const App: React.FC = () => {
	return (
		<div id="App">
			<Header />
			<main>	
				<Services />
				<Main />
				<About />
			</main>
			<Footer />
		</div>
	);
};

export default App;
