import React from 'react';
import { Phone, Email } from '@mui/icons-material';
import { styled } from '@mui/system';

const IconWrapper = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  color: '#1e88e5',
  transition: 'color 0.3s, box-shadow 0.3s',
  '&:hover': {
    color: '#0d47a1',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  '& svg': {
    verticalAlign: 'middle',
    marginRight: '8px',
  },
});

export function PhoneIcon() {
  return <IconWrapper><Phone /></IconWrapper>;
}

export function EmailIcon() {
  return <IconWrapper><Email /></IconWrapper>;
}
