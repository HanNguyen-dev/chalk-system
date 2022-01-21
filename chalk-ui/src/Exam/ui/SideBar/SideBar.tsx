import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import QuestionOverview from './QuestionOverview/QuestionOverview';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function SideBar(props: { drawerWidth: number,
                                 theme: Theme,
                                 open: boolean,
                                 onChange: any }) {

  const handleClick = () => {
    props.onChange();
  }

  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: props.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
    <DrawerHeader>
      <IconButton onClick={handleClick}>
        {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
      <QuestionOverview />
    <Divider />
  </Drawer>
  );
}
