import React from 'react';
import Song from './../Song/Song';

const SongsList = () => {
	const song1 = ['Verso 1', 'Verso 2'];

	return (
		<>
			<Song title='Namaste' stanzas={song1} />
		</>
	)
}

export default SongsList;