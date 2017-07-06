import { observable, action } from 'mobx';
import request from 'superagent';

export default class Membership {
  @observable member = null

  static presets = {
    qa: {
      host: 'qa-membership-api.theknot.com',
      apiKey: 'default'
    },
    production: {
      host: 'membership-api.theknot.com',
      apiKey: 'default'
    },
  }

  constructor({ host, apiKey } = Membership.presets.qa) {
    this.host = host;
    this.apiKey = apiKey;
  }

  @action
  create(params) {
    request
      .post(`//${this.host}/members?apikey=${this.apiKey}`)
      .withCredentials()
      .send({ members: params })
      .end((resp) => {
        console.log(resp);
      });
  }

  @action
  logIn(params) {
    request
      .post(`//${this.host}/sessions?apikey=${this.apiKey}`)
      .withCredentials()
      .send({ sessions: params })
      .end((resp) => {
        console.log(resp);
      });
  }
}
