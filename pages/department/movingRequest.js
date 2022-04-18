import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import SearchBox from "@/components/admin/items/SearchBox";

export default function movingRequest() {
  
  return (
    <div>
       <div className="flex flex-row gap-8 my-6 ">
       <button className="primary-btn">Create New Request</button>
      <SearchBox />
      
       </div>
      <div className="">
        {/* <h2>List of Users</h2> */}
          <PaginatedTable /> 
          <PopupModal />
        </div>
    </div>
  );
}