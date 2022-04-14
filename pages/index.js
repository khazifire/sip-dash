import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import RecentActivities from "@/components/admin/items/RecentActivities";

export default function Home() {

  return (
    <>
      <div className="my-8 flex flex-row gap-6 w-full">
        <button className="primary-btn"> Create Order Request</button>
        <button className="primary-btn"> Create Moving Request</button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className=" lg:w-2/3 rounded-lg ">
            <h2>Recent order Request</h2>
            <PaginatedTable /> 
            <PopupModal />  
        </div>

        <div className="lg:w-2/6 flex flex-col gap-8">
          <div>
            <h2>Notifications</h2>
            <RecentActivities />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <h2>Order Request</h2>
              <a href="/orderRequest" className="text-lg text-primary-color italic font-normal hover:underline hover:decoration-2 underline-offset-2">Learn More</a>
            </div>
            <RecentActivities />
          </div>
          </div>
      </div>
    </>
  );
}
