import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';

import {
  Dashboard as DashboardIcon,
  Upload as UploadIcon,
  Receipt as InvoicesIcon,
  AccountCircle as ProfileIcon,
  School as OnboardingIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

// ✅ Define types for props
interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

// Menu items for the sidebar
const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Upload', icon: <UploadIcon />, path: '/upload' },
  { text: 'Invoices', icon: <InvoicesIcon />, path: '/invoices' },
  { text: 'Profile', icon: <ProfileIcon />, path: '/profile' },
  { text: 'Onboarding', icon: <OnboardingIcon />, path: '/onboarding' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => (
  <Box sx={{ display: 'flex' }}>
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        },
      }}
    >
      {/* Sidebar Header with Collapse Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'flex-end' : 'center',
          padding: 2,
        }}
      >
        <IconButton onClick={toggleSidebar}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Divider />

      {/* Navigation Links */}
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </Box>
);

export default Sidebar;
