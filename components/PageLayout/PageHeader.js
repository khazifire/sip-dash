import { useRouter } from 'next/router'
const PageHeader = () => {
    const router = useRouter()
    let currentPage;
    // let currentPage = (router.pathname=="/")?"Home":
    //                     (router.pathname=="/admin/userList")?"Users List":
    //                         (router.pathname=="/admin/departmentList")?"Department List":
    //                             (router.pathname=="/admin/locationList")?"Location List":"Account Setting"

    switch (router.pathname) {
        case "/":
            currentPage ="Home"
            break;

        case "/admin/userList":
            currentPage ="Users List"
            break;
        case "/admin/departmentList":
            currentPage ="Department List"
            break;
        case "/admin/locationList":
            currentPage ="Location List"
            break;

        case "/":
            currentPage ="Home"
            break;
        case "/orderRequest":
            currentPage ="Order Requests"
            break;
        case "/myItemes":
            currentPage ="My Items"
            break;
        case "/":
            currentPage ="Home"
            break;
    
        default:
            currentPage ="Account Setting"
            break;
    }
    
    return ( 
        <div className="bg-gray-100  text-gray-700 rounded-lg px-5 py-2 flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Dashboard / <span className='font-normal'> {currentPage}</span></h1>

            <a className="inline-flex items-center px-4" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="ml-2 text-sm font-medium hidden sm:block">
                Dan khazifire 
                </span>
            </a>
        </div>
     );
}
 
export default PageHeader;