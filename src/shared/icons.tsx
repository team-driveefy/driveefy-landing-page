import { FC } from "react";

interface IIcons {
  className: string;
  fillClassName?: string;
}
export const CompanyIcon: FC<IIcons> = ({
  className = "",
  fillClassName = "fill-primary",
}) => {
  return (
    <svg viewBox="0 0 214 54" fill="none" className={className}>
      <g clipPath="url(#clip0_1_6)">
        <path
          d="M156.456 43.1867C148.539 43.61 140.624 43.8333 132.707 43.9833C124.789 44.1467 116.875 44.19 108.957 44.21C101.039 44.1933 93.1249 44.15 85.2072 43.9867C77.2896 43.8367 69.3752 43.6133 61.4576 43.1867C69.3752 42.76 77.2896 42.5367 85.2072 42.3867C93.1249 42.2233 101.039 42.18 108.957 42.1633C116.875 42.1833 124.789 42.2267 132.707 42.39C140.624 42.54 148.539 42.7633 156.456 43.1867Z"
          className={fillClassName}
        />
        <path
          d="M0.0997925 52.2496C29.6238 51.163 59.1479 50.7563 88.6752 50.6263C103.439 50.553 118.199 50.5863 132.963 50.6597C147.727 50.7763 162.487 50.9297 177.251 51.2363L176.239 52.2496C176.219 49.8863 177.187 47.4297 178.895 45.763C180.572 44.053 182.975 43.1363 185.311 43.2097C187.654 43.2597 189.928 44.313 191.462 46.0197C193.023 47.703 193.805 50.0297 193.682 52.2463L193.372 51.9363L201.606 52.2463L193.372 52.5563L193.063 52.5697V52.2463C193.049 50.1463 192.204 48.1297 190.74 46.7197C189.295 45.2963 187.285 44.5263 185.311 44.603C183.331 44.653 181.447 45.5596 180.149 46.9797C178.831 48.4096 178.169 50.293 178.262 52.2496L178.309 53.2396L177.251 53.263C162.487 53.5697 147.727 53.723 132.963 53.8397C118.199 53.913 103.439 53.9463 88.6752 53.873C59.1512 53.7397 29.6271 53.3363 0.0997925 52.2496Z"
          className={fillClassName}
        />
        <path
          d="M213.7 43.373C213.354 41.3397 212.522 39.3763 211.304 37.6797C210.882 37.073 210.386 36.5197 209.863 35.993V35.9063L209.78 35.913C207.344 33.5097 203.969 32.0164 200.471 31.8898L192.394 31.6231L192.271 29.0864L192.161 26.8564C192.137 26.4564 192.137 26.1764 192.094 25.6798C192.064 25.2098 191.958 24.7498 191.818 24.3031C191.245 22.5164 189.821 21.0797 188.114 20.4997C187.295 20.1931 186.27 20.1364 185.554 20.1964L183.328 20.2997L165.526 21.1297L183.328 21.9597L185.554 22.0631C186.316 22.0831 186.796 22.1798 187.362 22.4331C188.303 22.8598 189.026 23.6931 189.335 24.6264H170.102V34.5263L176.292 34.4497L200.468 33.6597C203.154 33.583 205.889 34.4297 208.126 36.0263L197.329 36.7497L209.866 37.5897V37.543C210.096 37.783 210.329 38.0197 210.535 38.2797C210.868 38.683 211.171 39.113 211.451 39.553L199.416 40.333L212.313 41.1663C212.652 41.913 212.942 42.6897 213.135 43.493C213.571 45.413 213.514 47.4597 213.684 49.473C213.77 47.463 214.067 45.4363 213.704 43.3763L213.7 43.373Z"
          className={fillClassName}
        />
        <path
          d="M181.63 10.1367C180.702 9.23674 179.554 8.55338 178.302 8.13338C177.051 7.68671 175.656 7.64338 174.478 7.58004L160.72 6.79671C160.49 4.62338 160.187 2.45004 159.741 0.276703C159.046 3.65671 158.679 7.03671 158.433 10.4167C158.19 13.7967 158.057 17.1767 158.067 20.5534C158.067 23.9334 158.194 27.3134 158.44 30.6934C158.686 34.0733 159.049 37.4533 159.741 40.8333C160.433 37.4533 160.796 34.0733 161.042 30.6934C161.289 27.3134 161.419 23.9334 161.415 20.5534C161.422 18.1701 161.355 15.7867 161.229 13.4034L169.32 12.6967L161.146 11.98C161.112 11.4567 161.082 10.9367 161.046 10.4134C161.036 10.2834 161.023 10.1534 161.013 10.0201L174.478 9.25338C175.746 9.18004 176.845 9.08671 177.966 9.34004C179.078 9.57671 180.163 10.0567 181.091 10.7701C182.962 12.1767 184.233 14.47 184.363 16.9434C184.516 14.48 183.511 11.9134 181.634 10.1334L181.63 10.1367Z"
          className={fillClassName}
        />
        <path
          d="M2.16327 38.017L5.48809 21.957H17.952C19.1035 21.957 20.1053 22.0637 20.9507 22.2704C21.796 22.4804 22.4949 22.797 23.0507 23.2137C24.189 24.067 24.7581 25.417 24.7581 27.2637C24.7581 28.1337 24.6682 29.0137 24.4885 29.907C24.3088 30.8004 24.0392 31.6937 23.6798 32.5937C22.212 36.207 19.24 38.0137 14.7636 38.0137H2.16327V38.017ZM13.0563 33.967C14.7337 33.967 15.9718 33.457 16.7738 32.4371C17.5759 31.4171 17.982 30.1804 17.9986 28.7271C17.9986 26.9137 16.907 26.0037 14.7204 26.0037H10.9928L9.3321 33.967H13.0596H13.0563Z"
          className={fillClassName}
        />
        <path
          d="M37.8477 38.017C37.8011 37.9137 37.7811 37.7703 37.7811 37.5903C37.7811 37.4103 37.8044 37.1637 37.8477 36.847L38.1173 35.0037C38.1639 34.7203 38.1838 34.517 38.1838 34.397C38.1838 33.9337 38.0707 33.5937 37.8477 33.3837C37.6214 33.1736 37.3152 33.0703 36.9258 33.0703H32.3895L31.3778 38.0203H25.0443L28.3691 21.9603H42.0911C43.9915 21.9603 45.2628 22.2869 45.8985 22.9403C46.5342 23.5936 46.8537 24.4436 46.8537 25.4936C46.837 26.5736 46.5175 27.5603 45.8885 28.4503C45.2595 29.3436 44.474 29.8936 43.5289 30.1036L43.5056 30.1503C44.3875 30.4369 44.8302 31.0936 44.8302 32.1303C44.8302 32.2803 44.8069 32.5436 44.7636 32.917L44.4275 35.5937C44.3809 36.1203 44.3609 36.517 44.3609 36.787C44.3609 37.027 44.4108 37.2703 44.5073 37.517C44.6038 37.7637 44.6904 37.9337 44.7669 38.0237H37.851L37.8477 38.017ZM33.8739 26.007L33.2449 29.0203H37.8477C38.5366 29.0203 39.0425 28.8403 39.362 28.4803C39.6848 28.1203 39.8446 27.6469 39.8446 27.0636C39.8446 26.6736 39.7081 26.4003 39.4419 26.2436C39.1723 26.0869 38.8129 26.007 38.3636 26.007H33.8706H33.8739Z"
          className={fillClassName}
        />
        <path
          d="M46.7206 38.017L50.0454 21.957H56.3789L53.054 38.017H46.7206Z"
          className={fillClassName}
        />
        <path
          d="M60.9118 38.017L57.0478 21.957H64.0103L65.4014 32.2604H65.448L71.1092 21.957H78.0717L67.5614 38.017H60.9151H60.9118Z"
          className={fillClassName}
        />
        <path
          d="M75.3526 38.017L78.6774 21.957H95.7242L94.9155 25.8704H84.2021L83.7528 28.0304H93.7007L92.8919 31.9437H82.9441L82.4948 34.1037H93.2081L92.3994 38.017H75.3526Z"
          className={fillClassName}
        />
        <path
          d="M94.4895 38.017L97.8143 21.957H114.861L114.052 25.8704H103.339L102.89 28.0304H112.838L112.029 31.9437H102.081L101.632 34.1037H112.345L111.536 38.017H94.4895Z"
          className={fillClassName}
        />
        <path
          d="M121.145 32.237L119.953 38.017H113.62L116.945 21.957H133.183L132.374 25.8704H122.469L121.953 28.3237H131.072L130.264 32.237H121.145Z"
          className={fillClassName}
        />
        <path
          d="M138.218 38.017L139.14 33.497L134.424 21.957H141.656L143.407 28.2537L147.763 21.957H154.995L145.473 33.497L144.552 38.017H138.218Z"
          className={fillClassName}
        />
        <path
          d="M54.6915 17.7604H51.7694C51.7594 17.7104 51.7461 17.6704 51.7461 17.6271C51.7461 16.8838 51.7461 16.1437 51.7461 15.4004C51.7461 15.2637 51.7993 15.2304 51.9258 15.2238C52.4084 15.2071 52.4084 15.2037 52.4184 15.6904C52.425 16.0171 52.5848 16.1837 52.9143 16.1937C53.1173 16.2004 53.3203 16.2004 53.5233 16.1937C53.8595 16.1837 54.0226 16.0138 54.0325 15.6738C54.0359 15.5371 54.0325 15.4004 54.0325 15.2271C54.2256 15.2271 54.402 15.2171 54.5784 15.2337C54.6183 15.2371 54.6849 15.3238 54.6849 15.3738C54.6915 16.1604 54.6882 16.9438 54.6882 17.7571L54.6915 17.7604Z"
          className={fillClassName}
        />
        <path
          d="M55.7232 18.2337H56.3755V20.7371H53.4534V18.2337H54.1091C54.1091 18.4004 54.1024 18.5604 54.1091 18.7171C54.1224 19.0204 54.2855 19.1804 54.5917 19.1838C54.808 19.1838 55.0276 19.1871 55.244 19.1838C55.5269 19.1771 55.6933 19.0304 55.7166 18.7471C55.7299 18.5804 55.7166 18.4137 55.7166 18.2337H55.7232Z"
          className={fillClassName}
        />
        <path
          d="M52.9842 18.2305V20.7371H50.072V18.2305H50.721C50.721 18.3805 50.721 18.5272 50.721 18.6772C50.7243 19.0105 50.8874 19.1738 51.2136 19.1805C51.4233 19.1805 51.6363 19.1805 51.8459 19.1805C52.1521 19.1772 52.3285 19.0038 52.3385 18.6938C52.3451 18.5438 52.3385 18.3905 52.3385 18.2305H52.9842Z"
          className={fillClassName}
        />
        <path
          d="M51.1769 18.2272H51.8725V18.7205H51.1769V18.2272Z"
          className={fillClassName}
        />
        <path
          d="M54.5783 18.2305H55.2572V18.7238H54.5783V18.2305Z"
          className={fillClassName}
        />
        <path
          d="M52.8776 15.2435H53.5632V15.7301H52.8776V15.2435Z"
          className={fillClassName}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect width="214" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};