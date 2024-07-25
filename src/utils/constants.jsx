import { MdHomeFilled,
        MdLocalFireDepartment,
        MdLiveTv,
        MdMusicNote,
        MdNewspaper,
        MdThumbDownAlt,
        MdThumbDownOffAlt,
        MdThumbUpAlt,
        MdThumbUpOffAlt,

       
        } from "react-icons/md";


import { FiFilm } from "react-icons/fi"
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi"
import { FiSettings, FiHelpCircle } from "react-icons/fi"
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri"

export const categories = [
  
  { name: "Home", icon: <MdHomeFilled />, type: "main_catagory", url: "home" },
  { name: "Shorts", icon: <MdLocalFireDepartment />, type: "main_category", url: "shorts/info" },
  {
    name: "Subscription",
    icon: <MdMusicNote />,
    type: "user_category",
    divider: true,
  },
  { name: "Your Channel", icon: <FiFilm />, type: "category" },
  { name: "History", icon: <MdLiveTv />, type: "user_category" },
  
  { name: "Watch later", icon: <MdNewspaper />, type: "user_category" , divider: true },
  
  
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];