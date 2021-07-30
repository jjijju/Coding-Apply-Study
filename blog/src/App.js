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
				<div>개발 Blog</div>
			</div>
			<h4>Blog Title</h4>
			<button onClick={changeTitle}>수정</button>
			{
				title.map((tit, i) => (
					<div className="list" key={i}>
						<h3 onClick={ () => { setBold(i) } }>{tit} <span onClick={ () => { setLike(like + 1); } }>👍</span> {like} </h3>
						<p className="list=descript">2020/07/29</p>
						<hr />
					</div>
				))

			}
			
			<div className="form">
				<input onChange={onChange} />
				<button onClick={ onSave }>저장</button>
			</div>

			<button onClick={onModal}>열기</button>

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
			<p>날짜</p>
			<p>내용</p>
		</div>
	)
}

export default App;
