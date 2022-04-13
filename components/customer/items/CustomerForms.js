const CustomerForms = () => {
    return ( 
        <>
        <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="">
                {/* <p className="my-2">* You are required to provide descriptive description of a product when placing an order.</p> */}
                <button className="flex py-2 px-4 text-sm rounded-lg border border-primary-color gap-x-2.5 bg-primary-color text-white hover:shadow-lg hover:shadow-blue-700/20">Create Order Request</button>
            </div>

            <div className="">
                {/* <p className="my-2">* You are required to provide descriptive description of a product when placing an order.</p> */}
                <button className="flex py-2 px-4 text-sm rounded-lg border border-primary-color gap-x-2.5 bg-primary-color text-white hover:shadow-lg hover:shadow-blue-700/20">Create Moving Request</button>
            </div>
        </div>
             
            
        </>
     );
}
 
export default CustomerForms;