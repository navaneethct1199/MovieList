import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { type StackHeaderProps } from '@react-navigation/stack';

export type AppBarProps = StackHeaderProps;

export function AppBar({ navigation, route, options, back }: AppBarProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header mode="center-aligned">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
