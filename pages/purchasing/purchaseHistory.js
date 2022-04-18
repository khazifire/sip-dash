import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import SearchBox from "@/components/admin/items/SearchBox";

export default function purchaseHistory() {
  
  return (
    <div>
       <div className="flex flex-row gap-4 md:gap-8 my-6 items-center justify-between flex-wrap ">
      <SearchBox />
        <div>
          <p className="font-semibold text-xl p-2 px-4 bg-green-300"> Budget (baht): <span className="font-normal">500/10000</span></p>
        </div>
       </div>
      <div className="">
        {/* <h2>List of Users</h2> */}
          <PaginatedTable /> 
          <PopupModal />
        </div>
    </div>
  );
}