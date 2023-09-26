import ThemeSwitcher from '../../shared/ui/ThemeSwitcher/ThemeSwitcher';
import PetsCollapse from '../../widgets/PetsCollapse/PetsCollapse';
import { useGetClientPetsQuery } from '../../services/client/clientPet.api';
import SidebarHeader from '../../widgets/Sidebar/SidebarHeader/SidebarHeader';
import styles from './ClientPageLayout.module.scss';
const ClientPageLayout = () => {
  const {data, isSuccess} = useGetClientPetsQuery()
    return (
    isSuccess &&
    <div className={styles.client_container}>
      <div className={styles.pet_sidebar}>
      <SidebarHeader text='Ваши питомцы'onClick={() => {
        console.log('addpet')
      }}/>
      <div className={styles.collapse_container}><PetsCollapse
      data = {data}
      /></div>
      
      </div>
      <div className={styles.main}><ThemeSwitcher /></div>
      <div className={styles.news_sidebar}></div>
    </div>
  )
};

export default ClientPageLayout;
