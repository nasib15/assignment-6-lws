"use client";

import { useRouter } from "next/navigation";

const LinkComponent = ({ link, children, className }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};
export default LinkComponent;
