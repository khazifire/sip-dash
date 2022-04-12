const RecentActivities = () => {
    return ( 
        <div className="flex flex-col p-6 bg-white rounded-lg gap-y-6 border-2 ">
    
            <div className="flex gap-4 flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <div className="w-4 h-4 mt-0.5 rounded-full bg-red-400"></div>
                    <div className="flex flex-col">
                        <p className="text-base font-medium text-gray-700">Deleted user dan</p>
                        <span className="text-sm text-gray-600 font-normal">April 11, 2022 @4:10pm</span>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <div className="w-4 h-4 mt-0.5 rounded-full bg-red-400"></div>
                    <div className="flex flex-col">
                        <p className="text-base font-medium text-gray-700">Created user dan</p>
                        <span className="text-sm text-gray-600 font-normal">April 11, 2022 @4:10pm</span>
                    </div>
                    </div>

                
            </div>
        </div>
           
     );
}
 
export default RecentActivities;