import Link from "next/Link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function about() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
