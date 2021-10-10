import { styled } from '@mui/material/styles';

export default styled('aside')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  height: '128x',
  paddingLeft: '60px',
  '>:nth-child(even)': {
    margin: '64px',
    // backgroundColor: '#112233',
  },
  '>:nth-child(n)': {
    fontSize: '24px',
    textDecoration: 'none',
    color: 'white',
    ':hover': {
      backgroundColor: '#ff0000',
    },
    ':active': {
      color: 'yellow',
    },
    '&:visited': {
      backgroundColor: 'teal',
    },
    &.${props => props.activeClassName} {
      color: red;
    }
  },
});
