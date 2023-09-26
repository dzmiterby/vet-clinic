import styles from './CommentCard.module.scss';
import { FC } from 'react';
import image from '../../../assets/images/comment-card-placeholder.png';
import Likes from '../../../shared/ui/Likes/Likes';
import { CommentCardType } from './CommentCardType';
import { convertDate } from '../../../utils/utils';
const CommentCard: FC<CommentCardType> = (props: CommentCardType) => {
  const {id, content, dateTime, likes, dislikes, userInfoDto } = props;
  const date = convertDate(dateTime);

  return (
    <div className={styles.comment_card} data-testID ="comment_card">
      <div className={styles.comment_card__image_container}>
        <img className={styles.user_image} src={image} data-testID ="user_image"></img>
        <a href="#" className={styles.username} data-testID ="user_link">
          {`${userInfoDto.firstname} ${userInfoDto.lastname}`}
        </a>
      </div>
      <div className={styles.comment_card__content_container}>
        <div className={styles.comment_card__content_container__date} data-testID ="date">
          {date}
        </div>
        <div className={styles.underline}></div>
        <div className={styles.comment_card__content_container__content} data-testID ="content">
          {content}
        </div>
        <div className={styles.likes_container} data-testID="likes_component">
          <Likes id={id} likes={likes} dislikes={dislikes}/>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
