import React from "react";
import Link from "next/link";
import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { CiLogin } from "react-icons/ci";
import ProductDetails from "@/app/components/productdetails";
export const metadata = {
                    title: "FreshMart|Products Details",
                  };
const page = async ({ params }) => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  const product = await fetch(
    `https://fresh-mart-server.vercel.app/products/${params.productId}`
  ).then((res) => res.json());

  return (
    <>
      {user ? <ProductDetails product={product} user={user}></ProductDetails> : (
        <LoginLink className="flex items-center justify-center gap-1 text-2xl font-semibold text-center">
          <CiLogin />
          Login
        </LoginLink>
      )}
    </>
  );
};

export default page;
