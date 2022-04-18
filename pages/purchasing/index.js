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
            <div className="flex flex-row items-center justify-between">
              <h2>Pending Order Request <span className="px-3 bg-green-200 rounded-full font-normal">5</span></h2>
              <a href="/department/orderRequest" className="text-lg text-primary-color italic font-normal hover:underline hover:decoration-2 underline-offset-2">View All</a>
            </div>
            <RecentActivities />
          </div>
          

{/* to fix */}
    
          <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-semibold leading-loose text-white">Most type of order</h2>
              <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
                <img src="../components/purchasing/img/chevron-down.svg" alt="hi"/>
    
                <span class="text-sm text-white">Today</span>
              </button>
            </div>
            <hr class="border-gray-700" />
            <div class="flex gap-x-7">
              <img width="176" src="./img/chart.svg" alt="" />
              <div class="flex flex-col gap-y-4">
                <div class="flex gap-x-2 items-start">
                  <div class="w-4 h-4 mt-0.5 rounded-full bg-red-400"></div>
                  <div>
                    <div class="text-sm font-medium text-white">Cafeteria</div>
                    <div class="text-xs text-gray-500">200 customers</div>
                  </div>
                </div>
                <div class="flex gap-x-2 items-start">
                  <div class="w-4 h-4 mt-0.5 rounded-full bg-orange-400"></div>
                  <div>
                    <div class="text-sm font-medium text-white">Plant Service</div>
                    <div class="text-xs text-gray-500">122 customers</div>
                  </div>
                </div>
                <div class="flex gap-x-2 items-start">
                  <div class="w-4 h-4 mt-0.5 rounded-full bg-blue-400"></div>
                  <div>
                    <div class="text-sm font-medium text-white">IT OFfice</div>
                    <div class="text-xs text-gray-500">264 customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        

          
  



        </div>
      </div>
    </>
  );
}
