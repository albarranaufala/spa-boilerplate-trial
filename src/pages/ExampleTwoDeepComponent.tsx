import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InteractiveLink } from '../ui/InteractiveLink';

interface LiProps {
  children: React.ReactText;
}
const Li: React.VFC<LiProps> = ({ children }) => (
  <li>
    <span style={{ paddingRight: '7px' }}>&ndash;</span>
    {children}
  </li>
);

export const ExampleTwoDeepComponent: React.VFC<RouteComponentProps> = ({
  location,
}) => {
  const queryPresent = location.search !== '';
  const hashPresent = location.hash !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function hashFragmentTitle() {
    if (hashPresent) return 'The hash fragment is:';
    return 'No hash fragment in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) return null;

    const queryString = queryPresent
      ? location.search
      : '?field1=foo&field2=bar';
    const hashFragment = hashPresent ? location.hash : '#boom!';

    let linkText = '';
    if (queryPresent && !hashPresent) linkText = 'Show with hash fragment';
    if (!queryPresent && hashPresent) linkText = 'Show with query string';
    if (!queryPresent && !hashPresent)
      linkText = 'Show with query string and hash fragment';

    return (
      <InteractiveLink to={`/example/two-deep${queryString}${hashFragment}`}>
        {linkText}
      </InteractiveLink>
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search
      .replace('?', '')
      .split('&')
      .map((fvPair) => fvPair.split('='))
      .map((pair) => [pair[0], pair.slice(1).join('=')]);
  }

  return (
    <div>
      <p>
        This is an example page with query string and hash fragment. Refresh the
        page or copy/paste the url to test out the redirect functionality (this
        same page should load after the redirect).
      </p>
      <div>{queryStringTitle()}</div>
      <ul>
        {parseQueryString().map((pair, index) => (
          <Li
            key={`${pair[0]}${pair[1]}${index}`}
          >{`${pair[0]}: ${pair[1]}`}</Li>
        ))}
      </ul>
      <div>{hashFragmentTitle()}</div>
      <ul>{hashPresent && <Li>{location.hash.slice(1)}</Li>}</ul>
      {linkToShowQueryAndOrHash()}
    </div>
  );
};
