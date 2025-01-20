import {Federated} from '@callstack/repack/client';
import React from 'react';

function FederatedApp() {
  const f = Federated.importModule('federated', `./App`);

  const FederatedModule = React.lazy(() => f);

  return (
    <React.Suspense>
      <FederatedModule />
    </React.Suspense>
  );
}

export default FederatedApp;
