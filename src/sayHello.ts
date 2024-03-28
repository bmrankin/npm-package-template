import { SayHelloProps } from "./types"

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  // ...
  if (!firstName?.length)
    return 'Hello. What is your first name?'
  let msg = `Hello ${firstName}`
  if (lastName)
    msg = msg + ` ${lastName}`
  if (age)
    msg = msg + `. You are ${age} years old`

    return msg
}
