/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import type { ViewProps } from 'ViewPropTypes';
import type { ColorValue } from 'StyleSheetTypes';

('use strict');

const React = require('react');
const { StyleSheet } = require('react-native');
const TabBarItemIOS = require('./TabBarItemIOS');

const RCTTabBar = require('./RCTTabBarNativeComponent');

type Props = $ReadOnly<{|
  ...ViewProps,

  /**
   * Color of text on unselected tabs
   */
  unselectedTintColor?: ColorValue,

  /**
   * Color of the currently selected tab icon
   */
  tintColor?: ColorValue,

  /**
   * Color of unselected tab icons. Available since iOS 10.
   */
  unselectedItemTintColor?: ColorValue,

  /**
   * Background color of the tab bar
   */
  barTintColor?: ColorValue,

  /**
   * The style of the tab bar. Supported values are 'default', 'black'.
   * Use 'black' instead of setting `barTintColor` to black. This produces
   * a tab bar with the native iOS style with higher translucency.
   */
  barStyle?: ?('default' | 'black'),

  /**
   * A Boolean value that indicates whether the tab bar is translucent
   */
  translucent?: ?boolean,

  /**
   * Specifies tab bar item positioning. Available values are:
   * - fill - distributes items across the entire width of the tab bar
   * - center - centers item in the available tab bar space
   * - auto (default) - distributes items dynamically according to the
   * user interface idiom. In a horizontally compact environment (e.g. iPhone 5)
   * this value defaults to `fill`, in a horizontally regular one (e.g. iPad)
   * it defaults to center.
   */
  itemPositioning?: ?('fill' | 'center' | 'auto'),
|}>;

class TabBarIOS extends React.Component<Props> {
  static Item = TabBarItemIOS;

  render() {
    return (
      <RCTTabBar
        style={[styles.tabGroup, this.props.style]}
        unselectedTintColor={this.props.unselectedTintColor}
        unselectedItemTintColor={this.props.unselectedItemTintColor}
        tintColor={this.props.tintColor}
        barTintColor={this.props.barTintColor}
        barStyle={this.props.barStyle}
        itemPositioning={this.props.itemPositioning}
        translucent={this.props.translucent !== false}
      >
        {this.props.children}
      </RCTTabBar>
    );
  }
}

const styles = StyleSheet.create({
  tabGroup: {
    flex: 1,
  },
});

module.exports = TabBarIOS;
