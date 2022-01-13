import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import "../styles/globals.css";
import en from "../translations/en.json";
import vi from "../translations/vn.json";

const messages = {
  "en-US": en,
  "vi-VN": vi,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
