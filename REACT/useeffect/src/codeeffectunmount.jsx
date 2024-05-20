import { useState, useEffect } from "react";

import React from "react";

export const MiniCodeEffectUnmount = () => {
    const [visible, setVisible] = React.useState(false);
  
    return (
      <>
        {visible && <MessageComponent />}
        <button onClick={() => setVisible(!visible)}>I'm inevitable</button>
      </>
    );
  };