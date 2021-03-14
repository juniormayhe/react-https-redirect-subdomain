# React-https-redirect-subdomain

[![npm](https://img.shields.io/npm/v/react-https-redirect-subdomain.svg)](https://www.npmjs.com/package/react-https-redirect-subdomain)
[![npm](https://img.shields.io/npm/l/react-https-redirect-subdomain.svg)](https://github.com/juniormayhe/react-https-redirect-subdomain/blob/master/LICENSE.md)

---

**⚠️ Security note ⚠️ - This element provides a client-side option when HSTS and server-enforced redirects aren't possible. Please don’t use this if you can configure the server.**
---

---

This is a React component equivalent of Polymer [platinum-https-redirect](https://elements.polymer-project.org/elements/platinum-https-redirect)

The element redirects the current page to HTTPS, unless the page is loaded from a web server running on localhost.

Using HTTP Strict Transport Security (HSTS) can be used to enforce HTTPS for an entire origin, following the first visit to any page on the origin. 

Configuring the underlying web server to redirect all HTTP requests to their HTTPS equivalents takes care of enforcing HTTPS on the initial visit as well. 

Both options provide a more robust approach to enforcing HTTPS, but require access to the underlying web server's configuration in order to implement.

This element provides a client-side option when HSTS and server-enforced redirects aren't possible, such as when deploying code on a shared-hosting provider like GitHub Pages.

## Installation

Using [npm](https://www.npmjs.com/package/react-https-redirect-subdomain):

```bash
npm install --save react-https-redirect-subdomain
```

## Usage

Supposing a CommonJS environment, you can just wrap your entire app to redirect it to the equivalent https version:

```javascript
import HttpsRedirect from 'react-https-redirect-subdomain';

// 
class HttpsApp extends React.Component {

  render() {
    return (      
      // http://example.com/    =>    https://example.com/
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    );
  }
}
```

Optionally to add www subdomain, in case it is missing, enter the desired `subdomain` argument
```javascript
import HttpsRedirect from 'react-https-redirect-subdomain';

class HttpsApp extends React.Component {

  render() {
    return (
      // http://example.com/    =>    https://www.example.com/
      <HttpsRedirect subdomain="www">
        <App />
      </HttpsRedirect>
    );
  }
}
```

// you can also use a `disabled` prop to dinamically disable it
```javascript
import HttpsRedirect from 'react-https-redirect-subdomain';

class HttpsApp extends React.Component {

  render() {
    return (
      // http://example.com/    =>    http://example.com/
      <HttpsRedirect disabled={...}>
        <App />
      </HttpsRedirect>
    );
  }
}
```

## Author
**Junior Mayhe**
- [github/juniormayhe](https://github.com/juniormayhe)
- [@JuniorMayhe](https://twitter.com/JuniorMayhe)

Forked from https://github.com/mbasso/react-https-redirect/

## Copyright and License
Copyright (c) 2021, Junior Mayhe.

React-https-redirect-subdomain source code is licensed under the [MIT License](https://github.com/juniormayhe/react-https-redirect-subdomain/blob/master/LICENSE.md).
