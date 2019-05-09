# TabBarIOS

⚠️ Work in progress and not yet a working npm library ⚠️

The TabBarIOS has been [removed](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#ios-specific-10) from React Native v0.59. We still use it in one of our projects, so I'll malke sure it still works. Feel free to contribute.

## Props

* barStyle
* barTintColor
* itemPositioning
* style
* tintColor
* translucent
* unselectedItemTintColor
* unselectedTintColor

## Reference
### Props

### barStyle

The style of the tab bar. Supported values are 'default', 'black'. Use 'black' instead of setting barTintColor to black. This produces a tab bar with the native iOS style with higher translucency.

| TYPE          | REQUIRED      |
| ------------- |-------------|
| enum('default', 'black') | No |

### barTintColor

Background color of the tab bar

| TYPE          | REQUIRED      |
| ------------- |-------------|
| color | No |

### itemPositioning

Specifies tab bar item positioning. Available values are:

* fill - distributes items across the entire width of the tab bar
* center - centers item in the available tab bar space
* auto (default) - distributes items dynamically according to the user interface idiom. In a horizontally compact environment (e.g. iPhone 5) this value defaults to fill, in a horizontally regular one (e.g. iPad) it defaults to center.

| TYPE          | REQUIRED      |
| ------------- |-------------|
| enum('fill', 'center', 'auto') | No |

### style

| TYPE          | REQUIRED      |
| ------------- |-------------|
| View.style | No |

### tintColor

Color of the currently selected tab icon

| TYPE          | REQUIRED      |
| ------------- |-------------|
| color | No |

### translucent

A Boolean value that indicates whether the tab bar is translucent

| TYPE          | REQUIRED      |
| ------------- |-------------|
| bool | No |

### unselectedItemTintColor

Color of unselected tab icons. Available since iOS 10.

| TYPE          | REQUIRED      |
| ------------- |-------------|
| color | No |

### unselectedTintColor

Color of text on unselected tabs

| TYPE          | REQUIRED      |
| ------------- |-------------|
| color | No |
