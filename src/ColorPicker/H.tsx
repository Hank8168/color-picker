import { FC } from 'react';
import { Palette } from './Palette';
import { hsl } from './util';
import _ from 'lodash';

export const H: FC = () => {
    return <Palette colors={_.range(360).map(h => hsl(h, 100, 50))} />
}