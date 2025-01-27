import Link from "next/link";
import { FiAlertTriangle } from "react-icons/fi";

export default function Custom404() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <FiAlertTriangle className="size-28 text-primary" />
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" passHref>
        <button className="mt-6 rounded bg-primary px-6 py-2 text-white duration-200 hover:scale-105 hover:bg-secondary">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
