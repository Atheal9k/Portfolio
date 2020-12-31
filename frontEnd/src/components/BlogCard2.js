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

  const titleProp = title;

  const CardContentList = () => {
    console.log(titleProp)
    const listItems = titleProp.map(number => {number.titles})
    console.log("List Items " + listItems)
    return {listItems}
  }
  
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
          heading={CardContentList()}

          body={
            ""
          }
        />
        <div>

        </div>
      </CardContent>
    </Card>
  );
};
export default MusicCardDemo