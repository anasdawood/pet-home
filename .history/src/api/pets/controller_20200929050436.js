import { success, notFound } from '../../services/response/'
import { Pets } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Pets.create(body)
    .then((pets) => pets.view(true))
    .then(success(res, 201))
    .catch(err => {
      console.log(`caught the error: ${err}`);
      if (err.code == 11000)
      {
        err.message = "Duplicate Entry. Pet is already in our records."
      }
      else{
        err.message = "Test"

      }
      
      return res.status(201).json(err);
    })

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Pets.count(query)
    .then(count => Pets.find(query, select, cursor)
      .then((pets) => ({
        count,
        rows: pets.map((pets) => pets.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Pets.findById(params.id)
    .then(notFound(res))
    .then((pets) => pets ? pets.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Pets.findById(params.id)
    .then(notFound(res))
    .then((pets) => pets ? Object.assign(pets, body).save() : null)
    .then((pets) => pets ? pets.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Pets.findById(params.id)
    .then(notFound(res))
    .then((pets) => pets ? pets.remove() : null)
    .then(success(res, 204))
    .catch(next)
