import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const MusicCardDemo = ({title}) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  console.log(title)

  const CardContentList = (title) => {
    const listItems = title.map((number) => <div>{number}</div>)
    return <div>{listItems}</div>
  }
  const numbers1 = [1, 2, 3, 4, 5,6  ];
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
            ""
        }
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'title'}
          heading={title[1].titles}

          body={
            ""
          }
        />
        <div>
          <CardContentList title={numbers1}/>
        </div>
      </CardContent>
    </Card>
  );
};
export default MusicCardDemo