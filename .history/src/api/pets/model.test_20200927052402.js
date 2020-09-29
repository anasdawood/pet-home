import { Pets } from '.'

let pets

beforeEach(async () => {
  pets = await Pets.create({ name: 'test', type: 'test', bread: 'test', location: 'test', lat: 'test', lon: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = pets.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pets.id)
    expect(view.name).toBe(pets.name)
    expect(view.type).toBe(pets.type)
    expect(view.bread).toBe(pets.bread)
    expect(view.location).toBe(pets.location)
    expect(view.lat).toBe(pets.lat)
    expect(view.lon).toBe(pets.lon)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = pets.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pets.id)
    expect(view.name).toBe(pets.name)
    expect(view.type).toBe(pets.type)
    expect(view.bread).toBe(pets.bread)
    expect(view.location).toBe(pets.location)
    expect(view.lat).toBe(pets.lat)
    expect(view.lon).toBe(pets.lon)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
