import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { useStyles } from './style';
import { Props } from './type';

const NativeSelects: React.FC<Props> = ({ error, choices, onSetValue, label, errMessage }) => {
	const classes = useStyles();
	const [ state, setState ] = React.useState<{ age: string | number; name: string }>({
		age: '',
		name: 'hai'
	});

	const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const { name, value } = event.target;
		setState({
			...state,
			[name]: value
		});
		onSetValue(value);
	};

	return (
		<div>
			<FormControl className={classes.formControl} error={error}>
				<InputLabel shrink htmlFor="age-native-label-placeholder">
					{label}
				</InputLabel>
				<NativeSelect
					value={state.age}
					onChange={handleChange}
					inputProps={{
						name: 'age',
						id: 'age-native-label-placeholder'
					}}
				>
					{choices.map((choice) => {
						const { displayValue, actualValue } = choice;
						return (
							<option key={actualValue} value={actualValue}>
								{displayValue}
							</option>
						);
					})}
				</NativeSelect>
				{error && <FormHelperText>{errMessage}</FormHelperText>}
			</FormControl>
		</div>
	);
};

export default NativeSelects;
