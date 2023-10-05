import NavBar from '@/components/Nav/NavBar';
import Footer from '@/components/footer/Footer';
const Layout = ({children}:any) => {
  return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>);
    
};
export default Layout