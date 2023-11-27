import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LandingPage = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://i.pinimg.com/474x/2b/51/5d/2b515deacbba63e33644abf2481bb569.jpg' }}
      style={styles.image}
    />
    <Button
      title="Sign In"
      onPress={() => navigation.navigate('Login')}
      color="#3498db" 
    />
    <Button
      title="Create Account"
      onPress={() => navigation.navigate('Registration')}
      color="#3498db" 
    />
  </View>
);

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
      source={{ uri: 'https://i.pinimg.com/originals/5c/f1/11/5cf1113260d4f688a7d98015326dff59.jpg' }}
      style={styles.image}
    />
      <Text>Facedupe</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button
        title="Back to Home"
        onPress={() => navigation.goBack()}
        color="#3498db" 
      />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Registration')}
        color="#3498db"
      />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('AccountRecovery')}
        color="#3498db" 
      />
      <Button
        title="Login"
        onPress={handleLogin}
        color="#3498db" 
      />
    </View>
  );
};

const RegistrationPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // add registration logic here and navigate to the Home page if successful
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.input}
      />
      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
        color="#3498db" 
      />
      <Button
        title="Sign Up"
        onPress={handleRegister}
        color="#3498db" 
      />
    </View>
  );
};

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // account recovery logic here
    console.log('Recovering account for email:', email);
    // add recovery logic here and display a confirmation message
  };

  return (
    <View style={styles.container}>
      <Text>Account Recovery Page</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
        color="#3498db" 
      
      />
      <Button
        title="Recover Account"
        onPress={handleRecovery}
        color="#3498db"
  
      />
    </View>
  );
};

const HomePage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>BAGSAK KA</Text>
    <Button
      title="Logout"
      onPress={() => navigation.navigate('Login')}
      color="#3498db" 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 500,
    
  },
});

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="FACEDUPE" component={LandingPage} 
      options={{ headerShown: true, cardStyle: { backgroundColor: '#246EE9' } }}/>
      <Stack.Screen name="Login" component={LoginPage} 
      options={{ title: 'Login', cardStyle: { backgroundColor: 'transparent'} }}/>
      <Stack.Screen name="Registration" component={RegistrationPage}
      options={{ title: 'Registration', cardStyle: { backgroundColor: 'transparent'} }} />
      <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} 
      options={{ title: 'AccountRecovery', cardStyle: { backgroundColor: 'transparent'} }}/>
      <Stack.Screen name="Home" component={HomePage} 
      options={{ title: 'Home', cardStyle: { backgroundColor: '#246EE9'} }}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
