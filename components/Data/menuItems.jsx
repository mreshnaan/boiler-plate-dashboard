import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingBag,
  MdMailOutline,
  MdOutlineFlag,
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdOutlineSettingsInputComposite,
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
} from "react-icons/md";

export const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
    path: "/dashboard",
  },
  {
    type: "link",
    label: "Products",
    icon: <MdOutlineShoppingBag />,
    path: "/Products",
  },
  {
    type: "link",
    label: "Mail",
    icon: <MdMailOutline />,
    path: "/Mail",
  },
  {
    type: "link",
    label: "Campaings",
    icon: <MdOutlineFlag />,
    path: "/Campaings",
  },
  {
    type: "link",
    label: "Calendar",
    icon: <MdCalendarToday />,
    path: "/Calendar",
  },
  {
    type: "link",
    label: "Contacts",
    icon: <MdOutlineSupervisorAccount />,
    path: "/Contacts",
  },
];
