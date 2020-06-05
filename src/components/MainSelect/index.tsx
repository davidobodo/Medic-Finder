import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 200,
        },
        select: {
            // backgroundColor: '#fff'
        },
    }),
);

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        console.log('i dey')
        const name = event.target.name as keyof typeof state;
        console.log(event.target.value)
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    console.log(state.age)

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Geo-fencing radius</InputLabel>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    className={classes.select}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={5000}>5km</option>
                    <option value={10000}>10km</option>
                    <option value={20000}>20km</option>
                    <option value={30000}>30km</option>
                    <option value={40000}>40km</option>
                    <option value={50000}>50km</option>
                    <option value={60000}>60km</option>
                    <option value={70000}>70km</option>
                    <option value={80000}>80km</option>
                    <option value={90000}>90km</option>
                    <option value={100000}>100km</option>
                </NativeSelect>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
            </FormControl>
        </div>
    );
}
