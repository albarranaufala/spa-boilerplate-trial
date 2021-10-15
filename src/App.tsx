import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { globalCss } from './stitches.config';
import { Home } from './pages/Home';
import { ExampleComponent } from './pages/ExampleComponent';
import { ExampleTwoDeepComponent } from './pages/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './pages/SitemapLinkGenerator';
import { PageNotFound } from './pages/PageNotFound';
import { Breadcrumbs } from './components/Breadcrumbs';

export const App: React.VFC = () => {
  globalCss();

  return (
    <div>
      <header>
        <h1>Single Page Apps for GitHub Pages</h1>
      </header>
      <Breadcrumbs />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/example" component={ExampleComponent} />
        <Route
          exact
          path="/example/two-deep"
          component={ExampleTwoDeepComponent}
        />
        <Route
          exact
          path="/sitemap-link-generator"
          component={SitemapLinkGenerator}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
