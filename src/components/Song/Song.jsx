import React from 'react';

const Song = ({ title, stanzas }) => {
	return (
		<>
			<h2>{title}</h2>
			<p>{stanzas[0]}</p>
		</>
	)
}

export default Song;