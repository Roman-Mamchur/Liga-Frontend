// This is from next-intl documentation for handling not-found page within [locale]
// See details: https://next-intl.dev/docs/environments/error-files#catching-unknown-routes

import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}
