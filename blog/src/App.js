import React, { useState } from 'react';
import './App.css';

function App() {

	let [title, setTitle] = useState(['mock title1', 'mock title2', 'mock title3']);
	let [like, setLike] = useState(0);
	let [modal, setModal] = useState(false);
	let [bold, setBold] = useState(0);

	const [inputs, setInputs] = useState('');

	const changeTitle = () => {
		const newArray = [...title];
		newArray[0] = 'mock title change';
		setTitle(newArray);
	}

	const onModal = () => {
		setModal(true);
	}

	const onChange = (e) => {
		setInputs(e.target.value);
	}

	const onSave = () => {
		const newArray = [...title];
		newArray.unshift(inputs)
		setTitle(newArray);
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div>κ°λ° Blog</div>
			</div>
			<h4>Blog Title</h4>
			<button onClick={changeTitle}>μμ </button>
			{
				title.map((tit, i) => (
					<div className="list" key={i}>
						<h3 onClick={ () => { setBold(i) } }>{tit} <span onClick={ () => { setLike(like + 1); } }>π</span> {like} </h3>
						<p className="list=descript">2020/07/29</p>
						<hr />
					</div>
				))

			}
			
			<div className="form">
				<input onChange={onChange} />
				<button onClick={ onSave }>μ μ₯</button>
			</div>

			<button onClick={onModal}>μ΄κΈ°</button>

			{
				modal === true ? <Modal title={title} bold={bold} /> : null
			}
			
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h2>{props.title[props.bold]}</h2>
			<p>λ μ§</p>
			<p>λ΄μ©</p>
		</div>
	)
}

export default App;
