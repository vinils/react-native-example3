import { getHostComponent } from 'react-native-nitro-modules';
const Example3Config = require('../nitrogen/generated/shared/json/Example3Config.json');
// prettier-ignore
import type {
  Example3Methods,
  Example3Props,
} from './Example3.nitro';
// prettier-ignore
export const Example3View = getHostComponent<
  Example3Props,
  Example3Methods
>('Example3', () => Example3Config);
