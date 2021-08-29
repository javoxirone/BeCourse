import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.header};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text}!important;
  border-radius: 5px;
  cursor: pointer;
  font-size:14px;
  padding: 14px 20px;
  }
`;
const Toggle = ({theme,  toggleTheme, text }) => {
    return (
        <Button onClick={toggleTheme} >
            {text}
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
