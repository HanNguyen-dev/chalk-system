import { styled } from '@mui/material/styles';
import { DrawerHeader } from '../SideBar/SideBar';
import QuestionContainer from './QuestionContainer/QuestionContainer';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
  drawerwidth: number;
}>(({ theme, open, drawerwidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerwidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function Content(props: { drawerWidth: number, isOpen: boolean }) {

  return (
    <Main open={props.isOpen}
          drawerwidth={props.drawerWidth}>
      <DrawerHeader />
      <QuestionContainer />
    </Main>
  );
}