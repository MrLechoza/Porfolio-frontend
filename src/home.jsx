import React from "react";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  const { t } = useTranslation();
  return (
    <div id="home" className="pt-20">
      <h1 className="mt-20 flex justify-center items-center font-russo xl:text-5xl lg:text-5xl md:text-5xl xs:text-3xl text-white">
        {t("home.title")}
      </h1>
      <p className="flex mt-5 border border-b w-[330px] mx-auto items-center" />
      <p className="flex justify-center items-center text-white mt-5">
        {t("home.description")}
      </p>
      <div className="mt-10 flex  justify-center items-center object-contain">
        <div className="w-52 h-52">
          <DotLottieReact
            src="https://lottie.host/86f42f27-4361-488d-9e8b-16efed102897/JIHHYJBkJA.lottie"
            loop={false}
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
