import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    // Ensure Google Ads are reloaded
    if (window.adsbygoogle && window.adsbygoogle.length > 0) {
      window.adsbygoogle = [];
    }
    window.adsbygoogle.push({});
  }, []);

  return (
    <div className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6290745948063654"
      data-ad-slot="8745090066"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </div>
  );
};

export default GoogleAd;
