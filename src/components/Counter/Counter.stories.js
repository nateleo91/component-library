import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter.js';


storiesOf("Counter", module)
.add('Counter', () => (
    <Counter max={Infinity} min={1} value={0} step={1} type="counter" />
))

