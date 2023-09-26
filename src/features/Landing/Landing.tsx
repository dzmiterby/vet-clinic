import AboutClinic from "./AboutClinic/AboutClinic";
import Feedback from "./Feedback/Feedback";
import Services from "./Services/Services";
import KindsOfAnimals from "./KindsOfAnimals/KindsOfAnimals";
import Appointment from "./Appointment/Appointment";
import ThemeSwitcher from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../app/providers/ThemeProvide";
import { setStyle } from "../../utils/utils";
import styles from "./Landing.module.scss";
const Landing = () => {
  const { theme } = useTheme();
  return (
    <main className={styles["container-margin"]}>
      <div className={styles["container-centred"]}>
        
        <div className={styles["container-switcher"]}>
          <ThemeSwitcher />
        </div>
        <Appointment />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
        ></div>
        <KindsOfAnimals />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
        ></div>
        <Services />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
        ></div>
        <AboutClinic />
        <div
          className={setStyle(
            theme,
            styles.separator,
            styles["inverse-separator"]
          )}
        ></div>
        <Feedback />
      </div>
    </main>
  );
};

export default Landing;
