import { HiOutlineHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { FaWindowRestore } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";

export const Menus = [
  {
    title: '메인',
    icon: <HiOutlineHome />,
    path: ''
  },
  {
    title: '사용자 관리',
    icon: <MdManageAccounts />,
    path: '/management'
  },
  {
    title: '점포 관리',
    icon: <FaWindowRestore />,
    path: "/storemanagement"
  },
  {
    title: '신고 내역',
    icon: <TbMessageReport />,
    path: "/report"
  },
  {
    title: '알림 전송',
    icon: <IoNotifications />,
    path: "/announcement"
  },
  {
    title: '모바일 버전 이동',
    icon: <RiLogoutBoxLine />,
    path: "mypage"
  },

]