import GeneralSettingsDropdown from "@/components/Dropdown/GeneralSettingsDropdown";
import OfferSettingsDropdown from "@/components/Dropdown/OfferSettingsDropdown";
import PreferencesSettingsDropdown from "@/components/Dropdown/PreferencesSettingsDropdown";
import SecuritySettingsDropdown from "@/components/Dropdown/SecuritySettingsDropdown";
import SessionSettingsDropdown from "@/components/Dropdown/SessionSettingsDropdown";
import { useTranslations } from "next-intl";
import { FaGear } from "react-icons/fa6";

const ProfileSettingsPage = () => {
  const t = useTranslations("ProfilePage.Settings")
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaGear />
        <h1>{t("label")}</h1>
      </div>
      <div className="flex flex-col gap-6">
        <GeneralSettingsDropdown />
        <SecuritySettingsDropdown />
        <PreferencesSettingsDropdown />
        <SessionSettingsDropdown />
        <OfferSettingsDropdown />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
