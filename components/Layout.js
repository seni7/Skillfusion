import Header from "../components/Header";
import Footer from "../components/Footer";
const layout = ({children}) => {
    return ( 
         <>
         <Header/>
         {children}
        
         </>
     );
}
 
export default layout;