export default class Node<T> {
   value: T
   previous?: Node<T>
   next?: Node<T>
   
   constructor({ value }: { value: T }) {
      this.value = value
   }
}