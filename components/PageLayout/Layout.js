import Head from 'next/head'
import Navbar from './NavBar';
import PageHeader from './PageHeader';


const Layout = ({children}) => {
    return (  
        <>
        <Head>
          <link rel="icon" href="/icon.png" />
        </Head>
        
        <div className="relative min-h-screen md:flex">
            <Navbar />
            <div className="flex-1 p-10 text-2xl font-bold">
                <PageHeader />
                {children}
            </div>
        </div>
      
        </>
    );
}
 
export default Layout;