import PropTypes from "prop-types";

const isLocalHost = (hostname) =>
  !!(
    hostname === "localhost" ||
    hostname === "[::1]" ||
    hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );

const tryGetSubdomain = (subdomain, url) => {
  formattedSubdomain = "";
  if (subdomain && url.indexOf(`http://${subdomain}.`) === -1) {
    formattedSubdomain = `${subdomain}.`;
  }
  return formattedSubdomain;
};

const HttpsRedirect = ({ disabled, subdomain, children }) => {
  if (
    !disabled &&
    typeof window !== "undefined" &&
    window.location &&
    window.location.protocol === "http:" &&
    !isLocalHost(window.location.hostname)
  ) {
    const url = tryGetSubdomain(subdomain, window.location.href);

    window.location.href = url.replace(
      /^http(?!s):\/\//,
      `https://${subdomain}`
    );
    return null;
  }

  return children;
};

HttpsRedirect.propTypes = {
  children: PropTypes.node,
  subdomain: PropTypes.string,
  disabled: PropTypes.bool,
};

export default HttpsRedirect;
