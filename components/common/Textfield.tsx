import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';



 interface Props {
  variant: "outlined" | "standard" | "filled",
  label?: string,
  placeholder?: string,
  fullWidth?: boolean,
  multiline?: boolean,
  minRows?: number,
  inputColor?: string,
  labelColor?: string,
  labelFocusedColor?: string,
  underlineBeforeColor?: string,
  underlineBeforeHoverColor?: string,
  underlineAfterColor?: string,
  underlineAfterHoverColor?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  value?: string,

}
export const CustomTextField = (props: Props) => {
          return (
            <TextField 
              multiline={props.multiline}
              minRows={props.minRows}
              variant={props.variant}
              label={props.label}
              placeholder={props.placeholder}
              fullWidth = {props.fullWidth}
              sx={{
                input: {
                  color: props.inputColor
                },
                textarea: {
                  color: props.inputColor
                },
                label: {
                  color: props.labelColor
                },
                '& label.Mui-focused': {color: props.labelFocusedColor},
                '& .MuiInput-underline:before': { borderBottomColor: props.underlineBeforeColor },
                '& .MuiInput-underline:hover:before': { borderBottomColor: props.underlineBeforeHoverColor },
                '& .MuiInput-underline:after': { borderBottomColor: props.underlineAfterColor },
                '& .MuiInput-underline:hover:after': { borderBottomColor: props.underlineAfterHoverColor },
              }}
              onChange={props.onChange}
              onFocus={props.onFocus}
              onBlur={props.onFocus}
              value={props.value}
              autoComplete="off"
            />
          )
}

export const CssTextField = styled(TextField)({
   '& .MuiInputBase-input': {
    borderColor: 'green',
   },
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});





