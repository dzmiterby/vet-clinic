import styles from "./ForumWrapper.module.scss";
import {setStyle} from "../../../utils/utils";
import {useTheme} from "../../../app/providers/ThemeProvide";
import { useGetAllTopicsQuery } from "../../../services/user/topic.api";
import TopicCard from "../TopicCard/TopicCard";

const ForumWrapper = () => {
  const {data = []} = useGetAllTopicsQuery();
  const {theme} = useTheme();
  
  return (
    <div className={styles["container-margin"]} data-testid="forum" >
      <div className={styles.wrapper}>
        <div className={styles.wrapper__header}>
          <h4 className={styles.wrapper__title}>Форум</h4>
        </div>
        <div
          className={setStyle(
            theme,
            styles.topics,
            `${styles.topics} ${styles["topics-dark"]}`
          )}
        >
        {data && data.map(topic => (
          <TopicCard key={topic.id} {...topic} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ForumWrapper;