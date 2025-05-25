import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const drawerWidth = 250; // Define drawer width

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Create', icon: <SaveAsIcon /> },
    { text: 'Store', icon: <StoreIcon /> },
    { text: 'Sales and Marketing', icon: <AttachMoneyIcon /> },
    { text: 'Contact Us', icon: <ContactMailIcon /> },
    { text: 'Work Flow Tools', icon: <SettingsApplicationsIcon /> },
    { text: 'Integrations', icon: <IntegrationInstructionsIcon /> },
  ];
  
  const subMenuItems = [
    { text: 'Customer Support', icon: <SupportAgentIcon /> }
  ];

export default function LayoutWithDrawer() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  // Drawer content
  const DrawerList = (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <List>
      {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
            <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      {subMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
            <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleDrawer(!open)} 
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', width: '100%', marginTop: '64px' }}>
        <Drawer
          BackdropProps={{ sx: { backgroundColor: 'transparent' } }} 
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)} 
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              top: '64px',
              height: 'calc(100% - 64px)',
            },
          }}
        >
          {DrawerList}
        </Drawer>
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            transition: 'margin 0.3s ease',
            marginLeft: open ? `${drawerWidth}px` : '0px',
          }}
        >
          <h1>Main Content</h1>
          <p>
            This is the main content area. When the drawer opens, the content shifts.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
