import { RxCross2 } from "react-icons/rx";
export default function Details({ setToggle, data }) {
  return (
    <div className="bg-white w-2/5 rounded-2xl p-10">
      <div className="flex flex-col gap-4 text-[#002823]">
        <div className="w-full flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-bold">Order Details Page</h1>
            <RxCross2
              size={22}
              className="cursor-pointer"
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>

          <div className="flex flex-col gap-2 text-[25px]">
            <div className="flex justify-around ">
              orderId : <h1 className="font-semibold">{data.orderId}</h1>
            </div>
            <div className="flex justify-around ">
              Customer Name :{" "}
              <h1 className="font-semibold">{data.customerName}</h1>
            </div>

            <div className="flex justify-around ">
              Order Date : <h1 className="font-semibold">{data.orderDate}</h1>
            </div>
            <div className="flex justify-around ">
              Order Status : <h1 className="font-semibold">{data.status}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
