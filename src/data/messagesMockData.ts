export interface Message {
  id: number;
  title: string;
  description: string;
  date: string;
  seen: boolean;
}

export const messages = [
  {
    id: 1,
    title:
      "New Feature Launched! Check this feature out now! 🚀 Preferences settings available now.",
    description:
      "We are excited to announce a brand-new feature in your dashboard that will enhance your user experience and streamline your workflow. This feature allows you to manage all your account settings and preferences from a centralized location, making it easier to personalize your profile and optimize your experience. With this new update, you'll have access to advanced customization options, notifications, and new integrations with popular tools. The interface has been completely redesigned to be more intuitive, so you can find everything you need with just a few clicks. Additionally, our team has worked tirelessly to ensure this feature is fully compatible with various devices, ensuring a seamless experience across all platforms. Be sure to explore this new feature and let us know your feedback as we continue to improve and add new functionality. We are confident that this update will take your user experience to the next level, and we look forward to hearing what you think about it. Stay tuned for more exciting updates coming soon!",
    date: "1 hour ago",
    seen: false,
  },
  {
    id: 2,
    title: "Account Update",
    description:
      "We're happy to inform you that your profile has been successfully updated. Our team has worked diligently to ensure that all the changes to your account are reflected accurately and securely. In addition to updating your personal details, we’ve made a number of improvements to enhance the overall functionality and security of your profile. You can now enjoy an easier navigation experience, with all of your settings clearly organized and accessible at your fingertips. We’ve also enhanced the privacy settings to give you more control over what is shared and who has access to your information. This update comes with new options that allow you to manage notifications and track your activity more efficiently. Your security has been a top priority during this update, with improved encryption and two-factor authentication features now available to keep your account safe from unauthorized access. If you encounter any issues or need assistance with the changes, our support team is here to help. As always, we appreciate your trust in us and look forward to continuing to improve your experience.",
    date: "Yesterday",
    seen: false,
  },
  {
    id: 3,
    title: "Payment Received",
    description:
      "We’re happy to confirm that we’ve successfully received your subscription payment. Thank you for continuing your journey with us. Your payment has been processed, and your subscription is now active for the upcoming billing cycle. This will ensure that you continue to have uninterrupted access to all the premium features that are part of your subscription. Your payment helps us maintain and improve our services, and we are grateful for your ongoing support. If you have any questions or concerns about your payment, billing cycle, or subscription status, feel free to reach out to our support team at any time. We also encourage you to explore some of the new features and enhancements that have been added to your account with this payment, as we are constantly working to improve your experience. You can expect more updates and exclusive offers coming soon. We truly appreciate your commitment to our platform, and we look forward to continuing to serve you in the future.",
    date: "2 days ago",
    seen: true,
  },
  {
    id: 4,
    title: "Security Alert",
    description:
      "We wanted to inform you about a recent security event involving your account. A new login was detected from an unrecognized device, which may indicate unauthorized access to your profile. Please be assured that we are closely monitoring the situation to ensure your account's security. We recommend that you review your account activity immediately to check for any suspicious behavior. If you notice anything unusual, we advise you to change your password and enable two-factor authentication if you haven't already done so. Our team has taken the necessary steps to secure your account, and we are implementing additional security measures to prevent any further unauthorized access. Your security is our top priority, and we are committed to ensuring that your personal information remains safe. If you need any assistance or have concerns about this security alert, please do not hesitate to contact our support team, who are available 24/7 to assist you.",
    date: "3 days ago",
    seen: true,
  },
  {
    id: 5,
    title: "Exclusive Offer!",
    description:
      "We’re excited to offer you a limited-time discount on your next purchase! As a valued member, you are eligible for a special offer that will give you significant savings on any of our premium products and services. This exclusive offer is available only for a short period, so be sure to take advantage of it before it expires. Whether you’ve been eyeing one of our latest offerings or planning to upgrade your current subscription, now is the perfect time to make a purchase. You’ll get access to premium features at a fraction of the regular price, and it’s our way of saying thank you for being part of our community. To redeem this offer, simply use the promo code provided during checkout. If you need any help with your purchase or have questions about the offer, our support team is here to assist you. Don't miss out on this opportunity to save big. Act fast and make your next purchase with us today!",
    date: "5 days ago",
    seen: true,
  },
  {
    id: 6,
    title: "Weekly Summary",
    description: "Your weekly activity summary is now available.",
    date: "6 days ago",
    seen: true,
  },
  {
    id: 7,
    title: "System Maintenance",
    description: "Scheduled maintenance will take place this weekend.",
    date: "1 week ago",
    seen: true,
  },
  {
    id: 8,
    title: "Friend Request",
    description: "You have a new friend request pending approval.",
    date: "1 week ago",
    seen: true,
  },
];
