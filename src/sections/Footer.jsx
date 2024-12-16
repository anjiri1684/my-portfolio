import gitHubSvg from "../../public/assets/github.svg";
import twitterSvg from "../../public/assets/twitter.svg";
import linkedinSvg from "../../public/assets/linkedin.svg";

function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/anjiri1684" target="_blanck">
          <div className="social-icon">
            <img
              src={gitHubSvg}
              alt="github svg"
              className="w-1/2 h-1/2 cursor-pointer"
            />
          </div>
        </a>
        <a href="https://x.com/AnjiriVincent" target="_blanck">
          <div className="social-icon">
            <img
              src={twitterSvg}
              alt="twitter svg"
              className="w-1/2 h-1/2 cursor-pointer"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/vincent-anjiri-647381192/"
          target="_blanck"
        >
          <div className="social-icon ">
            <img
              src={linkedinSvg}
              alt="github svg"
              className="w-1/2 h-1/2 cursor-pointer "
            />
          </div>
        </a>
      </div>
      <p className="text-white-500">
        &copy; {new Date().getFullYear()} Vincent Anjiri. All rights reserved
      </p>
    </section>
  );
}

export default Footer;
