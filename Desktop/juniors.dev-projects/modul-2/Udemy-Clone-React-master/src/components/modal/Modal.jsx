import React from 'react';
import './modal.css';

function Modal({active, setActive}) {
  return (
	 <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
		<div className='modal_content' onClick={e => e.stopPropagation()}>
			<h1>Hello</h1>
		</div>
	 </div>
  )
}

export default Modal;