import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeDollarLine } from "react-icons/ri";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentIcon from "@mui/icons-material/Payment";

const SmallInfo = () => {
  const infos = [
    {
      icon: <TbTruckDelivery className="text-4xl text-primary" />,
      title: "Free Shipping",
      info: "On Order Over $99",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: <RiExchangeDollarLine className="text-4xl text-yellow" />,
      title: "Money Return",
      info: "7 Days Money Return",
      bgColor: "bg-yellow/10",
      borderColor: "border-yellow/20",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: "32px", color: "#06B6D4" }} />,
      title: "Support 24/7",
      info: (
        <span>
          Hotline (
          <a href="tel:+8801632970990" className="hover:text-accent font-medium">
            +8801632970990
          </a>
          )
        </span>
      ),
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
    },
    {
      icon: <PaymentIcon sx={{ fontSize: "32px", color: "#EF5DA8" }} />,
      title: "Safe Payment",
      info: "Protect Online Payment",
      bgColor: "bg-pink/10",
      borderColor: "border-pink/20",
    },
  ];
  
  return (
    <div className="hidden lg:block mb-16 container px-4">
      <div className="bg-white rounded-2xl border border-input shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, i) => (
            <div 
              key={i + 1} 
              className={`group flex flex-col items-center text-center p-6 rounded-xl ${info.bgColor} ${info.borderColor} border hover:scale-105 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="bg-white rounded-full p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300 mb-4">
                {info.icon}
              </div>
              <h5 className="font-bold text-black text-base xl:text-lg mb-2">
                {info.title}
              </h5>
              <p className="text-gray text-xs xl:text-sm font-medium leading-relaxed">
                {info.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallInfo;
