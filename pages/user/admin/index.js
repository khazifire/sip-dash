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
        <h2>User Management</h2>
          <PaginatedTable /> 
          <PopupModal />
        </div>

        <div className="lg:w-2/6">
          <h2>Recently Activities</h2>
          <RecentActivities />
          </div>
      </div>
    </div>
  );
}
