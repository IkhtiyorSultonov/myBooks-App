import { FC, FunctionComponent, useEffect, useState } from 'react'
import { LayoutProps } from './laypout.props'
import { Box, Container, PaletteMode, Paper, Stack, ThemeProvider, createTheme } from '@mui/material'
import { Header, Sidebar } from '.'
const Layout: FC<LayoutProps> = ({ children }) => {
  const [Mode, setMode] = useState<PaletteMode>('light')
  const theme = createTheme({
    palette: {
      mode: Mode
    }
  })
  const onToggle = () => {
    if (Mode ==='light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }
  
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{ height: '100vh' }} >
        <Box>
          <Header onToggle={onToggle} Mode={Mode} />
          <Sidebar />
          <Box mt={'11vh'} pl={{ base: "0", lg: "290px" }}

          >
            <Container maxWidth="lg">{children}</Container>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};