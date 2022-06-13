import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { Avatar } from '@mui/material';
import avatar1 from '../../assets/avatar1.jpeg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth='xl'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='aqua'
            className='devhouse'
            fontSize='64px'
            fontWeight='680'
            gutterBottom
          >
            <span
              className='Herotitle'
              style={{ color: 'white', fontWeight: '800' }}
            >
              The Open <span style={{ color: 'aqua' }}>Source</span> Blogging
              <br /> Platform for Developers{' '}
            </span>
          </Typography>

          <Typography
            fontSize='23px'
            align='center'
            color='white'
            fontWeight='200'
          >
            Taking Developer Conversations To The Moon🚀{' '}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Link to='/onboard' style={{ textDecoration: 'none' }}>
              <Button
                component={motion.button}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                variant='outlined'
                style={{
                  color: 'black',
                  backgroundColor: 'aqua',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Join the Community - it's free⚡
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
