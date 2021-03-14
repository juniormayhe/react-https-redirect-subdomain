import PropTypes from 'prop-types';

const isLocalHost = (hostname) =>
  !!(
    hostname === 'localhost' ||
    hostname === '[::1]' ||
    hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );

const tryGetSubdomain = (subdomain, url) => {
  let formattedSubdomain = '';
  if (
    subdomain &&
    url.indexOf(`http://${subdomain}.`) === -1 &&
    url.indexOf(`https://${subdomain}.`) === -1
  ) {
    formattedSubdomain = `${subdomain}.`;
  }
  return formattedSubdomain;
};

const HttpsRedirect = ({ debug, disabled, subdomain, children }) => {
  if (debug) {
    const settings = {
      debug,
      disabled,
      subdomain,
      children,
      windowLocationHref: window.location.href,
    };

    window.console.log(
      'react-https-redirect-subdomain [starting]',
      settings
    );
  }
  const canRedirect = !disabled &&
    typeof window !== 'undefined' &&
    window.location &&
    // window.location.protocol === 'http:' &&
    !isLocalHost(window.location.hostname);

  if (canRedirect) {
    if (debug) {
      window.console.log(
        'react-https-redirect-subdomain [window.location.href]',
        window.location.href
      );
    }

    const url = tryGetSubdomain(subdomain, window.location.href);

    if (debug) {
      window.console.log(
        'react-https-redirect-subdomain [url (with subdomain if any)]',
        window.location.href
      );
    }

    const finalUrl = url.replace(/^(http|https):\/\//, `https://${subdomain}.`);

    if (debug) {
      window.console.log(
        'react-https-redirect-subdomain [redirecting to]',
        finalUrl
      );
    }
    window.location.href = finalUrl;
  } else {
    if (debug) {
      window.console.log(
        'react-https-redirect-subdomain [cannot process or localhost]'
      );
    }
  }
  if (canRedirect) {
    return null;
  }
  return children;
};

HttpsRedirect.propTypes = {
  children: PropTypes.node,
  subdomain: PropTypes.string,
  disabled: PropTypes.bool,
  debug: PropTypes.bool,
};

export default HttpsRedirect;
