import * as React from 'react';
import { useRouter } from 'next/router';

function Page(): React.ReactNode {
  const uuid = useRouter().query.uuid;
  return (
    <div>{uuid}</div>
  )
}

export default Page;
