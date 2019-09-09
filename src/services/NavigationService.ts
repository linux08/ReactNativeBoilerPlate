import {NavigationActions} from 'react-navigation';

// https://github.com/react-navigation/react-navigation/issues/1439

let navigator;
let _container; // eslint-disable-line

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function setContainer(container) {
  _container = container;
}

function reset(routeName: string, params: any) {
  _container.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
}

function navigate(routeName: string, params: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function navigateDeep(actions) {
  _container.props.navigation.dispatch(
    actions.reduceRight(
      (prevAction, action) =>
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  );
}

function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }

  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
  navigate,
  setTopLevelNavigator,
  navigateDeep,
  reset,
  getCurrentRoute,
};
