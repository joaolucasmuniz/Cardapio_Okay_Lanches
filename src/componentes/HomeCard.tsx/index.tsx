import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  title: string;
  image: string;
  link: string;
};

function HomeCard(Props: CardProps) {
  const { title, image, link } = Props;
  const navigate = useNavigate();

  return (
    <Card
      sx={ {
        maxWidth: '100%',
        margin: '1.5rem 0 1.5rem 0',
      } }
      onClick={ () => navigate(link) }
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={ image }
          alt={ title }
          sx={ {
            height: { sm: '16rem', xs: '8rem' },
            objectFit: 'cover',
          } }
        />
        <CardContent
          sx={ {
            padding: '0.5rem',
          } }
        >
          <Typography gutterBottom variant="h6" component="div">
            { title }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}

export default HomeCard;
