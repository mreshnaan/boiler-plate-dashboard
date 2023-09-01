import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "../Icons/Icons";

export const Statistics = (iconBoxInside) => [
  {
    title: "Today's Moneys",
    amount: "$53,000",
    percentage: 55,
    icon: <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />,
  },

  {
    title: "Today's Users",
    amount: "2,300",
    percentage: 5,
    icon: <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />,
  },

  {
    title: "New Clients",
    amount: "+3,020",
    percentage: -14,
    icon: <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />,
  },

  {
    title: "Total Sales",
    amount: "$173,000",
    percentage: 8,
    icon: <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />,
  },
];
