import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";

export default function myItemes() {

  return (
   
    <>
    <div className="my-8 w-full">
        <button className="primary-btn"> Create Moving Request</button>
    </div>
    
    <div className=" rounded-lg">
        <h2>My Items</h2>
        <PaginatedTable /> 
        <PopupModal />
    </div>
    

    </>
  );
}
