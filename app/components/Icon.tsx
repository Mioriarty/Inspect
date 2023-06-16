import { IconProps, Icon as KittenIcon } from "@ui-kitten/components";

export const Icon: React.FC<IconProps> = (props) => {
  if (props.style != undefined && props.style.tintColor != undefined) {
    const style = { ...props.style, tintColor: undefined };
    return <KittenIcon {...props} style={style} fill={props.style.tintColor} />;
  } else {
    return <KittenIcon {...props} />;
  }
};
