import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating'
import { useAddressCardStyles } from './style';
import { AddressCardProps } from './type';


const AddressCard: React.FC<AddressCardProps> = (props) => {
    const classes = useAddressCardStyles();
    const { name, vicinity, rating } = props.description;

    return (
        <Card className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.symbol}>{name[0]}</Typography>
            <div>
                <Typography variant="h5" component="h2" className={classes.name}>{name}</Typography>
                <Typography variant="body2" component="p" className={classes.address}>{vicinity}</Typography>
                {rating ? <StarRating rating={rating}></StarRating> : null}
            </div>
        </Card>
    );
}

export default AddressCard