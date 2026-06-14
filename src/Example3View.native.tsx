import { getHostComponent } from 'react-native-nitro-modules';
const Example3Config = require('../nitrogen/generated/shared/json/Example3Config.json');
import type {
  Example3Methods,
  Example3Props,
} from './Example3.nitro';

export const Example3View = getHostComponent<
  Example3Props,
  Example3Methods
>('Example3', () => Example3Config);
