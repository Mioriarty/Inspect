import React, { ReactElement } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { Icon } from "../components/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../contexts/UserContext";

export const LoginScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [acronym, setAcronym] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const { setUser } = useUser();

  const onSignInButtonPress = (): void => {
    setUser("Secret");
  };

  const onForgotPasswordButtonPress = (): void => {};

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (props): ReactElement => (
    <Pressable onPress={onPasswordIconPress}>
      <Icon
        {...props}
        name={passwordVisible ? "eye-off-outline" : "eye-outline"}
      />
    </Pressable>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView bounces={false}>
        <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
          <Text category="h1" status="control">
            Willkommen
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Bitte melden Sie sich mit ihrem Kürzel an.
          </Text>
        </View>
        <Layout style={styles.formContainer} level="1">
          <Input
            placeholder="Kürzel"
            value={acronym}
            onChangeText={setAcronym}
            accessoryRight={(props) => (
              <Icon name="person-outline" {...props} />
            )}
          />
          <Input
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            accessoryRight={renderPasswordIcon}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              status="control"
              onPress={onForgotPasswordButtonPress}
            >
              Sie kennen Ihr Kürzel nicht?
            </Button>
          </View>
          <Button
            style={styles.signInButton}
            size="giant"
            onPress={onSignInButtonPress}
          >
            Anmelden
          </Button>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    marginTop: 25,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signInContainer: {
    paddingVertical: 16,
  },
});
