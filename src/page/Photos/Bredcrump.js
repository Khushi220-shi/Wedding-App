import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Gallery from '../../components/Gallery';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <div>
        <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="#F189B2"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
      </Breadcrumbs>
    </div>
    <div className='mt-3'>
        <h6 className='text-secondary'><span className='fw-bold text-dark'>Wedding Photos, Latest Trends & Ideas </span>( 36000+ photos )</h6>
        <small className='text-secondary'>Browse from latest Wedding Photos, Ideas & Inspiration</small>
    </div>

    </div>
  );
}
