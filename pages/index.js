import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import RecentActivities from "@/components/admin/items/RecentActivities";
import StatsCards from "@/components/admin/items/StatsCards";

export default function Home() {

  return (
    <div>
      <h1>Hello World --- sample navigation links</h1>

      <div className="flex flex-col gap-4 mt-12">
        <a href="/user/admin" className="underline font-normal hover:text-primary-color">Admin</a>
        <a href="/user/purchasing" className="underline font-normal hover:text-primary-color">purchasing</a>
        <a href="/user/department" className="underline font-normal hover:text-primary-color">Department</a>
        <a href="/user/customer" className="underline font-normal hover:text-primary-color">Customer</a>
      </div>

    </div>
  );
}
 