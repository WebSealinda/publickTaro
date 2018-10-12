import { request } from 'azalea-web-request';

export const url = params => request('/v1/loan-product/product/recomment',{
  method: 'GET',
  params,
})

export const urlToKen = params => request('/v1/agency/agent/user/detail',{
  method: 'GET',
  params: {id: 358},
})

