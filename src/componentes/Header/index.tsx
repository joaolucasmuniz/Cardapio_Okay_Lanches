import { useState } from 'react';
import { ChevronLeftOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Hidden, IconButton,
  List, ListItem, SwipeableDrawer, Toolbar, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import logoIcon from '../../images/logo.jpeg';
import styles from './Header.module.css';

function Header() {
  const [currentNav, setCurrentNav] = useState('Home');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    {
      id: 'Home', path: '/',
    },
    {
      id: 'Lanches', path: '/lanches',
    },
    {
      id: 'Bebidas', path: '/bebidas',
    },
    {
      id: 'Porcões', path: '/porcoes',
    },
    {
      id: 'Batata Recheada', path: '/batata-recheada',
    },
  ];

  const handleNav = (path: string, id: string) => {
    navigate(path);
    setCurrentNav(id);
  };

  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Hidden smDown>
          <div className={ styles.logoContainer }>
            <img src={ logoIcon } alt="logo" width="50" />
          </div>
          <div style={ { flex: 1 } } />
          {navigation.map((item) => (
            <Button
              className={ `${styles.navButton} 
              ${currentNav === item.id ? styles.active : ''}` }
              key={ item.id }
              onClick={ () => handleNav(item.path, item.id) }
              color="inherit"
            >
              {item.id}
            </Button>
          ))}
        </Hidden>

        <Hidden smUp>
          <div>
            <img src={ logoIcon } alt="logo" width="50" />
          </div>
          <div style={ { flex: 1 } } />
          <Button color="inherit" onClick={ () => setOpen(true) }>
            <Typography marginRight="1rem">
              {currentNav}
            </Typography>
            <MenuOutlined />
          </Button>
        </Hidden>
      </Toolbar>

      <SwipeableDrawer
        anchor="left"
        open={ open }
        onOpen={ () => setOpen(true) }
        onClose={ () => setOpen(false) }
      >
        <div style={ { display: 'flex', justifyContent: 'flex-end' } }>
          <IconButton onClick={ () => setOpen(false) }>
            <ChevronLeftOutlined />
          </IconButton>
        </div>
        <Divider />
        <List
          sx={
          {
            width: 250,
          }
        }
        >
          {navigation.map((item) => (
            <ListItem key={ item.id }>
              <Button
                className={ `${styles.navButton} 
                ${currentNav === item.id ? styles.active : ''}` }
                onClick={ () => {
                  handleNav(item.path, item.id);
                  setOpen(false);
                } }
                color="inherit"
              >
                {item.id}
              </Button>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default Header;
