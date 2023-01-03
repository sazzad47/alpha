import { TbGridDots } from "react-icons/tb";
import AppsMenu from "./AppsMenu";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                {/* <TbGridDots size={20} color="#5f6368" /> */}
                <AppsMenu/>
            </span>
            
        </div>
    );
};

export default ProfileIcon;
