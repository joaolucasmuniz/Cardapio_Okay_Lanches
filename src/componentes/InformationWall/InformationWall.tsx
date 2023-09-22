import { Divider, List, ListItem,
  ListItemIcon, ListItemText, Typography } from '@mui/material';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function InformationWall() {
  return (
    <List
      sx={ {
        width: '100%',
        maxWidth: '100%',
        bgcolor: 'background.paper',
        borderRadius: '1rem',
        boxShadow: 3,
        marginTop: '1rem',
        marginBottom: '1rem',
      } }
    >
      <ListItem>
        <ListItemIcon>
          <WatchLaterOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Aberto:"
          secondary="Terça a domingo, das 18h às 00h"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemIcon>
          <WhatsAppIcon />
        </ListItemIcon>
        <ListItemText
          primary="(19) 98105-6051 / 99784-7693"
          secondary="Telefone / WhatsApp"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemIcon>
          <FmdGoodOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Amparo "
          secondary="Av. Ulderico Batoni, 237 - São Dimas"
        />
      </ListItem>
    </List>
  );
}

export default InformationWall;
