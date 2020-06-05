import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating'

import { useAddressCardStyles } from './style';



export default function AddressCard(props) {
    const classes = useAddressCardStyles();
    const { name,
        vicinity,
        opening_hours,
        website,
        formatted_phone_number,
        international_phone_number,
        formatted_address,
        photos,
        rating
    } = props.description;
    console.log(props.description)


    return (
        <Card className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.symbol}>{name[0]}</Typography>
            <div className={classes.rightColumn}>
                <Typography variant="h5" component="h2" className={classes.name}>{name}</Typography>
                <Typography variant="body2" component="p" className={classes.address}>{vicinity}</Typography>
                {/* <Typography className={classes.phoneNumber}>08105546642</Typography> */}
                {rating ? <StarRating rating={rating}></StarRating> : null}
            </div>

        </Card>
    );
}