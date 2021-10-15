import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';

export const ExampleComponent: React.VFC = () => (
  <div>
    <p>
      This is an example page. Refresh the page or copy/paste the url to test
      out the redirect functionality (this same page should load after the
      redirect).
    </p>
    <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">
      Example two deep with query and hash
    </InteractiveLink>
  </div>
);
