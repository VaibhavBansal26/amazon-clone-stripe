import moment from 'moment'
import Currency from "react-currency-formatter"

function Order({id,amount,amountShipping,items,timestamp,images}) {
    const q1 = items.reduce((total,item) => total + item.quantity,0)
    const m =[]
    items.forEach(function (item) {
        var x = item.quantity;
        m.push(x)
    });
    console.log(m)
    
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">Order Placed</p>
                    <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>
                        <Currency quantity={amount} currency="INR" /> - Next Day Delivery {" "}
                        <Currency quantity={amountShipping} currency="INR"/>
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
                    {q1} items</p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">ORDER # {id}</p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map((image,i) => (
                         <img src={image} alt="" key={i} className="h-20 object-contain sm:h-32"/> 
                    ))}
                </div>
                {/* <p className="flex space-x-14 px-3.5 py-2 items-center overflow-x-auto md:space-x-24 px-24 lg:space-x-24 px-24">
                {m.map((qty,i) =>(   
                            <i key ={i} className="bg-gray-100 text-gray-500 rounded-full h-6 w-6 text-center p-0.2 font-bold">{qty}</i>
                            
                ))}</p> */}
                
            </div>
            
        </div>
    )
}

export default Order
