import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import RecentActivities from "@/components/admin/items/RecentActivities";
import StatsCards from "@/components/admin/items/StatsCards";

export default function Home() {

  return (
    <div>
      <StatsCards />
      <div className="flex flex-col lg:flex-row justify-between  mt-8 gap-8">
        <div className=" rounded-lg lg:w-2/3">
        <h2 className="text-xl p-1 py-2 text-gray-700">Recently added Users</h2>
          <PaginatedTable /> 
          <PopupModal />
        </div>

        <div className="lg:w-2/6">
        <h2 className="text-xl p-1 py-2 text-gray-700">Recently Activities</h2>
          <RecentActivities />
          </div>
      </div>
    </div>
  );
}
