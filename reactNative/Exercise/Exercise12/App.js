import React from 'react';
import { FormControl, StatusBar } from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import {FormCOntrol, Input, Stack, WarningOutlineIcon, Box, Center, NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box 
          w = {{
            base: "90%",
            md: "25%",
          }}
        >
          <FormControl isRequired>
            <Stack mx="4">
             <FormControl.Label>UserName</FormControl.Label>
             <Input type="text" value='john done' placeholder='User Name'></Input>
             <FormControl.HelperText>
              Must be at least 6 characters
             </FormControl.HelperText>
             <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
             </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="4">
             <FormControl.Label>Password</FormControl.Label>
             <Input type="password" value='12345' placeholder='password'></Input>
             <FormControl.HelperText>
              Must be at least 6 characters
             </FormControl.HelperText>
             <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
             </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});