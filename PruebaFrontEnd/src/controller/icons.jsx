import React from 'react'
import {
    FiEdit,
    FiAward,
    FiCalendar,
    FiHome,
    FiMessageSquare,
  } from "react-icons/fi";
  import { HiOutlineThumbDown, HiOutlineThumbUp,HiHeart, HiLightBulb, HiFolderAdd, HiHand, HiOutlineX, HiSpeakerphone,HiOutlineSearch, HiOutlinePresentationChartLine, HiOutlineMenuAlt1 } from "react-icons/hi";

export default function icons(params) {
  switch (params) {
    case "publicar":
      return <FiEdit style={{background: 'transparent'}}/>;
    case "felicitar":
      return <FiAward style={{background: 'transparent'}}/>;
    case "evento":
      return <FiCalendar style={{background: 'transparent'}}/>;
    case "vender":
      return <FiHome style={{background: 'transparent'}} />;
    case "asistente":
      return <FiMessageSquare style={{background: 'transparent'}}/>;

    case "like":
      return <HiOutlineThumbUp style={{background: 'transparent'}}/>;

    case "notLike":
      return <HiOutlineThumbDown style={{background: 'transparent'}}/>;
    
    case "corazon":
      return <HiHeart style={{background: 'transparent'}}/>

    case "idea":
      return <HiLightBulb style={{background: 'transparent'}}/>
    
    case "folder":
      return <HiFolderAdd style={{background: 'transparent'}}/>

    case "hand":
      return <HiHand style={{background: 'transparent'}}/>

    case 'exit':
      return <HiOutlineX style={{background: 'transparent'}}/>

    case "megafono":
      return <HiSpeakerphone style={{background: 'transparent'}}/>

    case "search":
      return <HiOutlineSearch style={{background: 'transparent'}}/>
    case 'encuaesta':
      return <HiOutlinePresentationChartLine style={{background: 'transparent'}}/>

      case 'texto':
      return <HiOutlineMenuAlt1 style={{background: 'transparent'}}/>
  }
}
