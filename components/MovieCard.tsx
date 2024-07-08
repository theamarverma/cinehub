'use client';
import { baseImgUrl } from '@lib/constants';
import { Movie } from '@lib/types';
import { useState } from 'react';
import Modal from './Modal';

const MovieCard = ({ movie }: { movie: Movie }) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => setShowModal(false);

	return (
		<>
			<div
				className="movie-card "
				onClick={openModal}
			>
				<img
					src={
						movie?.backdrop_path || movie?.poster_path
							? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
							: 'assets/no-image.png'
					}
					alt={movie?.title || movie?.name}
					className="thumbnail"
				/>
				<h3 className="border"></h3>
			</div>
			{showModal && (
				<Modal
					movie={movie}
					closeModal={closeModal}
				/>
			)}
		</>
	);
};

export default MovieCard;
