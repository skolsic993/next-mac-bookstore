import Link from "next/link";
import clsx from "clsx";
import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "../lib/constants";

export const SiteFooter = () => {
  return (
    <div className="mt-36 pb-36 text-base bg-transparent">
      <div className="text-gray-800">
        <div className="flex flex-col justify-between font-medium lg:flex-row">
          <div className="flex space-x-5">
            <div>
              <Link
                href="/videos"
                className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-800">
        Built with{" "}
        <a
          href="https://nextjs.org"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://mdxjs.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          MDX
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Tailwind
        </a>{" "}
        and{" "}
        <a
          href="https://vercel.com"
          className={clsx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
        >
          Vercel
        </a>
      </p>
    </div>
  );
};
