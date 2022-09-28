import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import { useTheme } from '@mui/material'
import React from 'react'

export interface IProps{
    label: string,
    checked: boolean,
    setIsChecked: (checked: boolean) => void,
}

export const Checkbox = (props: IProps) => {

    const theme = useTheme()

    return (
        <FormControlLabel 
            control={
                <MuiCheckbox 
                    checked ={props.checked} 
                    onChange={(e) => props.setIsChecked(e.target.checked)} 
                    sx={{color: theme.palette.border.main , '& .MuiSvgIcon-root': {fontSize:'13.5px', } ,'&.Mui-checked':{color: theme.palette.primary.main}}}
                />
            } 
            label={props.label} 
            sx={{height: 0, '& .MuiTypography-root': {fontSize: '14px'}}}
        />
    )
}
