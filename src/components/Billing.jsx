import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Improve patient workflow <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Denostic helps you get a faster patient workflow. It gives an easy, reliable and fast diagnosis, that helps you focuse more on the patient.
        You save time explaining the diagnosis, by having an expert video provided by Denostic, that you can give the patient a link to. 
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      </div>
    </div>
  </section>
);

export default Billing;
