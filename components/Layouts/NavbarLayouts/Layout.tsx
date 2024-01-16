import Navbar from '@/components/Nav/Navbar';
import Footer from '@/components/footer/Footer';
const Layout = ({children}:any) => {
  return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>);
    
};
export default Layout