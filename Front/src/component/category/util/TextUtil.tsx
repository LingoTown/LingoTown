import { Text } from "@react-three/drei";

export const TextUtil: React.FC<{
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  name: string;
}> = ({
  x, y, z, size, color, name
}) => {
  return (
    <Text
      font="../font/PasseroOne-Regular.ttf"
      fontSize={size}
      color={color}
      position={[x, y, z]}
    >
      {name}
    </Text>
  );
}