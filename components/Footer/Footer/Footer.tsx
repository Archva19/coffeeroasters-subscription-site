import Logo from "../FooterItems/Logo";
import Navigation from "../FooterItems/Navigation";
import Socials from "../FooterItems/Socials";

export default function Footer() {
  return (
    <>
      <footer className="mb-18 w-[87.2%] mx-auto md:w-[89.713541%] xl:w-[88.88888%] bg-[#2C343E] p-13.5 flex flex-col items-center gap-[48.56px] md:gap-16.25 xl:mb-22 xl:flex-row xl:justify-between xl:py-11.75 xl:px-21.25">
        <div className="flex flex-col items-center gap-[48.44px] md:gap-8 xl:flex-row xl:gap-[102.9px]">
          <Logo />
          <Navigation />
        </div>
        <Socials />
      </footer>
    </>
  );
}
