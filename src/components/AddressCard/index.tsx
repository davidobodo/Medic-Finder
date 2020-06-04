import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAddressCardStyles } from './style';



export default function AddressCard(props) {
    const classes = useAddressCardStyles();
    console.log(props.description)
    const { name,
        vicinity,
        opening_hours,
        website,
        rating,
        formatted_phone_number,
        international_phone_number,
        formatted_address } = props.description;


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" className={classes.name}>{name}</Typography>
                <Typography variant="body2" component="p" className={classes.address}>{vicinity}</Typography>
                <Typography className={classes.phoneNumber}>08105546642</Typography>
                <Typography>5 star rating</Typography>
            </CardContent>
        </Card>
    );
}