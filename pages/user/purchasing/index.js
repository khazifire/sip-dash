import PaginatedTable from "@/components/admin/items/PaginatedTable";
import PopupModal from "@/components/admin/items/PopupModal";
import RecentActivities from "@/components/admin/items/RecentActivities";
import StatsPurchasing from "@/components/purchasing/items/statsPurchasing";


export default function Home() {

  return (
    <>
      <div>
          <StatsPurchasing />
      </div>
      {/* <div className="my-8 flex flex-row gap-6 w-full">
        <button className="primary-btn"> Create Order Request</button>
        <button className="primary-btn"> Create Moving Request</button>
      </div> */}

      <div className="mt-4">
        <div className="rounded-lg ">
            <h2>Recent order Request</h2>
            <PaginatedTable /> 
            <PopupModal />  
        </div>

        {/* <div className="lg:w-2/6 flex flex-col gap-8">
          <div>
            <div className="flex flex-row items-center justify-between">
              <h2>Pending Order Request <span className="px-3 bg-green-200 rounded-full font-normal">5</span></h2>
              <a href="/department/orderRequest" className="text-lg text-primary-color italic font-normal hover:underline hover:decoration-2 underline-offset-2">View All</a>
            </div>
            <RecentActivities />
          </div>
        </div> */}

      </div>
    </>
  );
}
