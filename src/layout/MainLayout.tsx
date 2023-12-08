import BottomNavigator from '../../components/BottomMenu/BottomNavigator';

const MainLayout = ({children}) => {
  return (
    <>
      {children}
      <BottomNavigator />
    </>
  );
};
export default MainLayout;
