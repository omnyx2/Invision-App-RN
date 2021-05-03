const getCurrentRoute = (navigationState) => {
  if (!navigationState) {
      return null
  } else if (!navigationState.routes) {
      return navigationState
  }

  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
      return getCurrentRoute(route)
  }

  return route
}

const Routes = {
 TabStack: { key: "TabStack" },

 Screen1: { key: "Screen1", title: "Screen 1" }, 
 Screen2: { key: "Screen2", title: "Screen 2" },
 Screen3: { key: "Screen3", title: "Screen 3" },
}

const tabNavigator = createMaterialTopTabNavigator({
    [Routes.Screen1.key]: { screen: FirstScreen },
    [Routes.Screen2.key]: { screen: SecondScreen },
    [Routes.Screen3.key]: { screen: ThirdScreen },
 }, {
    initialRouteName: Routes.Screen1.key,
    ...
    tabBarOptions: { ... }
 }
)

const mainNavigator = createStackNavigator({
    [Routes.TabStack.key]: tabNavigator
 }, {
    initialRouteName: Routes.TabStack.key,
    navigationOptions: ({ navigation }) => {
       // triggered each time you're changing a tab

       const navRoute = getCurrentRoute(navigation.state)
          , route = navRoute && navRoute.routeName && Routes[navRoute.routeName]
          , title = route ? route.title : ""

       return { title }
    }
 })
)

export default mainNavigator