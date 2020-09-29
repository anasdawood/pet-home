import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Pets } from '.'

const app = () => express(apiRoot, routes)

let pets

beforeEach(async () => {
  pets = await Pets.create({})
})

test('POST /pets 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', type: 'test', bread: 'test', location: 'test', lat: 'test', lon: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.bread).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.lat).toEqual('test')
  expect(body.lon).toEqual('test')
})

test('GET /pets 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /pets/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${pets.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pets.id)
})

test('GET /pets/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /pets/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${pets.id}`)
    .send({ name: 'test', type: 'test', bread: 'test', location: 'test', lat: 'test', lon: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pets.id)
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.bread).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.lat).toEqual('test')
  expect(body.lon).toEqual('test')
})

test('PUT /pets/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', type: 'test', bread: 'test', location: 'test', lat: 'test', lon: 'test' })
  expect(status).toBe(404)
})

test('DELETE /pets/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${pets.id}`)
  expect(status).toBe(204)
})

test('DELETE /pets/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
