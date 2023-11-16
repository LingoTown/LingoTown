import { Text } from "@react-three/drei";

type TextUtilProps = {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  name: string;
}

export const TextUtil: React.FC<TextUtilProps> = ({
  x, y, z, size, color, name
}) => {
  return (
    <Text
      font={`${import.meta.env.VITE_S3_URL}Font/gabia_solmee.ttf`}
      fontSize={size}
      color={color}
      position={[x, y, z]}
    >
      {name}
    </Text>
  );
}