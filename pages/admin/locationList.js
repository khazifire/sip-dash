import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import SearchBox from "@/components/admin/items/SearchBox";


export default function locationList() {
  
  return (
    <div>
       <div className="flex flex-row gap-16 my-6 ">
       <button className="flex py-2 px-4 text-sm rounded-lg border border-primary-color gap-x-2.5 bg-primary-color text-white hover:shadow-lg hover:shadow-blue-700/20">Add New Location</button>
      <SearchBox />
      


       </div>
      <div className="">
        {/* <h2 className="text-xl p-1 py-2 text-gray-700">List of Users</h2> */}
          <PaginatedTable /> 
          <PopupModal />
        </div>
    </div>
  );
}