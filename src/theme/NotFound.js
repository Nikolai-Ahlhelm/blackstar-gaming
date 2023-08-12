import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                🔍🤨
              </h1>
              <h1 className="hero__title">
                Seite nicht gefunden...
              </h1>
              <p>
                Diese Seite scheint nicht zu existieren.
              </p>
              <p>
                Wenn du denkst, dass hier ein Fehler vorliegt, dann wende dich an die Communityleitung oder den Support.  <br></br><br></br>
                Du kannst dich über <a href="http://discord.blackstar-gaming.de">Discord</a> oder per Mail an uns wenden: <a href="mailto:mail@blackstar-gaming.de">mail@blackstar-gaming.de</a>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
