import { Button, Text } from "@ui-kitten/components";
import { useUser } from "../contexts/UserContext";

export const LoginScreen: React.FC = () => {
  const { setUser } = useUser();

  return <Button onPress={() => setUser({ name: "Hi" })}>Login</Button>;
};
