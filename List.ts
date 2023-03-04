import Node from "./Node";
// interface Lista<T> {
//    head?: Node<T>
//    tail?: Node<T>
// }
export default class List<T> {
   head?: Node<T>
   tail?: Node<T>
   
   constructor( startingValue?: T ) {
      if ( startingValue === undefined ) { return }
      this.tail = this.head = new Node<T>({ value: startingValue })
   }
   
   print(): void {
      let length = 0
      if ( this.head === undefined ) {
         console.log('List is empty');
      } else {
         let current = this.head
         length++
         console.log(current.value); // Make use of only one log / Maybe recursive function
         while( current.next !== undefined ) {
            current = current.next
            length++
            console.log(current.value);
         }
      }
      console.log(`This list of ${String.prototype.toUpperCase.call(typeof(this.head?.value))}S size is ${length}`);
   }
   
   getLast(): Node<T> | undefined {
      if ( this.head === undefined ) {
         return this.head
      } else {
         let current = this.head
         while( current.next !== undefined ) {
            current = current.next
         }
         return current
      }
   }
      
   append( value: T ): void {
      let newNode = new Node({ value: value })
      let lastNode = this.getLast()
      if( lastNode === undefined ) {
         this.head = this.tail = newNode
      } else {
         this.tail = lastNode.next = newNode
         this.tail.previous = lastNode
      }
   }
}

// let meuNome = new Node<string>({ value: "Ricardo" })
// console.log(`Oi, ${ JSON.stringify(meuNome) }`); // Oi, {"value":"Ricardo"}
// console.log(`Olá, ${ meuNome.value }`); // Olá, Ricardo