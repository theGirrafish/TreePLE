import React, {PureComponent} from 'react';
import axios from 'axios';

// const backendUrl = 'http://localhost:8088/';
// const frontendUrl = 'http://localhost:8087/';
// const backendUrl = '';
// const frontendUrl = '';

const AXIOS = axios.create({
  // baseURL: backendUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  },
  timeout: 5000
});

// ==============================
// GET API
// ==============================

function getAllTrees() {
  const url = '/trees/';
  return getRequest(url);
};

function getAllTreeLocations() {
  const url = '/trees/?query=locations';
  return getRequest(url);
}

function getAllUsers() {
  const url = '/users/';
  return getRequest(url);
};

function getUser(params) {
  const url = '/users/';
  return getRequestWithParams(url, params);
};

function getAllSpecies() {
  const url = '/species/';
  return getRequest(url);
}

function getAllLocations() {
  const url = '/locations/';
  return getRequest(url);
}

function getAllMunicipalities() {
  const url = '/municipalities/';
  return getRequest(url);
}


// ==============================
// POST API
// ==============================

function createTree(jsonParams) {
  const url = '/newtree/';
  return postRequest(url);
}

function createUser(jsonParams) {
  const url = '/newuser/';
  return postRequest(url);
}


// ==============================
// REQUEST API
// ==============================

function getRequest(url) {
  return AXIOS.get('/api' + url);
};

function getRequestWithParams(url, params) {
  return AXIOS.get('/api' + url, params);
};

function postRequest(url) {
  return AXIOS.post('/api' + url);
};

export {getAllTrees, getAllTreeLocations, createTree,
        getAllUsers, getUser, createUser,
        getAllSpecies,
        getAllLocations,
        getAllMunicipalities};