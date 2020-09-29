import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Pets, { schema } from './model'

const router = new Router()
const { name, type, breed, location, lat, lon } = schema.tree

/**
 * @api {post} /pets Create pets
 * @apiName CreatePets
 * @apiGroup Pets
 * @apiParam name Pets's name.
 * @apiParam type Pets's type.
 * @apiParam breed Pets's breed.
 * @apiParam location Pets's location.
 * @apiParam lat Pets's lat.
 * @apiParam lon Pets's lon.
 * @apiSuccess {Object} pets Pets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pets not found.
 */
router.post('/',
  body({ name, type, breed, location, lat, lon }),
  create)

/**
 * @api {get} /pets Retrieve pets
 * @apiName RetrievePets
 * @apiGroup Pets
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of pets.
 * @apiSuccess {Object[]} rows List of pets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /pets/:id Retrieve pets
 * @apiName RetrievePets
 * @apiGroup Pets
 * @apiSuccess {Object} pets Pets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pets not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /pets/:id Update pets
 * @apiName UpdatePets
 * @apiGroup Pets
 * @apiParam name Pets's name.
 * @apiParam type Pets's type.
 * @apiParam breed Pets's breed.
 * @apiParam location Pets's location.
 * @apiParam lat Pets's lat.
 * @apiParam lon Pets's lon.
 * @apiSuccess {Object} pets Pets's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pets not found.
 */
router.put('/:id',
  body({ name, type, breed, location, lat, lon }),
  update)

/**
 * @api {delete} /pets/:id Delete pets
 * @apiName DeletePets
 * @apiGroup Pets
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pets not found.
 */
router.delete('/:id',
  destroy)

export default router
