import { describe, test, expect } from 'vitest'
import { SayHelloProps } from './types'
import { sayHello } from './sayHello'

describe('sayHello', () => {
  test('no first name provided', () => {
    const payload: any = {}
    expect(payload).not.toHaveProperty('firstName')
    expect(sayHello(payload)).toEqual('Hello. What is your first name?')
  })

  test('greet user with all props', () => {
    const payload: SayHelloProps = {
      firstName: 'Bryan',
      lastName: 'Rankin',
      age: 40
    }

    const msg: string = sayHello(payload)
    expect(msg).toEqual('Hello Bryan Rankin. You are 40 years old')
  })

  test('greet user with full name no age', () => {
    const payload: SayHelloProps = {
      firstName: 'Bryan',
      lastName: 'Rankin'
    }
    expect(payload).toHaveProperty('firstName')
    expect(payload).toHaveProperty('lastName')
    expect(payload).not.toHaveProperty('age')

    const msg: string = sayHello(payload)
    expect(msg).toEqual('Hello Bryan Rankin')
  })

  test('greet user with first name and age', () => {
    const payload: SayHelloProps = {
      firstName: 'Bryan',
      age: 40
    }
    expect(payload).toHaveProperty('firstName')
    expect(payload).not.toHaveProperty('lastName')
    expect(payload).toHaveProperty('age')

    const msg: string = sayHello(payload)
    expect(msg).toEqual('Hello Bryan. You are 40 years old')
  })

  test('greet user with first name only', () => {
    const payload: SayHelloProps = {
      firstName: 'Bryan'
    }
    expect(payload).toHaveProperty('firstName')
    expect(payload).not.toHaveProperty('lastName')
    expect(payload).not.toHaveProperty('age')
    
    const msg: string = sayHello(payload)
    expect(msg).toEqual('Hello Bryan')
  })
})
