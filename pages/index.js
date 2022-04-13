import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import RecentActivities from "@/components/admin/items/RecentActivities";
import StatsCards from "@/components/admin/items/StatsCards";
import CustomerForms from "@/components/customer/items/CustomerForms";
import OrderRequestForm from "@/components/customer/items/orderRequestForm";

export default function Home() {

  return (
   
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="mt-2 lg:w-2/3">
      <CustomerForms />
        <div className=" rounded-lg mt-8">
        <h2 className="text-xl p-1 py-2 text-gray-700">Order Requests</h2>
          <PaginatedTable /> 
          <PopupModal />
        </div>
      </div>

      <div className="lg:w-2/6">
        <h2 className="text-xl p-1 py-2 text-gray-700">Notifications</h2>
          <RecentActivities />
          </div>
    </div>
      
     
   
  );
}
