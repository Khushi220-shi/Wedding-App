// import { Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: '#F1D9E3',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '100%',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#BC4574'
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#BC4574',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
  return (
    <div>
      <div className='d-flex justify-content-between mt-3'>
        <div>
            <h1 className='fw-bold'>Wedding Venues</h1>
            <p>Showing <span className='fw-bold'>34255</span> results as per your search criteria</p>
        </div>
        <div>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search  Venues..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
      </div>
    </div>
  )
}

export default Header
