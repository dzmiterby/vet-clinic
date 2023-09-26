import {FC} from "react";
import {ITopic} from "./info";
import {useTheme} from "../../../app/providers/ThemeProvide";
import {convertTopicDate, setStyle} from "../../../utils/utils";
import avatar from "../../../assets/icons/pet-avatar-default.svg";
import calendar from "../../../assets/icons/calendar.svg";
import comments from "../../../assets/icons/comments.svg";
import styles from "./TopicCard.module.scss";

const TopicCard: FC<ITopic> = (props: ITopic) => {
  const {title, content, topicStarter, lastUpdateDate, commentDtoList} = props;
  const {theme} = useTheme();
  const date = convertTopicDate(lastUpdateDate);

  return (
    <div
      data-testid={"topic"}
      className={setStyle(
        theme,
        styles.container,
        `${styles.container} ${styles.container__dark} ${styles.text__dark}  `
      )}
    >
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{content}</p>
      </div>
      <div className={styles["topic-info"]}>
        <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
          <img className={styles["topic-image"]} src={avatar} />
          <span>{`${
            topicStarter.firstname + " " + topicStarter.lastname
          }`}</span>
        </div>
        <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
          <img className={styles["topic-image"]} src={calendar} />
          <span>{date}</span>
        </div>
        <div className={`${styles.text} ${styles["topic-info__wrapper"]}`}>
          <img className={styles["topic-image"]} src={comments} />
          <span>{commentDtoList.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
