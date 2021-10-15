import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <p>
      This is an example single page app built with React and React&nbsp;Router
      using <code>BrowserRouter</code>. Navigate with the links below and
      refresh the page or copy/paste the url to test out the redirect
      functionality deployed to overcome GitHub&nbsp;Pages incompatibility with
      single page apps (like this one).
    </p>
    <p>
      Please see the <RepoReadmeLink /> for instructions on how to use this
      boilerplate to deploy your own single page app using GitHub Pages.
    </p>
    <p>
      <InteractiveLink to="/example">Example page</InteractiveLink>
      <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">
        Example two deep with query and hash
      </InteractiveLink>
    </p>
    <p>
      <InteractiveLink to="/sitemap-link-generator">
        Sitemap Link Generator
      </InteractiveLink>
    </p>
  </div>
);
