import { requireNativeComponent, ViewStyle } from 'react-native';

type MadImageProps = {
  color: string;
  style: ViewStyle;
};


export const MadImageViewManager = requireNativeComponent<MadImageProps>(
  'MadImageView'
);

export default MadImageViewManager;
