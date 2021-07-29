import React, { useState } from 'react';
import './App.css';

function App() {

	let [title, setTitle] = useState(['mock title1', 'mock title2', 'mock title3']);
	let [like, setLike] = useState(0);

	const changeTitle = () => {
		const newArray = [...title];
		newArray[0] = 'mock title change';
		setTitle(newArray);
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 Blog</div>
			</div>
			<h4>Blog Title</h4>
			<button onClick={changeTitle}>수정</button>
			<div className="list">
				<h3> {title[0]} <span onClick={ () => { setLike(like + 1); } }>👍</span> {like} </h3>
				<p className="list-descript">2020/07/29</p>
				<hr />
			</div>
			<div className="list">
				<h3> {title[1]} </h3>
				<p className="list-descript">2020/07/29</p>
				<hr />
			</div>
			<div className="list">
				<h3> {title[2]} </h3>
				<p className="list-descript">2020/07/29</p>
				<hr />
			</div>
		</div>
	);
}

export default App;
