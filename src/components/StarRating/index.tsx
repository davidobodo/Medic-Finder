import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
    rating: number
}

const useStarRatingStyles = makeStyles({
    root: {
        // marginBottom: '15px'
    },
    checked: {
        color: '#ffa500'
    }
})

const StarRating: React.FC<Props> = ({ rating }) => {
    const classes = useStarRatingStyles()
    return (
        <div className={classes.root}>
            {[1, 2, 3, 4, 5].map(i => {
                return i <= rating ? (
                    <FontAwesomeIcon
                        icon={faStar}
                        className={classes.checked}
                        key={i}
                    />
                ) : (
                        <FontAwesomeIcon icon={faStar} key={i} />
                    );
            })}
        </div>
    )
}

export default StarRating;