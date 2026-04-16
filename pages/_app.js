import Layout from "../components/Layout";

import '../styles/screen.css'
import '../styles/screen-fixings.css'
import '../styles/dark-mode.css'
import '../styles/prism.css'
import '../styles/toc.css'
import '../styles/global.css'
import YandexMetrika from "../components/YandexMetrika";

function MyApp({ Component, pageProps }) {
    const YOUR_YM_ID = "90904465";
  return (
    <Layout>
        <YandexMetrika
            yid={YOUR_YM_ID}
            clickmap={true}
            trackLinks={true}
            accurateTrackBounce={true}
            webvisor={false}
        />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
