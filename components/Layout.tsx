import Header from "./Header";
import Footer from "./Footer";
const layout = ({children}) => {
    return ( 
         <>
         <Header/>
         {children} 
         <Footer/>
         </>
     );
}
 
export default layout;