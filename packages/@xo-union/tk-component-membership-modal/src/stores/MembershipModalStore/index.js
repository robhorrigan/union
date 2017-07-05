import { observable, action, computed } from 'mobx';
import { g } from 'xojs/lib/runtime/getGlobal';

class DefaultNavigateStrategy {
  constructor({ location = g.location }) {
    this.location = location;
  }

  logIn() {
    /* Go to dashboard */
    this.location.href = '/dashboard';
  }

  create() {
    this.location.href = '/onboarding';
  }
}

export default class MembershipModalStore {
  static SIGN_UP = 'SIGN_UP';
  static LOG_IN = 'LOG_IN';

  @observable currentView;

  constructor({
    initialView,
    membership,
    navigateStrategy
  }) {
    this.membership = membership;
    this.navigateStrategy = navigateStrategy;
    this.currentView = initialView;
  }

  @action.bound changeToSignUp() {
    this.currentView = MembershipModalStore.SIGN_UP;
  }

  @action.bound changeToLogIn() {
    this.currentView = MembershipModalStore.LOG_IN;
  }

  @computed get isLogIn() {
    return this.currentView === MembershipModalStore.LOG_IN;
  }

  @computed get isSignUp() {
    return this.currentView === MembershipModalStore.SIGN_UP;
  }

  @action createAccount(data) {
    return this.membership.create(data).then(() => {
      this.navigateStrategy.create();
    });
  }
}

