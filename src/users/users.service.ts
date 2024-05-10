import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@email.com'
    }
  ]

  getUsers (): object[] {
    return this.users
  }

  getUser (id: number): object {
    const user: object | undefined = this.users.find(user => user.id === id)
    if (user === undefined) {
      throw new Error('User not found')
    }
    return user
  }

  createUser (name: string, email: string): object {
    const user = {
      id: this.users.length + 1,
      name,
      email
    }
    this.users.push(user)
    return user
  }

  updateUser (id: number, name: string, email: string): object {
    const user: { id: number, name: string, email: string } | undefined = this.users.find(user => user.id === id)
    if (user === undefined) {
      throw new Error('User not found')
    }
    user.name = name
    user.email = email
    return user
  }

  deleteUser (id: number): object {
    const userIndex: number = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    const user: object = this.users[userIndex]
    this.users.splice(userIndex, 1)
    return user
  }

  patchUser (id: number, name: string, email: string): object {
    const user: { id: number, name: string, email: string } | undefined = this.users.find(user => user.id === id)
    if (user === undefined) {
      throw new Error('User not found')
    }
    if (name !== undefined) {
      user.name = name
    }
    if (email !== undefined) {
      user.email = email
    }
    return user
  }
}
