
const StatsPurchasing = () =>{

    return ( 
      <div>

        <div className="flex flex-wrap justify-center md:justify-start md:flex-row lg:flex-nowrap gap-6">

          <div className="flex flex-wrap lg:flex-row justify-between p-4  w-full lg:w-1/4  rounded-lg gap-y-3 text-black-700 border-2 border-gray-200 ">
                <div>
                  <div className="flex items-center gap-2 ">
                      <div className="p-2 bg-gray-100 rounded-2xl ">
                          <svg className="w-12 h-12 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z"/></svg>
                      </div>
                    <p className="text-5xl font-semibold text-gray-700">250</p>
                  </div>
                  <span className="p-2 text-base tracking-wide text-gray-500 font-medium">Total Order Request </span>
                </div>

                <div className="flex items-center gap-6">
                  <button className="flex py-3 px-4 text-sm rounded-lg border border-primary-color gap-x-2.5 bg-primary-color text-white hover:shadow-lg hover:shadow-blue-700/20">View All</button>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-row justify-between p-4  w-full lg:w-1/4  rounded-lg gap-y-3 text-black-700 border-2 border-gray-200 ">
                <div>
                  <div className="flex items-center gap-2 ">
                      <div className="p-2 bg-gray-100 rounded-2xl ">
                          <svg className="w-12 h-12 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z"/></svg>
                      </div>
                    <p className="text-5xl font-semibold text-gray-700">250</p>
                  </div>
                  <span className="p-2 text-base tracking-wide text-gray-500 font-medium">Total Purchases </span>
                </div>

                <div className="flex items-center gap-6">
                  <button className="flex py-3 px-4 text-sm rounded-lg border border-primary-color gap-x-2.5 bg-primary-color text-white hover:shadow-lg hover:shadow-blue-700/20">View All</button>
                </div>
            </div>

       

        </div>
      </div>
     );
}

export default StatsPurchasing;
 
