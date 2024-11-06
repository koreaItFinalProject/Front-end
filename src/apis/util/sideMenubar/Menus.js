import { HiOutlineHome } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { FaWindowRestore } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";

export const Menus = [
  {
    title: '메인',
    icon:<HiOutlineHome/>,
    path: 'home'
  },
  {
    title: '프로필',
    icon:<CgProfile/>,
    path: 'profile'
  },
  {
    title: '사용자 관리',
    icon:<MdManageAccounts/>,
    path: 'management'
  },
  {
    title: '점포 관리',
    icon:<FaWindowRestore/>,
    path: "storemanagement"
  },
  {
    title: '설정',
    icon:<IoMdSettings/>,
    path: "setting"
  },
  {
    title: '로그아웃',
    icon:<RiLogoutBoxLine/>,
    path: "login"
  },

]