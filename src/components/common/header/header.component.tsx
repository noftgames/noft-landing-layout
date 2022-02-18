import { useAdaptive } from "@/hooks";
import { Link } from "react-router-dom";
import { LogoComponent } from "../logo";
import { BannerComponent } from "/components/noft/components/banner/banner.component";
import s from "./header.module.scss";
import clsx from "clsx";

export function HeaderComponent() {
  const isMobile = useAdaptive("640px");

  const Desktop = (
    <header className={s.header}>
      <div className={clsx(s.headerBlock, s.container)}>
        <LogoComponent />
        <nav className={s.headerNav}>
          <Link to="//noftgames.io/marketplace" className={s.headerNavElement}>
            Marketplace
          </Link>
          <Link to="//noftgames.io/battles" className={s.headerNavElement}>
            Battles
          </Link>
          <Link to="//noftgames.io/game" className={s.headerNavElement}>
            Game
          </Link>
          <Link to="//noftgames.io/how-it-works" className={s.headerNavElement}>
            HIW
          </Link>
          <Link to="//noftgames.io/about" className={s.headerNavElement}>
            About
          </Link>
          <Link to="//noftgames.io/faq" className={s.headerNavElement}>
            FAQ
          </Link>
        </nav>

        <div className={s.headerControls}>
          <Link to="#" className={clsx(s.headerControlsElementLogin, s.btn)}>
            LOG IN
          </Link>
          <Link to="#" className={clsx(s.headerControlsElementDemo, s.btn)}>
            PLAY DEMO GAME
          </Link>
        </div>

        <div className={s.headerSocial}>
          <Link to="#" className={clsx(s.headerSocialElementTw)}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="white" />
              <path
                d="M29.3333 15.0048C28.6959 15.2872 28.0112 15.4781 27.2913 15.5643C28.0341 15.1199 28.5898 14.4204 28.8547 13.5963C28.1568 14.0108 27.3931 14.3026 26.5966 14.459C26.061 13.8871 25.3516 13.508 24.5785 13.3807C23.8054 13.2533 23.0118 13.3847 22.3211 13.7545C21.6303 14.1244 21.081 14.7119 20.7584 15.4259C20.4358 16.14 20.3579 16.9405 20.5369 17.7033C19.1229 17.6323 17.7396 17.2648 16.4768 16.6246C15.214 15.9844 14.0999 15.0858 13.2069 13.9872C12.9016 14.5139 12.726 15.1246 12.726 15.775C12.7256 16.3605 12.8698 16.9371 13.1457 17.4535C13.4217 17.9699 13.8208 18.4102 14.3077 18.7354C13.743 18.7174 13.1908 18.5649 12.697 18.2904V18.3362C12.6969 19.1574 12.981 19.9533 13.5009 20.5889C14.0209 21.2245 14.7448 21.6606 15.5497 21.8233C15.0259 21.9651 14.4767 21.9859 13.9436 21.8844C14.1707 22.591 14.6131 23.2088 15.2088 23.6515C15.8045 24.0942 16.5237 24.3395 17.2658 24.3531C16.0061 25.342 14.4504 25.8784 12.8489 25.8761C12.5652 25.8762 12.2817 25.8596 12 25.8265C13.6256 26.8717 15.5179 27.4264 17.4505 27.4242C23.9927 27.4242 27.5692 22.0057 27.5692 17.3064C27.5692 17.1537 27.5653 16.9995 27.5585 16.8468C28.2541 16.3437 28.8546 15.7207 29.3318 15.0071L29.3333 15.0048Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link to="#" className={clsx(s.headerSocialElementInst)}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7018 12.048C17.5549 12.0087 17.8269 12 20 12C22.1731 12 22.4451 12.0095 23.2975 12.048C24.1498 12.0865 24.7316 12.2225 25.2407 12.4196C25.7738 12.6211 26.2575 12.936 26.6575 13.3433C27.0647 13.7425 27.3789 14.2255 27.5796 14.7593C27.7775 15.2684 27.9127 15.8502 27.952 16.7011C27.9913 17.5556 28 17.8276 28 20C28 22.1731 27.9905 22.4451 27.952 23.2982C27.9135 24.1491 27.7775 24.7309 27.5796 25.24C27.3789 25.7739 27.0642 26.2576 26.6575 26.6575C26.2575 27.0647 25.7738 27.3789 25.2407 27.5796C24.7316 27.7775 24.1498 27.9127 23.2989 27.952C22.4451 27.9913 22.1731 28 20 28C17.8269 28 17.5549 27.9905 16.7018 27.952C15.8509 27.9135 15.2691 27.7775 14.76 27.5796C14.2261 27.3789 13.7424 27.0642 13.3425 26.6575C12.9355 26.2579 12.6206 25.7745 12.4196 25.2407C12.2225 24.7316 12.0873 24.1498 12.048 23.2989C12.0087 22.4444 12 22.1724 12 20C12 17.8269 12.0095 17.5549 12.048 16.7025C12.0865 15.8502 12.2225 15.2684 12.4196 14.7593C12.6209 14.2255 12.9361 13.742 13.3433 13.3425C13.7426 12.9356 14.2258 12.6207 14.7593 12.4196C15.2684 12.2225 15.8502 12.0873 16.7011 12.048H16.7018ZM23.2327 13.488C22.3891 13.4495 22.136 13.4415 20 13.4415C17.864 13.4415 17.6109 13.4495 16.7673 13.488C15.9869 13.5236 15.5636 13.6538 15.2815 13.7636C14.9084 13.9091 14.6415 14.0815 14.3615 14.3615C14.096 14.6197 13.8918 14.934 13.7636 15.2815C13.6538 15.5636 13.5236 15.9869 13.488 16.7673C13.4495 17.6109 13.4415 17.864 13.4415 20C13.4415 22.136 13.4495 22.3891 13.488 23.2327C13.5236 24.0131 13.6538 24.4364 13.7636 24.7185C13.8916 25.0655 14.096 25.3804 14.3615 25.6385C14.6196 25.904 14.9345 26.1084 15.2815 26.2364C15.5636 26.3462 15.9869 26.4764 16.7673 26.512C17.6109 26.5505 17.8633 26.5585 20 26.5585C22.1367 26.5585 22.3891 26.5505 23.2327 26.512C24.0131 26.4764 24.4364 26.3462 24.7185 26.2364C25.0916 26.0909 25.3585 25.9185 25.6385 25.6385C25.904 25.3804 26.1084 25.0655 26.2364 24.7185C26.3462 24.4364 26.4764 24.0131 26.512 23.2327C26.5505 22.3891 26.5585 22.136 26.5585 20C26.5585 17.864 26.5505 17.6109 26.512 16.7673C26.4764 15.9869 26.3462 15.5636 26.2364 15.2815C26.0909 14.9084 25.9185 14.6415 25.6385 14.3615C25.3803 14.0961 25.066 13.8918 24.7185 13.7636C24.4364 13.6538 24.0131 13.5236 23.2327 13.488ZM18.9782 22.4662C19.5488 22.7037 20.1843 22.7358 20.7759 22.5569C21.3676 22.378 21.8788 21.9992 22.2223 21.4853C22.5657 20.9713 22.72 20.3541 22.6589 19.739C22.5978 19.1239 22.3251 18.5491 21.8873 18.1127C21.6082 17.8338 21.2707 17.6202 20.8991 17.4874C20.5276 17.3545 20.1312 17.3057 19.7385 17.3444C19.3459 17.3832 18.9667 17.5085 18.6282 17.7114C18.2898 17.9142 18.0005 18.1896 17.7813 18.5177C17.5621 18.8458 17.4183 19.2184 17.3604 19.6087C17.3024 19.999 17.3317 20.3973 17.4462 20.7749C17.5607 21.1525 17.7574 21.5001 18.0223 21.7925C18.2872 22.085 18.6137 22.315 18.9782 22.4662ZM17.0924 17.0924C17.4742 16.7105 17.9275 16.4076 18.4264 16.201C18.9253 15.9943 19.46 15.888 20 15.888C20.54 15.888 21.0747 15.9943 21.5736 16.201C22.0725 16.4076 22.5258 16.7105 22.9076 17.0924C23.2895 17.4742 23.5924 17.9275 23.799 18.4264C24.0057 18.9253 24.112 19.46 24.112 20C24.112 20.54 24.0057 21.0747 23.799 21.5736C23.5924 22.0725 23.2895 22.5258 22.9076 22.9076C22.1365 23.6788 21.0906 24.112 20 24.112C18.9094 24.112 17.8635 23.6788 17.0924 22.9076C16.3212 22.1365 15.888 21.0906 15.888 20C15.888 18.9094 16.3212 17.8635 17.0924 17.0924ZM25.024 16.5004C25.1186 16.4111 25.1944 16.3038 25.2468 16.1847C25.2992 16.0656 25.3271 15.9373 25.329 15.8072C25.3309 15.6772 25.3067 15.548 25.2578 15.4275C25.2089 15.307 25.1363 15.1975 25.0443 15.1055C24.9524 15.0135 24.8429 14.9409 24.7223 14.892C24.6018 14.8431 24.4727 14.8189 24.3426 14.8208C24.2125 14.8227 24.0842 14.8507 23.9651 14.9031C23.846 14.9554 23.7387 15.0312 23.6495 15.1258C23.4759 15.3098 23.3808 15.5543 23.3845 15.8072C23.3882 16.0602 23.4903 16.3017 23.6692 16.4806C23.8481 16.6595 24.0896 16.7616 24.3426 16.7653C24.5955 16.769 24.84 16.674 25.024 16.5004Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );

  const Mobile = (
    <header className={s.header}>
      <div className={clsx(s.headerBlock, s.container)}>
        <LogoComponent />
        <div className={s.headerMenu}>
          <nav className={s.headerNav}>
            <Link to="//noftgames.io/marketplace" className={s.headerNavElement}>
              Marketplace
            </Link>
            <Link to="//noftgames.io/battles" className={s.headerNavElement}>
              Battles
            </Link>
            <Link to="//noftgames.io/game" className={s.headerNavElement}>
              Game
            </Link>
            <Link to="//noftgames.io/how-it-works" className={s.headerNavElement}>
              HIW
            </Link>
            <Link to="//noftgames.io/about" className={s.headerNavElement}>
              About
            </Link>
            <Link to="//noftgames.io/faq" className={s.headerNavElement}>
              FAQ
            </Link>
          </nav>

          <div className={s.headerControls}>
            <Link to="#" className={clsx(s.headerControlsElementLogin, s.btn)}>
              LOG IN
            </Link>
            <Link to="#" className={clsx(s.headerControlsElementDemo, s.btn)}>
              PLAY DEMO GAME
            </Link>
          </div>

          <div className={s.headerSocial}>
            <Link to="#" className={clsx(s.headerSocialElementTw)}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white" />
                <path
                  d="M29.3333 15.0048C28.6959 15.2872 28.0112 15.4781 27.2913 15.5643C28.0341 15.1199 28.5898 14.4204 28.8547 13.5963C28.1568 14.0108 27.3931 14.3026 26.5966 14.459C26.061 13.8871 25.3516 13.508 24.5785 13.3807C23.8054 13.2533 23.0118 13.3847 22.3211 13.7545C21.6303 14.1244 21.081 14.7119 20.7584 15.4259C20.4358 16.14 20.3579 16.9405 20.5369 17.7033C19.1229 17.6323 17.7396 17.2648 16.4768 16.6246C15.214 15.9844 14.0999 15.0858 13.2069 13.9872C12.9016 14.5139 12.726 15.1246 12.726 15.775C12.7256 16.3605 12.8698 16.9371 13.1457 17.4535C13.4217 17.9699 13.8208 18.4102 14.3077 18.7354C13.743 18.7174 13.1908 18.5649 12.697 18.2904V18.3362C12.6969 19.1574 12.981 19.9533 13.5009 20.5889C14.0209 21.2245 14.7448 21.6606 15.5497 21.8233C15.0259 21.9651 14.4767 21.9859 13.9436 21.8844C14.1707 22.591 14.6131 23.2088 15.2088 23.6515C15.8045 24.0942 16.5237 24.3395 17.2658 24.3531C16.0061 25.342 14.4504 25.8784 12.8489 25.8761C12.5652 25.8762 12.2817 25.8596 12 25.8265C13.6256 26.8717 15.5179 27.4264 17.4505 27.4242C23.9927 27.4242 27.5692 22.0057 27.5692 17.3064C27.5692 17.1537 27.5653 16.9995 27.5585 16.8468C28.2541 16.3437 28.8546 15.7207 29.3318 15.0071L29.3333 15.0048Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link to="#" className={clsx(s.headerSocialElementInst)}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7018 12.048C17.5549 12.0087 17.8269 12 20 12C22.1731 12 22.4451 12.0095 23.2975 12.048C24.1498 12.0865 24.7316 12.2225 25.2407 12.4196C25.7738 12.6211 26.2575 12.936 26.6575 13.3433C27.0647 13.7425 27.3789 14.2255 27.5796 14.7593C27.7775 15.2684 27.9127 15.8502 27.952 16.7011C27.9913 17.5556 28 17.8276 28 20C28 22.1731 27.9905 22.4451 27.952 23.2982C27.9135 24.1491 27.7775 24.7309 27.5796 25.24C27.3789 25.7739 27.0642 26.2576 26.6575 26.6575C26.2575 27.0647 25.7738 27.3789 25.2407 27.5796C24.7316 27.7775 24.1498 27.9127 23.2989 27.952C22.4451 27.9913 22.1731 28 20 28C17.8269 28 17.5549 27.9905 16.7018 27.952C15.8509 27.9135 15.2691 27.7775 14.76 27.5796C14.2261 27.3789 13.7424 27.0642 13.3425 26.6575C12.9355 26.2579 12.6206 25.7745 12.4196 25.2407C12.2225 24.7316 12.0873 24.1498 12.048 23.2989C12.0087 22.4444 12 22.1724 12 20C12 17.8269 12.0095 17.5549 12.048 16.7025C12.0865 15.8502 12.2225 15.2684 12.4196 14.7593C12.6209 14.2255 12.9361 13.742 13.3433 13.3425C13.7426 12.9356 14.2258 12.6207 14.7593 12.4196C15.2684 12.2225 15.8502 12.0873 16.7011 12.048H16.7018ZM23.2327 13.488C22.3891 13.4495 22.136 13.4415 20 13.4415C17.864 13.4415 17.6109 13.4495 16.7673 13.488C15.9869 13.5236 15.5636 13.6538 15.2815 13.7636C14.9084 13.9091 14.6415 14.0815 14.3615 14.3615C14.096 14.6197 13.8918 14.934 13.7636 15.2815C13.6538 15.5636 13.5236 15.9869 13.488 16.7673C13.4495 17.6109 13.4415 17.864 13.4415 20C13.4415 22.136 13.4495 22.3891 13.488 23.2327C13.5236 24.0131 13.6538 24.4364 13.7636 24.7185C13.8916 25.0655 14.096 25.3804 14.3615 25.6385C14.6196 25.904 14.9345 26.1084 15.2815 26.2364C15.5636 26.3462 15.9869 26.4764 16.7673 26.512C17.6109 26.5505 17.8633 26.5585 20 26.5585C22.1367 26.5585 22.3891 26.5505 23.2327 26.512C24.0131 26.4764 24.4364 26.3462 24.7185 26.2364C25.0916 26.0909 25.3585 25.9185 25.6385 25.6385C25.904 25.3804 26.1084 25.0655 26.2364 24.7185C26.3462 24.4364 26.4764 24.0131 26.512 23.2327C26.5505 22.3891 26.5585 22.136 26.5585 20C26.5585 17.864 26.5505 17.6109 26.512 16.7673C26.4764 15.9869 26.3462 15.5636 26.2364 15.2815C26.0909 14.9084 25.9185 14.6415 25.6385 14.3615C25.3803 14.0961 25.066 13.8918 24.7185 13.7636C24.4364 13.6538 24.0131 13.5236 23.2327 13.488ZM18.9782 22.4662C19.5488 22.7037 20.1843 22.7358 20.7759 22.5569C21.3676 22.378 21.8788 21.9992 22.2223 21.4853C22.5657 20.9713 22.72 20.3541 22.6589 19.739C22.5978 19.1239 22.3251 18.5491 21.8873 18.1127C21.6082 17.8338 21.2707 17.6202 20.8991 17.4874C20.5276 17.3545 20.1312 17.3057 19.7385 17.3444C19.3459 17.3832 18.9667 17.5085 18.6282 17.7114C18.2898 17.9142 18.0005 18.1896 17.7813 18.5177C17.5621 18.8458 17.4183 19.2184 17.3604 19.6087C17.3024 19.999 17.3317 20.3973 17.4462 20.7749C17.5607 21.1525 17.7574 21.5001 18.0223 21.7925C18.2872 22.085 18.6137 22.315 18.9782 22.4662ZM17.0924 17.0924C17.4742 16.7105 17.9275 16.4076 18.4264 16.201C18.9253 15.9943 19.46 15.888 20 15.888C20.54 15.888 21.0747 15.9943 21.5736 16.201C22.0725 16.4076 22.5258 16.7105 22.9076 17.0924C23.2895 17.4742 23.5924 17.9275 23.799 18.4264C24.0057 18.9253 24.112 19.46 24.112 20C24.112 20.54 24.0057 21.0747 23.799 21.5736C23.5924 22.0725 23.2895 22.5258 22.9076 22.9076C22.1365 23.6788 21.0906 24.112 20 24.112C18.9094 24.112 17.8635 23.6788 17.0924 22.9076C16.3212 22.1365 15.888 21.0906 15.888 20C15.888 18.9094 16.3212 17.8635 17.0924 17.0924ZM25.024 16.5004C25.1186 16.4111 25.1944 16.3038 25.2468 16.1847C25.2992 16.0656 25.3271 15.9373 25.329 15.8072C25.3309 15.6772 25.3067 15.548 25.2578 15.4275C25.2089 15.307 25.1363 15.1975 25.0443 15.1055C24.9524 15.0135 24.8429 14.9409 24.7223 14.892C24.6018 14.8431 24.4727 14.8189 24.3426 14.8208C24.2125 14.8227 24.0842 14.8507 23.9651 14.9031C23.846 14.9554 23.7387 15.0312 23.6495 15.1258C23.4759 15.3098 23.3808 15.5543 23.3845 15.8072C23.3882 16.0602 23.4903 16.3017 23.6692 16.4806C23.8481 16.6595 24.0896 16.7616 24.3426 16.7653C24.5955 16.769 24.84 16.674 25.024 16.5004Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={s.headerToggle}></div>
      </div>

      <div className={clsx(s.container)}>
        <BannerComponent />
      </div>
    </header>
  );

  return !isMobile ? Desktop : Mobile;
}
