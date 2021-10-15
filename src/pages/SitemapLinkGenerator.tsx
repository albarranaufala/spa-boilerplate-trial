import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';

export const SitemapLinkGenerator: React.VFC = () => {
  const [url, setUrl] = React.useState('');
  const [segments, setSegments] = React.useState('0');
  let sitemapLink;

  try {
    const l = new URL(url);
    const pathSegmentsToKeep = parseInt(segments);

    // redirect script from 404.html
    sitemapLink =
      l.protocol +
      '//' +
      l.hostname +
      (l.port ? ':' + l.port : '') +
      l.pathname
        .split('/')
        .slice(0, 1 + pathSegmentsToKeep)
        .join('/') +
      '/?/' +
      l.pathname
        .slice(1)
        .split('/')
        .slice(pathSegmentsToKeep)
        .join('/')
        .replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash;
  } catch {}

  return (
    <div>
      <p>
        Use this to generate sitemap links for your site. Search engines
        don&apos;t like 404s so you need to create a sitemap with the redirect
        path for each page instead of the normal path. For more info see the{' '}
        <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#seo">
          readme
        </InteractiveLink>
        .
      </p>
      <p>
        <label>
          <span style={{ marginRight: '10px' }}>
            <code>pathSegmentsToKeep</code> (set in <code>404.html</code>):
          </span>
          <input
            type="number"
            min="0"
            step="1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSegments(e.target.value)
            }
            value={segments}
          />
        </label>
      </p>
      <p>
        <label>
          Page URL:
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            value={url}
          />
        </label>
      </p>
      <p>
        <span style={{ display: 'block' }}>
          Redirect link to use in your sitemap:
        </span>
        <span>{sitemapLink || 'Please enter a valid URL'}</span>
      </p>
    </div>
  );
};
