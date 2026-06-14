import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface Example3Props extends HybridViewProps {
  color: string;
}
export interface Example3Methods extends HybridViewMethods {}
// prettier-ignore
export type Example3 = HybridView<
  Example3Props,
  Example3Methods
>;
