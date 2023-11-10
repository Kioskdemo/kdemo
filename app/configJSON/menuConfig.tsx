import { BsTicketDetailed, BsBuildings } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineOtherHouses } from "react-icons/md";

const menuConfig = [
  {
    link: "/queueing",
    iconImg: <BsTicketDetailed size={130} className=" text-[#1b1b1b]" />,
    title: "Queue Number",
    description: "Lorem dolor sit amet",
  },
  {
    link: "/pay-business",
    iconImg: <GiPayMoney size={130} className="text-[#1b1b1b]" />,
    title: "Pay Business",
    description: "Lorem dolor sit amet consectetur",
  },
  {
    link: "/pay-property",
    iconImg: <BsBuildings size={130} className="text-[#1b1b1b]" />,
    title: "Pay Property",
    description: "Lorem dolor sit amet consectetur.",
  },
  {
    link: "/other-payments",
    iconImg: <MdOutlineOtherHouses size={130} className="text-[#1b1b1b]" />,
    title: "Other Payments",
    description: "Lorem dolor sit amet consectetur.",
  },
];

export default menuConfig;
