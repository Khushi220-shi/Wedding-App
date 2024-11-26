// import { Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { HiMiniArrowsUpDown } from "react-icons/hi2";


const Search = () => {
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
            width: '20ch',
            '&:focus': {
              width: '25ch',
            },
          },
        },
      }));
  return (
    <div>
      <div className='d-flex justify-content-between mt-3'>
      <div className='d-flex '>
        <h6 className='me-2'>Sort by:</h6>
        <p className='text-secondary me-2'><HiMiniArrowsUpDown/> Recent</p>
        <p style={{color:'#E72E77'}}><HiMiniArrowsUpDown/> Trending</p>
      </div>
        <div>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search  Photos & Ideas ...."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
      </div>
    </div>
  )
}

export default Search
