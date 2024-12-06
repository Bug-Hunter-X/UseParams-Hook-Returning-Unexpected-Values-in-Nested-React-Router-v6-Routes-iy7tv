The solution involves using the `useEffect` hook to handle the asynchronous nature of route parameter resolution.  The `useEffect` hook ensures that the component's state is updated only after the `params` from `useParams` are available.

```javascript
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    setItemId(id);
  }, [id]);

  if (itemId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Item ID: {itemId}</h1>
    </div>
  );
}

export default MyComponent;
```