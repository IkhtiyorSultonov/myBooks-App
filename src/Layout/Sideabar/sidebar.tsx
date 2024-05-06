import { Navigation } from '@/config/constains'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router';

const sidebar = () => {
  const router = useRouter()
  return (
    <Box width={'300px'} position={'fixed'} top={'10vh'} minHeight={'90vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Container maxWidth={'lg'} disableGutters>
        {Navigation.map((item, idx) => {
          const active = `/${router.pathname.split('/')[1]}` == item.route;
          return (
            <Box key={idx} p={'10px'} >
              <Button
                onClick={()=>router.push(item.route)}
                startIcon={<item.icon />}
                fullWidth
                sx={{ height: "6vh" }}
                variant={active ? "contained" : "text"}
              >
                <Stack gap={2}>
                  <Typography textTransform={'capitalize'}>{item.label}</Typography>
                </Stack>
              </Button>

            </Box>
          )
        })}
      </Container>
    </Box>
  )
}

export default sidebar