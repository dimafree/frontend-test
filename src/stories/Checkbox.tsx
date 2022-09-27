import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import React from 'react'

export interface IProps{
    label: string,
    checked: boolean,
    setIsChecked: (checked: boolean) => void,
}

export const Checkbox = (props: IProps) => {

    return (
        <FormControlLabel 
            control={
                <MuiCheckbox 
                    checked ={props.checked} 
                    onChange={(e) => props.setIsChecked(e.target.checked)} 
                    sx={{color: '#616161', '& .MuiSvgIcon-root': {fontSize:'13.5px', } ,'&.Mui-checked':{color: '#21B6A8'}}}
                />
            } 
            label={props.label} 
            sx={{height: 0, '& .MuiTypography-root': {fontSize: '14px'}}}
        />
    )
}
