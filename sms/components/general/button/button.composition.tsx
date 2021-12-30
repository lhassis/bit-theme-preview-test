import React from 'react';
import { Button } from './button';

export const Types = () => (
  <div>
    <div><Button title={"Primary Button"} type="primary" /></div>
    <br />
    <div><Button title={"Default Button"} /></div>
    <br />
    <div><Button title={"Dashed Button"} type="dashed" /></div>
    <br />
    <div><Button title={"Link Button"} type="link" /></div>
    <br />
    <div><Button title={"Text Button"} type="text" /></div>
  </div>
);

export const GhostButton = () => (
  <div style={{ background: 'gray' }}>
    <Button title={"Ghost Button"} ghost />
  </div>
);

export const Sizes = () => (
  <div>
    <div><Button title={"Small Button"} size="small" /></div>
    <br />
    <div><Button title={"Middle Button"} size="middle" /></div>
    <br />
    <div><Button title={"Large Button"} size="large" /></div>
  </div>
);

export const DisabledButton = () => (
  <Button title={"Disabled Button"} disabled />
);

export const DangerButton = () => (
  <Button title={"Danger Button"} danger />
);

export const BlockButton = () => (
  <Button title={"Block Button"} block />
);

export const LoadingButton = () => (
  <Button title={"Loading Button"} loading />
);

