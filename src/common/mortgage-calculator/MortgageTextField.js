import React from 'react'

import {
	TextField,
	useTheme,
} from "@mui/material"



export function MortgageTextField(props) {
  const { defaultValue, inputProps, label, onChange } = props

  const theme = useTheme()

  const textFieldStyles = { 
		width: "25ch",
		margin: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`
	}

  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      variant="outlined"
      sx={textFieldStyles}
      InputProps={inputProps}
      onChange={onChange}
      onClick={(e) =>
        e.target.setSelectionRange(0, e.target.value.length)
      }
    />
  )
}

