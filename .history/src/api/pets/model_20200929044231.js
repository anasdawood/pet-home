import mongoose, { Schema } from 'mongoose'

const petsSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  breed: {
    type: String
  },
  location: {
    type: String
  },
  lat: {
    type: String
  },
  lon: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

petsSchema.index({ name: 1, type: 1, breed: 1}, { unique: true })

petsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      type: this.type,
      breed: this.breed,
      location: this.location,
      lat: this.lat,
      lon: this.lon,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Pets', petsSchema)

export const schema = model.schema
export default model
