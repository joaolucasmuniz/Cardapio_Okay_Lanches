import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type CardProps = {
  id: number;
  name: string;
  ingredients?: string;
  price: number;
  image?: string;
};

function CardOptions({
  id, name, ingredients = '', price, image = '' }: CardProps) {
  return (
    <Link
      to={ `/detalhes/${id}` }
      style={ { textDecoration: 'none' } }
    >
      <Card
        key={ id }
        sx={ {
          maxWidth: 345,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        } }
      >
        {image && (
          <CardMedia
            sx={ { height: 140 } }
            image={ image }
            title={ name }
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {ingredients && (
            <Typography variant="body2" color="text.secondary">
              {ingredients}
            </Typography>
          )}
        </CardContent>
        <CardActions
          sx={ {
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            padding: '1rem',
          } }
        >
          <Typography variant="body1" color="text.secondary">
            {`R$ ${price.toFixed(2).replace('.', ',')}`}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

export default CardOptions;
