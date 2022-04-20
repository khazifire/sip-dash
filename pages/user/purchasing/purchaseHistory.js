import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import SearchBox from "@/components/admin/items/SearchBox";

export default function purchaseHistory() {
  
  return (
    <div>
       <div className="flex flex-row gap-4 md:gap-8 my-6 items-center justify-between flex-wrap ">
      <SearchBox />
 
        <div className="rounded-lg px-4 py-2 bg-green-300">
          <p className="font-semibold text-xl "> Budget (baht): <span className="font-normal">100/10000</span></p>
        </div>
        
       </div>
      <div className="mt-4">
        {/* <h2>List of Users</h2> */}
          <PaginatedTable /> 
          <PopupModal />
        </div>
    </div>
  );
}