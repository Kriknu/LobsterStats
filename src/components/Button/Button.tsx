import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export default styled(Button)({
  color: 'blue',
  backgroundColor: '#ff00ff',
  '&:hover': {
    backgroundColor: '#654321',
  },
});
