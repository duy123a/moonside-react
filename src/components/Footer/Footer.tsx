import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Container, Link, Paper, Typography } from '@mui/material';
import { memo } from 'react';

export interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <Box component="footer">
      <Paper square variant="outlined">
        <Container>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              mt: 2,
              mb: 1,
            }}
          >
            <Typography>
              Created by{' '}
              <Link href="https://github.com/duy123a/moonside" target="_blank" rel="noreferrer">
                duy123a
              </Link>{' '}
              with <FavoriteIcon fontSize="inherit"></FavoriteIcon>.
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              mb: 2,
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>
              Content is available under{' '}
              <Link
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike
              </Link>
            </Typography>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default memo(Footer);
