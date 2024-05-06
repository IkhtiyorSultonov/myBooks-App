import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Logo from "../../../public/images/Logo.svg"
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FC, useEffect, useState } from 'react';
import { HeaderProps } from './header.props';
import { deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
const header: FC<HeaderProps> = ({ onToggle, Mode }) => {
  return (
    <Box width={"100%"} borderBottom={"1px"} height={'10vh'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={"center"} p={2}>
        <Stack direction={'column'}>
          <Typography className='logo'>My <text>Book</text></Typography>
          <Typography className='logo'>Shelf</Typography>
        </Stack>
        <Stack direction={'row'} spacing={1} position={'relative'} alignItems={'center'}>
          <IconButton
            onClick={onToggle}
          >
            {Mode === 'light' ? <NightlightIcon /> : <Brightness7Icon />}
          </IconButton>
          <Button
            sx={{ borderRadius: "10px" }}>
            <Avatar sx={{ bgcolor: deepPurple[500], mr: '5px' }}>OP</Avatar>
            <Typography sx={{ color: Mode === 'light' ? 'black' : 'white', }}>John Dev</Typography>
          </Button>
          <IconButton
            // onClick={onToggle}
            color='error'
          >
            <LogoutIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default header