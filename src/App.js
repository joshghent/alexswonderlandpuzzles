import React from 'react';
import './App.css';

function App() {
	const [showForm, setShowForm] = React.useState(false);
	const showFormOnClick = () => setShowForm(true);
	return (
		<div className="App">
			<div className="container">
				<div className="logo">
					<img src="" alt="Alex's Wonderland Puzzles Logo" />
				</div>
				<div className="howdy">
					<p className="bold">A new series of Jigsaws aimed at Autistic Children and Young Adults</p>
					<p className="regular">Each puzzle tells a story and aims to teach simple lessons in a fun and unique way.</p>
					<button className="kickstarter">
						Be Part of Alex's Wonderland
          </button>
					{!showForm && (<button className="email-me" onClick={showFormOnClick}>
						Get Email Updates
					</button>)}
					{showForm && (<form className="email-signup" name="newsletter" method="POST" data-netlify="true" netlify>
						<p>
							<p>We'll email with occasional updates</p>
							<input type="email" name="email" placeholder="Enter your Email" className="email" />
						</p>
						<button type="submit" className="newsletter-submit">Sign Up!</button>
					</form>)}
				</div>
				<div className="about">
					<p>Alex's Wonderland was inspired by my autistic brother-in-law, Alex, assembling a jigsaw.</p>
					<p>He absolutely loved them but quickly completed them and suffered from the same problem that a lot of jigsaws do - most the pieces were background.</p>
					<p>There are many number of jigsaws with interesting pictures, but these are often with thousands of pieces which autistic children struggle with.</p>
					<p>Each of our puzzles contains interesting details and simple lessons, such as taking care of elders and sharing.</p>
					<p>We hope that you'll join us on our journey of creating these puzzles. If you'd like to be a play-tester or have any ideas, please email me - <a href="mailto:beta@alexswonderlandpuzzles.com">beta@alexswonderlandpuzzles.com</a></p>
				</div>
			</div>
		</div>
	);
}

export default App;
