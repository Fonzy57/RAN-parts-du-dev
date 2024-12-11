/* import { Button } from "@/components/button/button"; */
import Seo from "@/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo page="home" />
      <section className="px-5 pt-10 w-full sm:pt-14 md:p-0 md:pt-20">
        {/* TODO CHANGER TYPO DU SITE */}
        <h1 className="text-center text-8xl text-secondary font-montserrat font-bold">
          RAN-parts du Dev
        </h1>
        <p className="lg:text-lg w-[750px] mx-auto mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          suscipit animi molestiae voluptas. Saepe corrupti, amet blanditiis
          soluta, iste atque, quis porro natus distinctio dolor quas laborum.
          Nemo, ipsam. Adipisci?
        </p>
      </section>
    </>
  );
}
