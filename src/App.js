import React from 'react';

import Form from './Form';

const linkData = {
  name: 'Ваше имя, не менее трех символов',
  email: 'email',
  size: 'Размер Ваших часов',
  sity: 'Город',
  time: 'Дата и время',
};

function App() {

  return (
    <>
      <Form linkData={linkData} />
    </>
  );
}

export default App;