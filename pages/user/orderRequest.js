import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";

export default function orderRequest() {

  return (
   
    <>
    <div className="my-8 w-full">
        <button className="primary-btn"> Create Order Request</button>
    </div>
    
    <div className=" rounded-lg">
        <h2>Order Requests</h2>
        <PaginatedTable /> 
        <PopupModal />
    </div>
    

    </>
  );
}
