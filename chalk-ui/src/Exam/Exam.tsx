import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { SideBar } from './ui/SideBar/SideBar';
import { themeApp } from './ui/theme/theme';
import TopBar from './ui/TopBar/TopBar';
import Content from './ui/Content/Content';

const drawerWidth = 240;


function Exam() {
  const theme = useTheme();
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={themeApp}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar toggleDrawer={toggleDrawer}
                isOpen={isOpen}
                drawerWidth={drawerWidth} />
        <SideBar
          drawerWidth={drawerWidth}
          theme={theme}
          open={isOpen}
          onChange={toggleDrawer} />
        <Content
          drawerWidth={drawerWidth}
          isOpen={isOpen} />
      </Box>
    </ThemeProvider>
  );
}

export default Exam;
