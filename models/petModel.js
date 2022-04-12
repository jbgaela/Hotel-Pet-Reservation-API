import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const petSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    petName: {
      type: 'string',
      required: true
    },
    petDateOfBirth: {
      type: 'date',
      required: true
    },
    petAllergy: {
      type: 'string'
    },
    petWeight: {
      type: 'number',
      required: true
    },
    petAddress: {
      type: 'string',
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Pet = mongoose.model('Pet', petSchema)

export default Pet
