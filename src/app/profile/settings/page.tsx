import GeneralSettingsDropdown from "@/components/Dropdown/GeneralSettingsDropdown";
import SecuritySettingsDropdown from "@/components/Dropdown/SecuritySettingsDropdown";
import { FaGear } from "react-icons/fa6";

const ProfileSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaGear />
        <h1>Settings</h1>
      </div>
      <div className="flex flex-col gap-6">
        <GeneralSettingsDropdown />
        <SecuritySettingsDropdown />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
