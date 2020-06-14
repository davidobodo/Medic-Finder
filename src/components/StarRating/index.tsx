import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Props } from './type';
import { useStarRatingStyles } from './style';

const StarRating: React.FC<Props> = ({ rating }) => {
	const classes = useStarRatingStyles();

	return (
		<div>
			{[ 1, 2, 3, 4, 5 ].map((i) => {
				return i <= rating ? (
					<FontAwesomeIcon icon={faStar} className={classes.checked} key={i} />
				) : (
					<FontAwesomeIcon icon={faStar} key={i} />
				);
			})}
		</div>
	);
};

export default StarRating;
