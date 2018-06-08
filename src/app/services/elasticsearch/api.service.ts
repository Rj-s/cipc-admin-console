import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { apiDetails } from './config'

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  hosts: apiDetails.hosts,
  httpAuth: apiDetails.username + ':' + apiDetails.password,
});

@Injectable()
export class ElasticSearchService {
  constructor(private http: Http) {
  }

  search = (term) => {
    let response = client.search({
      q: 'pants'
    }).then(function (body) {
      return body;
    }, function (error) {
      console.trace(error.message);
      return error;
    });

    return response;
  }

}