import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      href="#contactus"
      onClick={() => setSelectedPage(SelectedPage.Contactus)}
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-500 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
