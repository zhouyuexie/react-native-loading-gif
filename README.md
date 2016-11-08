# react-native-loading

Support for custom pop-up effects and GIF.

![](https://github.com/zhouyuexie/react-native-loading/blob/master/animation.gif)

## Install

```shell
npm install react-native-loading --save
```

## Use

```jsx
import Load from "react-native-loading";

<Load ref="Load"></Load>
```

## Document

The loader has many uses way and API:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| opacity | 0.6 | number | Background transparency |
| bgColor | #000000 | string | background color |
| isShow | false | boolean | Whether to display immediately |
| Image | 0 | number | GIF number,a total of six,0~5 |
| showBtn | false | boolean | Whether to display the close button |
| BtnStyle | none | object(style) | close button style |
| bgAnimate | default | boolean | "default" or "opacity" |
| fadeWay | up | string | pop-up position |
```

Api:

1. `OpenLoad()`:Open LoadBox.
2. `CloseLoad()`:Close LoadBox.
3. `setTimeClose()`:Display the set time, and then automatically hide,default value is 2000.

Like this:

```jsx
render(){
  return (
    <View>
      <YourComponent />
      <Load ref="Load"></Load>
    <View>
  )
}
componentDidMount(){
  this.refs.Load.setTimeClose();//default 2000
  // his.refs.Load.setTimeClose(3000);
}
```

Or this:

```jsx
render(){
  return (
    <View>
      <TouchableOpacity onPress={()=>{this._onPress()}}>
        <Text>click</Text>
      </TouchableOpacity>
      <Load showBtn={true} ref="Load"></Load>
    <View>
  )
}
_onPress(){
  this.refs.Load.OpenLoad();
}
```

## Example

1. step 1

`git clone https://github.com/zhouyuexie/react-native-navigator-animation.git`

2. step 2

`cd ./react-native-navigator-animation/example`

3. step 3

`npm install`

4. step 4

`react-native run-ios` or `react-native run-android`
